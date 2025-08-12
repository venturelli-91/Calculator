import { create } from 'zustand';
import { CalculatorStore } from './types';
import { evaluate } from 'mathjs';

export const useCalculatorStore = create<CalculatorStore>((set) => ({
  displayValue: '0',
  history: [],
  operator: null,
  operand: null,
  result: null,

  setDisplayValue: (value) => set({ displayValue: value }),
  addToHistory: (entry) => set((state) => ({ history: [...state.history, entry] })),
  setOperator: (operator) => set({ operator }),
  setOperand: (operand) => set({ operand }),
  calculateResult: () => {
    set((state) => {
      let result: string;
      try {
        if (state.operator && state.operand !== null) {
          const expression = `${state.operand} ${state.operator} ${state.displayValue}`;
          result = evaluate(expression).toString();
        } else {
          result = evaluate(state.displayValue).toString();
        }
      } catch {
        result = 'Erro';
      }
      return {
        displayValue: result,
        result,
        operator: null,
        operand: null,
      };
    });
  },
  clear: () =>
    set({
      displayValue: '0',
      operator: null,
      operand: null,
      result: null,
      history: [],
    }),
}));

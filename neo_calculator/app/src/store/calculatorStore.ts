import { create } from "zustand";
import { CalculatorStore } from "./types";

export const useCalculatorStore = create<CalculatorStore>((set) => ({
	displayValue: "0",
	history: [],
	operator: null,
	operand: null,
	result: null,

	setDisplayValue: (value) => set({ displayValue: value }),
	addToHistory: (entry) =>
		set((state) => ({ history: [...state.history, entry] })),
	setOperator: (operator) => set({ operator }),
	setOperand: (operand) => set({ operand }),
	calculateResult: () => {
		// Implementação simplificada, ajuste conforme a lógica da calculadora
		set((state) => {
			const result = state.displayValue;
			// ... lógica de cálculo ...
			return { result };
		});
	},
	clear: () =>
		set({
			displayValue: "0",
			operator: null,
			operand: null,
			result: null,
			history: [],
		}),
}));

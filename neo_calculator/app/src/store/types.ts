// Interfaces e tipos para o Zustand Store da calculadora

export interface CalculatorState {
	displayValue: string;
	history: string[];
	operator: string | null;
	operand: string | null;
	result: string | null;
}

export interface CalculatorActions {
	setDisplayValue: (value: string) => void;
	addToHistory: (entry: string) => void;
	setOperator: (operator: string) => void;
	setOperand: (operand: string) => void;
	calculateResult: () => void;
	clear: () => void;
}

export type CalculatorStore = CalculatorState & CalculatorActions;

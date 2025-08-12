import React from "react";
import Button from "./Button";

interface KeypadProps {
	onNumberClick: (num: string) => void;
	onOperatorClick: (op: string) => void;
	onActionClick: (action: string) => void;
}

const numbers = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."];
const operators = ["/", "*", "-", "+"]; // Pode adaptar para símbolos visuais
const actions = ["C", "=", "←"];

const Keypad: React.FC<KeypadProps> = ({
	onNumberClick,
	onOperatorClick,
	onActionClick,
}) => {
	return (
		<div className="grid grid-cols-4 gap-2 p-2">
			{/* Números */}
			{numbers.map((num) => (
				<Button
					key={num}
					label={num}
					type="number"
					onClick={() => onNumberClick(num)}
				/>
			))}
			{/* Operadores */}
			{operators.map((op) => (
				<Button
					key={op}
					label={op}
					type="operator"
					onClick={() => onOperatorClick(op)}
				/>
			))}
			{/* Ações */}
			{actions.map((action) => (
				<Button
					key={action}
					label={action}
					type="action"
					onClick={() => onActionClick(action)}
				/>
			))}
		</div>
	);
};

export default Keypad;

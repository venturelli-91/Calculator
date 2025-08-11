import React, { useState } from "react";
import Display from "./Display.tsx";
import Keypad from "./Keypad.tsx";
import type { KeyType } from "./Keypad.tsx";

const Calculator: React.FC = () => {
	const [expression, setExpression] = useState("");
	const [result, setResult] = useState<string | undefined>("");
	const [error, setError] = useState<string | undefined>(undefined);

	const handleKeyPress = (key: KeyType) => {
		setError(undefined);
		if (key === "C") {
			setExpression("");
			setResult("");
		} else if (key === "=") {
			try {
				const evalResult = eval(expression.replace(/[^-+*/.\d]/g, ""));
				setResult(String(evalResult));
			} catch {
				setError("Expressão inválida");
			}
		} else {
			setExpression((prev) => prev + key);
		}
	};

	return (
		<div className="max-w-xs mx-auto mt-10 bg-white rounded-lg shadow-lg p-4">
			<Display
				expression={expression}
				result={result ?? ""}
				error={error ?? ""}
			/>

			<Keypad onKeyPress={handleKeyPress} />
		</div>
	);
};

export default Calculator;

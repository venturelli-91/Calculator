import React, { useState } from "react";
import Display from "./Display.tsx";
import Keypad from "./Keypad.tsx";
import type { KeyType } from "./Keypad.tsx";
import ErrorModal from "./ErrorModal.tsx";

const Calculator: React.FC = () => {
	const [expression, setExpression] = useState<string>("");
	const [result, setResult] = useState<string>("");
	const [error, setError] = useState<string | undefined>(undefined);
	const [modalOpen, setModalOpen] = useState<boolean>(false);
	const [darkMode, setDarkMode] = useState<boolean>(false);

	const handleKeyPress = (key: KeyType) => {
		if (error) setError(undefined);
		if (key === "C") {
			setExpression("");
			setResult("");
			setError(undefined);
			setModalOpen(false);
		} else if (key === "=") {
			try {
				// Only allow numbers and operators
				if (/^[0-9+\-*/(). ]+$/.test(expression)) {
					const evalResult = eval(expression);
					setResult(String(evalResult));
					setError(undefined);
				} else {
					throw new Error("Expressão inválida");
				}
			} catch {
				setError("Expressão inválida");
				setModalOpen(true);
			}
		} else {
			setExpression((prev) => prev + key);
		}
	};

	const handleCloseModal = () => {
		setModalOpen(false);
		setError(undefined);
	};

	return (
		<div
			className={`max-w-xs mx-auto mt-10 p-4 rounded-lg shadow-lg transition-colors duration-300 ${
				darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
			}`}>
			<div className="flex justify-end mb-2">
				<button
					className={`px-3 py-1 rounded focus:outline-none border text-sm transition-colors duration-200 ${
						darkMode
							? "bg-gray-800 border-gray-700 text-yellow-300"
							: "bg-gray-200 border-gray-300 text-gray-700"
					}`}
					onClick={() => setDarkMode((prev) => !prev)}
					aria-label="Alternar tema claro/escuro">
					{darkMode ? "🌙 Escuro" : "☀️ Claro"}
				</button>
			</div>
			<Display
				expression={expression}
				result={result}
				error={error || ""}
			/>
			<Keypad onKeyPress={handleKeyPress} />
			<ErrorModal
				message={error || ""}
				open={modalOpen}
				onClose={handleCloseModal}
			/>
		</div>
	);
};

export default Calculator;

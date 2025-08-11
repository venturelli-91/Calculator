import React from "react";

export interface DisplayProps {
	expression: string;
	result: string;
	error?: string;
}

const Display: React.FC<DisplayProps> = ({ expression, result, error }) => {
	return (
		<div className="bg-gray-100 rounded-t-lg p-4 text-right shadow-inner">
			<div
				className="text-lg text-gray-500 truncate"
				aria-label="Expressão">
				{expression}
			</div>
			<div
				className="text-2xl font-bold text-gray-900"
				aria-label="Resultado">
				{result}
			</div>
			{error && (
				<div
					className="text-sm text-red-500 mt-1"
					aria-live="assertive">
					{error}
				</div>
			)}
		</div>
	);
};

export default Display;

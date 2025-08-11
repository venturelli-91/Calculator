import React from "react";

export interface KeyButtonProps {
	label: string;
	onClick: (label: string) => void;
	type?: "number" | "operator" | "action";
	className?: string;
}

const baseStyles =
	"text-xl font-bold py-4 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-500";

const typeStyles: Record<string, string> = {
	number: "bg-gray-200 hover:bg-gray-300",
	operator: "bg-yellow-300 hover:bg-yellow-400",
	action: "bg-red-300 hover:bg-red-400",
};

const KeyButton: React.FC<KeyButtonProps> = ({
	label,
	onClick,
	type = "number",
	className = "",
}) => {
	return (
		<button
			className={`${baseStyles} ${typeStyles[type] || ""} ${className}`}
			onClick={() => onClick(label)}
			aria-label={label}>
			{label}
		</button>
	);
};

export default KeyButton;

import React from "react";

interface ButtonProps {
	label: string;
	onClick: () => void;
	type?: "number" | "operator" | "action";
	className?: string;
}

const baseClasses =
	"flex items-center justify-center h-14 w-14 m-1 rounded-lg text-xl font-bold transition-colors duration-150 cursor-pointer select-none";

const typeClasses: Record<string, string> = {
	number: "bg-neutral-800 text-white hover:bg-neutral-700",
	operator: "bg-blue-600 text-white hover:bg-blue-500",
	action: "bg-red-600 text-white hover:bg-red-500",
};

const Button: React.FC<ButtonProps> = ({
	label,
	onClick,
	type = "number",
	className = "",
}) => {
	return (
		<button
			type="button"
			className={`${baseClasses} ${typeClasses[type] || ""} ${className}`}
			onClick={onClick}>
			{label}
		</button>
	);
};

export default Button;

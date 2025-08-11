import React from "react";

export type KeyType = string;

interface KeypadProps {
	onKeyPress: (key: KeyType) => void;
}

const keys: KeyType[] = [
	"1",
	"2",
	"3",
	"+",
	"4",
	"5",
	"6",
	"-",
	"7",
	"8",
	"9",
	"*",
	"C",
	"0",
	"=",
	"/",
];

const Keypad: React.FC<KeypadProps> = ({ onKeyPress }) => {
	return (
		<div className="grid grid-cols-4 gap-2 p-4">
			{keys.map((key) => (
				<button
					key={key}
					className={
						`bg-gray-200 hover:bg-gray-300 text-xl font-bold py-4 rounded shadow ` +
						(/[+\-*/=]/.test(key) ? "bg-yellow-300 hover:bg-yellow-400" : "") +
						(key === "C" ? "bg-red-300 hover:bg-red-400" : "")
					}
					onClick={() => onKeyPress(key)}
					aria-label={key}>
					{key}
				</button>
			))}
		</div>
	);
};

export default Keypad;

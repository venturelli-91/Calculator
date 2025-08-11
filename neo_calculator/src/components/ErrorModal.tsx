import React, { useEffect } from "react";

interface ErrorModalProps {
	message: string;
	open: boolean;
	onClose: () => void;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ message, open, onClose }) => {
	useEffect(() => {
		if (!open) return;
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", handleEsc);
		return () => window.removeEventListener("keydown", handleEsc);
	}, [open, onClose]);

	if (!open) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
			<div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-center relative">
				<div className="text-red-600 text-lg font-bold mb-2">Erro</div>
				<div className="text-gray-800 mb-4">{message}</div>
				<button
					className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
					onClick={onClose}
					autoFocus>
					Fechar
				</button>
			</div>
			<div
				className="absolute inset-0"
				onClick={onClose}
				aria-label="Fechar modal"
				tabIndex={-1}
			/>
		</div>
	);
};

export default ErrorModal;

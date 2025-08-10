import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Display from "../components/Display.tsx";

describe("Display", () => {
	it("renders expression and result", () => {
		render(
			<Display
				expression="2+2"
				result="4"
			/>
		);
		expect(screen.getByLabelText("Expressão")).toHaveTextContent("2+2");
		expect(screen.getByLabelText("Resultado")).toHaveTextContent("4");
	});

	it("renders only expression if result is not provided", () => {
		render(<Display expression="3*3" />);
		expect(screen.getByLabelText("Expressão")).toHaveTextContent("3*3");
		expect(screen.getByLabelText("Resultado")).toBeEmptyDOMElement();
	});

	it("renders error message when error prop is provided", () => {
		render(
			<Display
				expression="1/0"
				result="Infinity"
				error="Erro: divisão por zero"
			/>
		);
		expect(screen.getByLabelText("Expressão")).toHaveTextContent("1/0");
		expect(screen.getByLabelText("Resultado")).toHaveTextContent("Infinity");
		expect(screen.getByText("Erro: divisão por zero")).toBeInTheDocument();
	});

	it("does not render error message if error prop is not provided", () => {
		render(
			<Display
				expression="5-2"
				result="3"
			/>
		);
		expect(screen.queryByText(/Erro/)).not.toBeInTheDocument();
	});
});

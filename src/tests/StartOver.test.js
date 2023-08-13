import React from "react";
import { render, fireEvent } from "@testing-library/react";
import StartOver from "../components/StartOver";

describe("StartOver component", () => {

  test("No errors detected", () => {
    render(<StartOver />);
  });

  test("onRestart function is called when button is clicked", () => {
    const mockOnRestart = jest.fn();
    const { getByText } = render(<StartOver onRestart={mockOnRestart} />);

    const startOverBtn = getByText("Start Over");
    fireEvent.click(startOverBtn);

    expect(mockOnRestart).toHaveBeenCalled();
  });

});

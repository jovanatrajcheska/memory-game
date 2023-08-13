import React from "react";
import { render, fireEvent } from "@testing-library/react";
import StartOver from "../components/StartOver";
describe("StartOver", () => {
  it("onRestart function is called when button is clicked", () => {
    const mockOnRestart = jest.fn();
    const { getByText } = render(<StartOver onRestart={mockOnRestart} />);

    const startOverButton = getByText("Start Over");
    fireEvent.click(startOverButton);

    expect(mockOnRestart).toHaveBeenCalled();
  });
});

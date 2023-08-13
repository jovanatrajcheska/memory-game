import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Cards from "../screens/Cards";
import CardsProp from "../components/CardsProp";

describe("Cards Component", () => {
  // active card
  test("checks if clicked card has class active", () => {
    const { container } = render(<CardsProp />);
    const cards = container.querySelectorAll(".card");

    fireEvent.click(cards[7]);
    expect(cards[7]).toHaveClass("active");
  });

  // is not active
  test("check if another card is not active", () => {
    const { container } = render(<CardsProp />);
    const cards = container.querySelectorAll(".card");

    // click on card
    fireEvent.click(cards[3]);
    expect(cards[3]).toHaveClass("active");

    // check if all other cards are not active
    for (let i = 0; i < cards.length; i++) {
      if (i != 3) {
        expect(cards[i]).not.toHaveClass("active");
      }
    }
  });

  test("checks if Start Over button exists", () => {
    const { getByText } = render(<Cards itemImgs={[]} />);
    const startOverButton = getByText("Start Over");

    expect(startOverButton).toBeInTheDocument();
  });
});

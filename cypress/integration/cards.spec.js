describe("Testing cards functionalities", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should check if the ids are same or not", () => {
    cy.get('[data-testid="cards-container"]').within(() => {
      cy.get('[data-testid^="card-"]').then(($cards) => {
        const firstCardToClick = $cards[5];
        const secondCardToClick = $cards[6];

        const firstCardId = Cypress.$(firstCardToClick)
          .attr("data-testid")
          .split("-")[1];
        const secondCardId = Cypress.$(secondCardToClick)
          .attr("data-testid")
          .split("-")[1];

        cy.log("First Card ID:", firstCardId);
        cy.log("Second Card ID:", secondCardId);

        cy.get(firstCardToClick).click();
        cy.get(secondCardToClick).click();

        // Checking if the cards are paired correctly, if they are, they should have the class 'correct' else they should have the class 'wrong'
        if (firstCardId === secondCardId) {
          cy.log("Cards are matched correctly");
        } else {
          cy.log("Cards are not matched correctly");
        }
      });
    });
  });

  it("when the card is click should have active class", () => {
    cy.get('[data-testid="card-0"]').click();
    cy.get('[data-testid="card-0"]').should("have.class", "active");

    cy.get('[data-testid="card-1"]').click();
    cy.get('[data-testid="card-1"]').should("have.class", "active");
  });

  it("if ids are not matched, the cards should flip", () => {
    cy.get('[data-testid="card-4"]').click();
    cy.get('[data-testid="card-9"]').click();

    cy.get('[data-testid="card-4"]').then(($card1) => {
      const isMatch = $card1.hasClass("active");

      if (!isMatch) {
        cy.get('[data-testid="card-4"]').should("have.class", "wrong");
        cy.get('[data-testid="card-9"]').should("have.class", "wrong");
        cy.get('[data-testid="card-4"]').should("not.have.class", "active");
        cy.get('[data-testid="card-9"]').should("not.have.class", "active");
      }
    });
  });

  it('should not allow multiple simultaneous clicks on same card', () => {
    // Click on a card
    cy.get('[data-testid="card-0"]').click();
    cy.get('[data-testid="card-0"]').should('have.class', 'active');
    
    cy.wait(3000);
    // second click on the same card
    cy.get('[data-testid="card-0"]').click();
    
    cy.wait(3000);
    // clicking on another card
    cy.get('[data-testid="card-5"]').click();
    cy.get('[data-testid="card-5"]').should('have.class', 'active');
  });
  
});

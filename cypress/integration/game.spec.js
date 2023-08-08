describe("Rendering Game", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  
  it('should render cards with correct images', () => {
    cy.get('[data-testid="cards-container"]').find('.card img').should('have.length', 16);
  });
  it('should shuffle and render cards', () => {
    cy.get('[data-testid="cards-container"]').find('.card').should('have.length', 16);
  });

  it('should not allow multiple simultaneous clicks', () => {
    // Click on a card
    cy.get('[data-testid="card-0"]').click();
  
    // Attempt to click the same card immediately
    cy.get('[data-testid="card-0"]').click();
  
    // Wait for a short time to ensure only one click is registered
    cy.wait(1000);
  
    // Card should still have "active" class
    cy.get('[data-testid="card-0"]').should('have.class', 'active');
  });
});

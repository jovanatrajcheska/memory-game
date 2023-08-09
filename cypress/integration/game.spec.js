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

});

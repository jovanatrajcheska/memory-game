describe("Memory Game Images", () => {
    
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should load and match fixture images", () => {
    cy.get(".card img").each(($img) => {
      const pairClass = $img.closest(".card").data("pairClass");

      if (pairClass && pairClass !== "") {
        // anything before the extension
        const imgName = pairClass.split(".")[0];
        const fixtureImage = `img/${imgName}.png`;

        // using isFixtureImage custom command from /support/commands.js
        cy.wrap($img).should("be.visible").isFixtureImage(fixtureImage);
      }
    });
  });

});

describe("Rendering Game", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should shuffle and render cards", () => {
    cy.fixture("itemsImg.json").as("itemsImgData");

    cy.get(".card img").then(($images) => {
      cy.get("@itemsImgData").then((itemsImg) => {
        const expectedImages = itemsImg.map((item) => item.img);
        const actualImages = Array.from($images).map((img) => img.src);

        expect(actualImages).not.to.deep.equal(expectedImages);
      });
    });
  });

});

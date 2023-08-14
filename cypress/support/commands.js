Cypress.Commands.add("isFixtureImage", { prevSubject: true }, (subject, fixtureImage) => {

    cy.wrap(subject).should(([img]) => {
      expect(img.complete).to.be.true;
    });
  
    cy.fixture(fixtureImage).then((fixtureContent) => {
      const loadedImg = new Image();
      loadedImg.src = `data:image/png;base64,${fixtureContent}`;
      loadedImg.onload = () => {
        cy.wrap(subject).should(([img]) => {
          expect(img.naturalWidth).to.equal(loadedImg.naturalWidth);
          expect(img.naturalHeight).to.equal(loadedImg.naturalHeight);
        });
      };
    });
    
  });
  
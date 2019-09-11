describe("Visitor can see books with certain attributes on landing page", () => {
  it("Displays correct books", () => {
    cy.visit("http://localhost:3000");
    cy.get("#books").within(() => {
      cy.get("#book_1").within(() => {
        cy.get(".title").should("contain", "Bamse i skogen");
        cy.get(".author").should("contain", "konrad");
      });
      cy.get("#book_2").should('not.be.visible')
    });
  });
});

// https://docs.cypress.io/api/introduction/api.html

describe("Testing Anchor Links", () => {
  it("clicking 'Find Out More' goes to new url", () => {
    cy.visit("/");
    cy.get(".CTA >> button").click();
    cy.url().should("include", "/about-us");
  });
});

describe("Testing external domain link", () => {
  it("Verify href property", () => {
    cy.visit("/join-us");
    cy.get("section > a").should(
      "have.prop",
      "href",
      Cypress.env("linkedin_url")
    );
  });
});

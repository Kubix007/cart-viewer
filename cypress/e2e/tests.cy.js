describe("`ALL PRODUCTS` PAGE TEST", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("All products should be rendered", () => {
    cy.get('[data-testid="productCard"]').should("be.visible");
  });

  it("Check if the product was added correctly", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-testid="addToCartButton"]').first().click();
    cy.contains("The product was added to your shopping cart!");
  });

  it("Check if there is an item in the shopping cart", () => {
    cy.get('[data-testid="addToCartButton"]').first().click();
    cy.get('[aria-label="SpeedDial openIcon example"]').click();
    cy.get('[data-testid="cartProduct"]').should("be.visible");
  });

  it("Check if there is an information about empty cart", () => {
    cy.get('[aria-label="SpeedDial openIcon example"]').click();
    cy.contains("Your shopping cart is empty");
  });

  it("Check if the product image was rendered correctly", () => {
    cy.get('[alt="cartImage"]').should("be.visible");
  });
});

describe("`MY CARTS` PAGE TEST", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get('[href="/carts"] > .MuiButtonBase-root').click();
  });

  it("All carts should be rendered", () => {
    cy.get('[data-testid="cartCard"]').should("be.visible");
  });

  it("Check if the product was deleted correctly", () => {
    cy.get('[data-testid="deleteButton"]').first().click();
    cy.get('[data-testid="yesDeleteButton"]').click();
    cy.contains("Cart has been deleted!");
  });

  it("Check if cart details has opened correctly", () => {
    cy.get('[data-testid="viewCartButton"]').first().click();
    cy.contains("Cart Details");
  });
});

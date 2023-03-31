describe("Application navigation tests", () => {
  it("passes", () => {
    cy.visit("/");

    // Check homepage title
    cy.get("div#homepage-title").contains("Amortecedor para Suas Milhas");

    // Check product detail page
    cy.get("div#grid-products").find("div").first().click();

    // Check the url path contain product name
    cy.url().should("contains", "/jordan-why-not-6-pf");

    // Check the title product name
    cy.get("div").contains("Jordan Why Not .6 PF");

    // Select the size
    cy.get("div#sizesGrid").find("div").first().click();

    // Check the button add to cart
    cy.get("button#button-add-to-cart").click();

    // Check the quantity of items in the cart
    cy.get("div#quantity-cart").contains(1);

    // Navigate to cart page
    cy.get("div#cart-icon").click();

    // Check the url cart page
    cy.url().should("contains", "/cart");

    // Check the page title
    cy.get("div").contains("Carrinho de compras");

    // Check and click in the categories menu
    cy.get("ul#navbar").find("li").contains("Categorias").click();

    // Check and click the categories in submenu
    cy.get("ul#submenu").find("li").contains("Football Shoes").click();

    // Check the category page content
    cy.get("div").contains("Football Shoes");

    // Check and click the navbar to return homepage
    cy.get("ul#navbar").find("li").contains("Home").click();

    // Check homepage title
    cy.get("div#homepage-title").contains("Amortecedor para Suas Milhas");
  });
});

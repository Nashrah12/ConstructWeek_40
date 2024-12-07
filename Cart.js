class Cart {
    addToCart() {
        cy.visit('https://in.puma.com/in/en/womens');
        
        // Wait until the product list is loaded
        cy.get('#product-list-items').should('be.visible');
        cy.contains('Blktop Rider Vibrant Women').click();
        cy.wait(4000)
        // Wait for the product page to load
       cy.get('[aria-label="Select Size"]').scrollIntoView().click({ force: true });

        // Select the specific size 'UK 4'
        cy.contains('UK 4').click();
        
        // Add the product to the cart
        cy.get('[data-test-id="add-to-cart-button"]').should('be.visible').click();
    }
      removeProduct(){
        cy.visit('https://in.puma.com/in/en/cart');
        cy.wait(4000);
        cy.get('[data-test-id="remove-product-button"]').scrollIntoView().click({ force: true });
        cy.get('#confirm-button').click();
        cy.get('[aria-labelledby="section-cart-title"]').should('contain','Your Shopping Cart is Empty');
      }   
}
export default Cart;

class logout{
    logOut(){
        cy.visit('https://in.puma.com/in/en/account');
        cy.get('[data-test-id="logout-button"]').click();
    }
}
export default logout;
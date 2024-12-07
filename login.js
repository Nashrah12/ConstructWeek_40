class login{
    loginPage(){
        cy.visit('https://in.puma.com/in/en/account/login?action=register');
        cy.wait(3000)
       cy.get('#verify-my-phone-btn').click()
       cy.contains('Login with Email and Password').click()
      cy.get('#email').type('nashrah980@gmail.com');
      cy.get('#password').type('59hvs@egGUhjC9');
      cy.get('[type="checkbox"]').check();
      cy.get('[type="submit"]').click();
    }
}
export default login;
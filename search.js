class search{
    searchButton(){
        cy.visit('https://in.puma.com/in/en/account');
        cy.get('[data-test-id="search-icon-nav"]').type('Shoes{enter}');
        //cy.get('[placeholder="SEARCH PUMA.COM"]').type('women{enter}');
           cy.get('[data-uds-child="search-listbox"]').should('have.length.greaterThan', 0);  
        }  
}
export default search;
describe("tickets", () => {
    beforeEach( () => cy.visit("https://bit.ly/2XSuwCW"));

    it("fills all the text input fields", () => {
        const firstname = 'Raul'
        const lastname = 'Silva'

        cy.get('#first-name').type(firstname);
        cy.get('#last-name').type(lastname);
        cy.get('#email').type('email@teste.com');
        cy.get('#requests').type('Vegetariano');
        cy.get('#signature').type(`${firstname} ${lastname}`);
    });

    it.only("select two tickets", () => {
        cy.get('#ticket-quantity').select("2");
    });

    it("has 'TICKETBOX' HEADER'S HEADING", () => {});
});
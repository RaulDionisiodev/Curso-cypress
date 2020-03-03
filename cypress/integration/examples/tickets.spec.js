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

    it("select two tickets", () => {
        cy.get('#ticket-quantity').select("2");
    });

    it("Select 'vip' ticket type", () => {
        cy.get('#vip').check();
    })

    it.only("Selects 'friend' and 'publication', then uncheck 'friend'", ()=> {
        cy.get('#friend').check();
        cy.get('#publication').check();
        cy.get("#friend").uncheck();
    })

    it("has 'TICKETBOX' HEADER'S HEADING", () => {});
});
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

    it("Selects 'friend' and 'publication', then uncheck 'friend'", ()=> {
        cy.get('#friend').check();
        cy.get('#publication').check();
        cy.get("#friend").uncheck();
    })

    it("has 'TICKETBOX' HEADER'S HEADING", () => {
        cy.get("header h1").should('contain',"TICKETBOX");
    });

    it("alerts on invalid email", () => {
        cy.get("#email")
            .as("email")
            .type("talkingabouttesting-gmail.com");
        
        cy.get("#email.invalid").should("exist");

        cy.get("@email")
            .clear()
            .type("talkingabouttesting@gmail.com");

        cy.get("#email.invalid").should("not.exist");
    })

    it("Fills and reset the form", () => {
        const firstname = 'Raul'
        const lastname = 'Silva'
        const fullName = `${firstname} ${lastname}`

        cy.get('#first-name').type(firstname);
        cy.get('#last-name').type(lastname);
        cy.get('#email').type('email@teste.com');
        cy.get('#ticket-quantity').select("2");
        cy.get('#vip').check();
        cy.get('#friend').check();
        cy.get('#requests').type('Churrasco');

        cy.get(".agreement p").should(
            "contain",
            `I, ${fullName}, wish to buy 2 VIP tickets.`
        )

        cy.get("#agree").click()
        cy.get("#signature").type(fullName)

        cy.get("button[type='submit']")
            .as("submitButton")
            .should("not.be.disabled")

        cy.get("button[type='reset']").click()

        cy.get("@submitButton").should("be.disabled")

    })

    it.only("fills mandatory fields using support comand", () => {
        const customer = {
            firstname: "João",
            lastname: "Silva",
            email:"joao@exemplo.com"
        }

        cy.fillMandatoryFields(customer);

        cy.get("button[type='submit']")
            .as("submitButton")
            .should("not.be.disabled")
        
        cy.get("#agree").uncheck() //desabilitando um dos campos obrigatórios

        cy.get("@submitButton").should("be.disabled")

    })
});
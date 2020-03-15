describe("Grupos", () =>{
    beforeEach(() => cy.visit("http://ondetemgrupo.ga"));

    it('Fills all the input fields', () => {
        cy.get('[name=cidade]').type('Rio de Janeiro');
        cy.get('[name=bairro]').type('Bangu');

    }) 

    it.only("Select day and hour", () => {
        cy.get("#selectDia").select('Segunda');
        cy.get("#selectHora").select('19:30');
    });

    it("Searching groups in bangu at 19h", () =>{
        cy.get('[name=bairro]').type('Bangu');
        cy.get("#selectHora").select('19:00');
        cy.get("input[type='submit']").click();

        cy.get("table td").should("contain", "Bangu")
        cy.get("table td").should("contain", "19:00")
    })

    it("Searching groups on monday at 19:30", () =>{
        cy.get("#selectDia").select('Segunda');
        cy.get("#selectHora").select('19:30');
        cy.get("input[type='submit']").click();

        cy.get("table td").should("contain", "Segunda")
        cy.get("table td").should("contain", "19:30")
    })

    it.only("Seaching error message", () => {
        cy.get('[name=bairro]').type('Olaria');
        cy.get("input[type='submit']").click();

        cy.get("h3").should(
            "contain", 
            "Não foram encontrados grupos de oração.");

    })
});
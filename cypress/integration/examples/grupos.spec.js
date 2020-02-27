describe("Grupos", () =>{
    beforeEach(() => cy.visit("http://ondetemgrupo.ga/?i=1"));

    it('Fills all the input fields', () => {
        cy.get('[name=cidade]').type('Rio de Janeiro');
        cy.get('[name=bairro]').type('Bangu');

    }) 

    it.only("Select day and hour", () => {
        cy.get("#selectDia").select('Segunda');
        cy.get("#selectHora").select('19:30');
    });

    it("has 'Grupos' header's heading", () =>{});
});
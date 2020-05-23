describe('https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do', () => {
    describe('Calcular tasa', () => {
        it('Debería llenar el cuestionario y mostrar 24 columnas"', () => {
            cy.visit('https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do')
            cy.get('#dispDate').clear().type('05/05/2020')
            cy.contains('Fecha').click()
            cy.get('#creditAmount').clear().type(20000)
            cy.get('#paymentMethod').select('Mensual')
            cy.get('#period').select('2 años')
            cy.get('#rate').clear().type('15')
            cy.contains('Calcular').click()
            cy.contains('Ahora no').click()
            cy.get("#resultadosSimulador").find("tr").should("have.length", 25);
        })
    })
})
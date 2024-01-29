describe('single station page', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/stations');
        cy.get('#statPLink')
            .contains('A.I. Virtasen aukio')
            .click();
    })
  
    //SING01
    it('single station page is displaying location data', () => {
        cy.get('h2').contains('A.I. Virtasen aukio');
        cy.get('p').contains('Gustaf Hällströmin katu 1');
        cy.get('p').contains('Helsinki');
    })

    //SING02
    it('station statistics is displayed', () => {
        cy.get(':nth-child(2) > .col-lg-9').should('have.text', 'Number of departures:')
        cy.get(':nth-child(2) > .col-lg-3').should('not.be.empty')
        cy.get(':nth-child(3) > .col-lg-9').should('have.text', 'Number of returns:')
        cy.get(':nth-child(3) > .col-lg-3').should('not.be.empty')
        cy.get(':nth-child(4) > .col-lg-9').should('have.text', 'Average journey distance from this station:')
        cy.get(':nth-child(4) > .col-lg-3').should('not.be.empty')
        cy.get(':nth-child(5) > .col-lg-9').should('have.text', 'Average journey distance to this station:')
        cy.get(':nth-child(5) > .col-lg-3').should('not.be.empty')

        cy.get('h5').contains('Top 5 Return Stations:');
        cy.get(':nth-child(7) > .col-lg-9').should('not.be.empty')
        cy.get(':nth-child(7) > .col-lg-9').should('have.text', 'Kalasatama (M)')
        cy.get(':nth-child(7) > .col-lg-3').should('not.be.empty')
        cy.get(':nth-child(7) > .col-lg-3').should('have.text', '176')

        cy.get('h5').contains('Top 5 Departure Stations:');
        cy.get(':nth-child(13) > .col-lg-9').should('not.be.empty')
        cy.get(':nth-child(13) > .col-lg-9').should('have.text', 'Pasilan asema')
        cy.get(':nth-child(13) > .col-lg-3').should('not.be.empty')
        cy.get(':nth-child(13) > .col-lg-3').should('have.text', '155')
    })



  })
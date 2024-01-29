describe('station page', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/stations');
    })
  
    //STAT01
    it('station page is displaying data', () => {
        cy.contains('Stations');
        cy.contains('A.I. Virtasen aukio');
    })

    //STAT02
    it('search input is filtering station list', () => {
        cy.get('input').type('ups');
        cy.get('p#statPLink').should('be.visible');
        cy.get('p#statPLink').should('have.length', 1);
        cy.get('#statPLink').contains('Upseerinkatu');
    })

    //STAT03
    it('city filter buttons are working correctly', () => {

        cy.get('#statPLink').contains('A.I. Virtasen aukio');

        //Helsinki button
        cy.get('button:contains("Helsinki")').click();
        let NumberOfHelsinkiStations = 347;
        cy.get('p#statPLink').should('have.length', NumberOfHelsinkiStations);
        cy.get('p#statPLink')
            .eq(1) // Select the second station (index 1)
            .contains('Abraham Wetterin tie');

         //Espoo button    
        cy.get('button:contains("Espoo")').click();
        let NumberOfEspooStations = 110;
        cy.get('p#statPLink').should('have.length', NumberOfEspooStations);
        cy.get('p#statPLink')
            .eq(0)
            .contains('Aalto-yliopisto (M), Korkea');

         //All Stations button    
        cy.get('button:contains("All Stations")').click();    
        let NumberOfAllStations = 457;
        cy.get('p#statPLink').should('have.length', NumberOfAllStations);
        cy.get('p#statPLink')
            .eq(0)
            .contains('A.I. Virtasen aukio');

    })

    //STAT04
    it('station name link works correctly', () => {
        cy.get('#statPLink')
            .contains('A.I. Virtasen aukio')
            .click();
        cy.get('p').contains('Gustaf Hällströmin katu 1');
    })

  })
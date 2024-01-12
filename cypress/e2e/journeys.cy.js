describe('journey page', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/journeys')
  })

  it('journey page is displaying data', () => {
    cy.contains('Journeys')
    cy.contains('Arabiankatu')
    cy.contains('Page 1')
  })

  it('input works with valid page number', () => {
    cy.get('input').type(20)
    cy.contains('Page 20')
  })

  it('warning text is displayed when input with invalid page number', () => {
    cy.get('input').type(0)
    cy.contains('Please enter a valid page number')
  })

  it('buttons are disabled', () => {
    cy.get('#btn-first').should('be.disabled')
    cy.get('#btn-previous').should('be.disabled')
    cy.get('#btn-last').click()
    cy.get('#btn-next').should('be.disabled')
    cy.get('#btn-last').should('be.disabled')
  })

  it('buttons are working correctly', () => {
    cy.get('#btn-next').click()
    cy.contains('Page 2')
    cy.get('#btn-previous').click()
    cy.contains('Page 1')
    cy.get('#btn-last').click()
    cy.contains('Page 104209')
    cy.get('#btn-first').click()
    cy.contains('Page 1')
  })
})
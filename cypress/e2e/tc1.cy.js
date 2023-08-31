describe('test Case 1', () => {
  it('visit the space & verify your elements', () => {
    cy.visit('https://demo.testim.io/')
    cy.url().should('include', 'demo.testim.io')
    cy.get('.TopBar__logo___3-82j').should('be.visible').click()
    cy.get(':nth-child(1) > [data-react-toolbox="date-picker"] > .theme__input___qUQeP > .theme__inputElement___27dyY').should('be.visible').click()
    cy.get('.NavButton__nav-button___34wHC').should('be.visible')
    cy.get('.theme__navigation___3eiS- > :nth-child(1)').should('be.visible').click()

    // test of dropdown menu
    cy.get('.Gallery__filters-box___1z3SX > :nth-child(2) > .theme__input___qUQeP > .theme__inputElement___27dyY').should('be.visible').click()
    cy.get('.theme__active___31xyK > .theme__values___1jS4g > :nth-child(2)').should('be.visible').click()
    cy.get('.Gallery__filters-box___1z3SX > :nth-child(2) > .theme__input___qUQeP > .theme__inputElement___27dyY').should('be.visible').click()
    cy.get('.theme__active___31xyK > .theme__values___1jS4g > :nth-child(3)').should('be.visible').click()
    cy.get('.Gallery__filters-box___1z3SX > :nth-child(2) > .theme__input___qUQeP > .theme__inputElement___27dyY').should('be.visible').click()
    cy.get('.theme__active___31xyK > .theme__values___1jS4g > :nth-child(4)').should('be.visible').click()
    cy.get('.Gallery__filters-box___1z3SX > :nth-child(2) > .theme__input___qUQeP > .theme__inputElement___27dyY').should('be.visible').click()
    cy.get('.theme__active___31xyK > .theme__values___1jS4g > :nth-child(5)').should('be.visible').click()
    cy.get('.Gallery__filters-box___1z3SX > :nth-child(2) > .theme__input___qUQeP > .theme__inputElement___27dyY').should('be.visible').click()
    cy.get('.theme__active___31xyK > .theme__values___1jS4g > :nth-child(6)').should('be.visible').click()
    cy.get('.Gallery__filters-box___1z3SX > :nth-child(2) > .theme__input___qUQeP > .theme__inputElement___27dyY').should('be.visible').click()
    cy.get('.theme__active___31xyK > .theme__values___1jS4g > :nth-child(1)').should('be.visible').click()

    // load more button
    cy.get(':nth-child(5) > .theme__button___1iKuo').should('be.visible').click()

    // price range
    cy.get('.theme__slider___2H6aE > .theme__input___qUQeP > .theme__inputElement___27dyY').should('be.visible').clear().type('500')
    cy.get('.theme__slider___2H6aE > .theme__input___qUQeP > .theme__inputElement___27dyY').should('be.visible').clear().type('1800')
    cy.get('.Footer__back-to-top___3f74v > span').should('be.visible').click()
    cy.get('.NavButton__nav-button___34wHC').should('be.visible')


  })

})
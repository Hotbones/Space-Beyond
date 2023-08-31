
describe('test Case 2', () => {

    beforeEach(function(){

        cy.log('inicia la pagina a testear')
        cy.visit('https://demo.testim.io/')
        cy.get('.NavButton__nav-button___34wHC').should('be.visible').click(); // Cambia el selector al del botón real
        cy.url().should('include', 'demo.testim.io/login')
    
        })

    afterEach(function(){

        cy.log('realizar el logout')
        cy.get('.mui-btn > :nth-child(1)').should('be.visible').click();
        cy.get('li > a').should('be.visible').click();


    })

    it('visit the space & get to Login page with email', () => {
    cy.log('verificar credenciales validas')
    cy.get('#login > :nth-child(1) > .theme__inputElement___27dyY').should('be.visible').type('mia@gmail.com'); // Cambia los selectores a los reales
    cy.get('#login > :nth-child(2) > .theme__inputElement___27dyY').should('be.visible').type('mia');
        cy.get('.Login__button-box___1OzjH > .theme__raised___ONZv6').should('be.visible').click();
        cy.get('.mui-btn').then(($element) => {
            const contenido = $element.text();
            expect(contenido).not.to.include('mia') // Verifica que el contenido NO incluya "mia"
        });
    
    })

    it('visit the space & get to Login page with word', () => {
        cy.log('verificar letras')
        cy.get('#login > :nth-child(1) > .theme__inputElement___27dyY').should('be.visible').type('anto'); // Cambia los selectores a los reales
        cy.get('#login > :nth-child(2) > .theme__inputElement___27dyY').should('be.visible').type('mia');
        cy.get('.Login__button-box___1OzjH > .theme__raised___ONZv6').should('be.visible').click();
        
    })

        it('visit the space & get to Login page with numbers', () => {

            cy.log('verificar numeros')
            cy.get('#login > :nth-child(1) > .theme__inputElement___27dyY').should('be.visible').type('5555'); // Cambia los selectores a los reales
            cy.get('#login > :nth-child(2) > .theme__inputElement___27dyY').should('be.visible').type('5552');
            cy.get('.Login__button-box___1OzjH > .theme__raised___ONZv6').should('be.visible').click();
        

    })

    it('visit the space & get to Login page with special caracters', () => {
        cy.log('verificar ccaracteres especiales')
        cy.get('#login > :nth-child(1) > .theme__inputElement___27dyY').should('be.visible').type('#$%&"('); // Cambia los selectores a los reales
        cy.get('#login > :nth-child(2) > .theme__inputElement___27dyY').should('be.visible').type('$%&/(');
        cy.get('.Login__button-box___1OzjH > .theme__raised___ONZv6').should('be.visible').click();
    

    })
})
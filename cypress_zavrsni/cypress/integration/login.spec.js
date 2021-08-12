/// <reference types="Cypress" />

// const Locators = require('../fixtures/Locators');

//const Locators = require('../fixtures/Locators.json')

describe ("Login",() =>{

    it ("visit login page", ()=> {

    // let correctEmail = 'deki@test.com'
    // let correctPassword = 'test123123'
    // beforeEach(()=> {
    //         cy.visit('/')
    //         cy.url().should("contains", "https://gradebook.vivifyideas" )
    // })
    
        cy.visit ('/login')
        cy.get('#email').type("deki@test.com")
       // cy.get(Locators.Login).type("deki@test.com")
        cy.get('#userPassword').type("deki1234")
        cy.get('.btn').click()

        cy.wait(1000) })
    
    })
decribe ("create proffesor", ()=> {
    it('creating new proffesor', () => { 

        cy.get(':nth-child(6) > .nav-link').click()

        cy.get('#input-default').type('Dejan')
        cy.get('#input-default1').type('Stanisin')

        cy.wait(1000)


        cy.get('.btn-image').click()
        cy.get('#__BVID__65').type('https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg')

        cy.get('.btn-secondary').click()

    })
})
    

    // email: "deki@test.com"
// first_name: "Dejan"
// last_name: "Deki"
// password: "deki1234"
// password_confirmation: "deki1234"
// terms_conditions: "1"
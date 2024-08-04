/// <reference types="cypress" />

//The then() method in Cypress is used to handle the result of a command or a chain of commands and allows for further operations on that result. It is often used for custom logic, complex assertions, or to chain additional Cypress commands that need to act on the previous result.The then() method receives the subject (the result of the previous command) and allows you to work with it using a callback function. This is particularly useful when you need to perform complex operations or assertions that are not directly supported by Cypress commands.


describe('Then Method', () => {

    it('Then Method', () => {
      cy.visit('/')
      cy.contains('Forms').click()
      cy.contains('Form Layouts').click()
  
      // Inside the then provide the argument for call back function and give it a name "usingTheGridForm".
      cy.contains('nb-card','Using the Grid').then(usingTheGridForm => {

        

      })


    })

})
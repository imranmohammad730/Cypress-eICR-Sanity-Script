
describe('first test suite',function(){


    it('file upload',function(){
  
      cy.visit(Cypress.env('url') )
  
      cy.get('#username').type('m.imran')
  
  
  
      cy.get('#password').type('A11223344')
  
      cy.get('#submit').click()

            
            cy.get(':nth-child(11) > a').click() //click on eICR tab
            cy.get('.bea-portal-book-custom-submenu-single-item-new > a').click() //click on upload file button

            cy.get('input').click() // choose file button
            
            cy.get('input').selectFile('cypress/fixtures/eicrzipfile_automation.zip')
            cy.get('input').selectFile('cypress/fixtures/eicrzipfile_automation.zip')
            cy.get('.bea-portal-book-custom-submenu-single-container > tbody > tr > :nth-child(2) > a').click() //final upload file button

            cy.get('tbody > :nth-child(2) > :nth-child(2) > a').should('contains.text', 'eic_eICR.xml') //verify title of tab
            cy.log("Uploaded eICR file is available in the report list")
        


    }
    )
})
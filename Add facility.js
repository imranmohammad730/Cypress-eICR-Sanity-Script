

/// <reference types="Cypress" />

describe('first test suite',function(){


it('facility tab under eicr tab',function(){

    cy.wait(5000)

    cy.visit(Cypress.env('url') )

    cy.get('#username').type('m.imran')



    cy.get('#password').type('A11223344')

    cy.get('#submit').click()

   cy.get(':nth-child(11) > a').click()

   cy.get('#eicr-facility-label > a').click()

  //  cy.contains('/eicrReporting/eicr-facility/list')
  cy.contains("Add Facility ").click() // click on add facility 
  const uniqueSeed = Date.now().toString();
  const getUniqueId = () => Cypress._.uniqueId(uniqueSeed)
  const uniqueId = getUniqueId()


  cy.get(':nth-child(1) > .label > .ng-untouched').type(uniqueId) // enter facility OID

  cy.get(':nth-child(2) > .label > .ng-untouched').type(uniqueId) // enter facility GUID

  cy.get(':nth-child(3) > .label > .ng-untouched').type('Automation') // enter facility name

  cy.get(':nth-child(4) > .label > .ng-untouched').type('920000000000') // enter telecom (telephone)

  cy.get(':nth-child(5) > .label > .ng-untouched').type('12345678') // enter telecom (fax)

  cy.get(':nth-child(6) > .label > .ng-untouched').type('baker street 404') // enter street address
  
  cy.get(':nth-child(7) > .label > .ng-untouched').type('County Automation') // enter county

  cy.get(':nth-child(8) > .label > .ng-untouched').type('NY') //enter city

  cy.get(':nth-child(9) > .label > .ng-untouched').type('New York') // enter state

  cy.get(':nth-child(10) > .label > .ng-untouched').type('56180') //enter postal code

  cy.get(':nth-child(11) > .label > .ng-untouched').type('United States of America') //enter Country

  cy.get('.bea-portal-book-custom-submenu-single-container > tbody > tr > :nth-child(2) > a').click() // click save and close button 

  cy.wait(2000)







  })

})
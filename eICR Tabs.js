
/// <reference types="Cypress" />

describe('first test suite',function(){


  it('login test case',function(){

    cy.visit(Cypress.env('url'))

    cy.get('#username').type('m.imran')



    cy.get('#password').type('A11223344')

    cy.get('#submit').click()

    

    
  }  
  )

  it('eICR tab',function(){

    cy.get(':nth-child(11) > a').click() //click on eicr tab 

         cy.get('.bea-portal-book-page-title > span').should('contains.text', 'Initial Case Report (eICR)') //verify title of tab
         cy.log("Initial Case Report (eICR) title available")

    cy.get('.bea-portal-book-menu-single > #eicr-report-label > a').click() //click on report tab


    //tool tip verification
    //1. Report File name

    cy.get('[width="34%"] > .border-spacing > :nth-child(1) > :nth-child(2) > a > .mat-tooltip-trigger').trigger('mouseover').invoke('show')
    cy.contains('Enter any part of the report file name.')
    cy.log('Report name tool tip verified')

    cy.get('.bea-portal-book-menu-single > :nth-child(2) > a').click() //click on mapping button 

    cy.get('.bea-portal-book-page-title > span').should('contains.text', 'Initial Case Report (eICR)') //verify title of tab
         cy.log("Initial Case Report (eICR) title available")

    //get into mapping subtabs

    cy.get('.bea-portal-book-submenu-single > :nth-child(1) > a').click() //click on template subtab of mapping ( auto landing page ) 

    cy.get('.bea-portal-book-submenu-single > :nth-child(2) > a').click()  // click on eicr attribute subtab of mapping

    cy.get('.bea-portal-book-submenu-single > :nth-child(3) > a').click() //click on risk data definition subtab of mapping

    cy.get('.bea-portal-book-submenu-single > :nth-child(4) > a').click() // click on investigation definition subtab of mapping


  }
  )

  it('Vocabulary tab under eICR tab ', function(){

    cy.wait(5000)

    cy.visit('https://elrng.solitontechnologies.com/ELR/#' )

    cy.get('#username').type('m.imran')



    cy.get('#password').type('A11223344')

    cy.get('#submit').click()

   cy.get(':nth-child(11) > a').click()

    cy.get('.bea-portal-book-menu-single > :nth-child(3) > a').click()   // click on vocabulary tab


  })

  it('reportable condition tab under eicr tab',function(){


    cy.wait(5000)

    cy.visit('https://elrng.solitontechnologies.com/ELR/#' )

    cy.get('#username').type('m.imran')



    cy.get('#password').type('A11223344')

    cy.get('#submit').click()

   cy.get(':nth-child(11) > a').click()


    cy.get('.bea-portal-book-menu-single > :nth-child(4) > a').click() //click on reportable condition

    cy.get('.bea-portal-book-submenu-single > #eicr-mapping-label > a').click() // click on summmary subtab of reportable condition



  })

  it('facility tab under eicr tab',function(){

    cy.wait(5000)

    cy.visit('https://elrng.solitontechnologies.com/ELR/#' )

    cy.get('#username').type('m.imran')



    cy.get('#password').type('A11223344')

    cy.get('#submit').click()

   cy.get(':nth-child(11) > a').click()

   cy.get('#eicr-facility-label > a').click()

  //  cy.contains('/eicrReporting/eicr-facility/list')
  cy.contains("Add Facility ").click()







  })




}

)
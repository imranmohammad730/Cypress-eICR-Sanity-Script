
/// <reference types="Cypress" />

describe('first test suite',function(){


    it('login test case',function(){
  
      cy.visit(Cypress.env('url'))
  
      cy.get('#username').type('m.imran')
  
  
  
      cy.get('#password').type('A11223344')
  
      cy.get('#submit').click()
  
      
  
      
    }  
    )
  
    it('eICR tab tool tips',function(){
  
      cy.get(':nth-child(11) > a').click() //click on eicr tab 
  
           cy.get('.bea-portal-book-page-title > span').should('contains.text', 'Initial Case Report (eICR)') //verify title of tab
           cy.log("Initial Case Report (eICR) title available")
  
      cy.get('.bea-portal-book-menu-single > #eicr-report-label > a').click() //click on report tab
  
  
      //tool tip verification
      //1. Report File name
  
      cy.get('[width="34%"] > .border-spacing > :nth-child(1) > :nth-child(2) > a > .mat-tooltip-trigger').trigger('mouseover').invoke('show')
      cy.contains('Enter any part of the report file name.')
      cy.log('Report name tool tip verified')

      //2.Facility name

      cy.get('[width="34%"] > .border-spacing > :nth-child(2) > :nth-child(2) > a > .mat-tooltip-trigger').trigger('mouseover').invoke('show')
      cy.contains('Enter any part of the facility name')
      cy.log('Facility name tool tip verified')

      //3.Facility Code

      cy.get('[width="34%"] > .border-spacing > :nth-child(3) > :nth-child(2) > a > .mat-tooltip-trigger').trigger('mouseover').invoke('show')
      cy.contains('Enter any part of the code or alias you have assigned this facility.')
      cy.log('Facility code tool tip verified')

      //4.Provider Name

      cy.get(':nth-child(2) > .border-spacing > :nth-child(1) > :nth-child(2) > a > .mat-tooltip-trigger').trigger('mouseover').invoke('show')
      cy.contains('Enter any part of the provider name')
      cy.log('Provider name tool tip verified')

      //5.Provider Code

      cy.get(':nth-child(2) > .border-spacing > :nth-child(2) > :nth-child(2) > a > .mat-tooltip-trigger').trigger('mouseover').invoke('show')
      cy.contains('Enter any part of the code or alias you have assigned this provider.')
      cy.log('Provider code tool tip verified')

      //6.File Source

      cy.get(':nth-child(2) > .border-spacing > :nth-child(3) > :nth-child(2) > a > .mat-tooltip-trigger').trigger('mouseover').invoke('show')
      cy.contains('Select name of the service which initialized the request.')
      cy.log('File source tool tip verified')

      //7.Process status

      cy.get(':nth-child(3) > .border-spacing > :nth-child(1) > :nth-child(2) > a > .mat-tooltip-trigger').trigger('mouseover').invoke('show')
      cy.contains('Select a status from list or select All to view all.')
      cy.log('Process Status tool tip verified')
      
      //8.Upload date range (from)

    //   cy.wait(5000)
    //   cy.get(':nth-child(3) > .border-spacing > :nth-child(2) > :nth-child(2) > a > .mat-tooltip-trigger').trigger('mouseover').invoke('show')
    //   cy.contains('Define a date range by selecting Upload Date Range (From). System will search for all accounts with in the specified data range.')
    //   cy.log('Upload Date Range (from) tool tip verified')

    //   //9.Upload date range (to)

    //   cy.get(':nth-child(3) > .border-spacing > :nth-child(3) > :nth-child(2) > a > .mat-tooltip-trigger').trigger('mouseover').invoke('show')
    //   cy.contains('Define a date range by Selecting Upload Date Range (To). System will search for all accounts within the specified data range')
    //   cy.log('Upload Date Range (to) tool tip verified')

      //10.Exported

      cy.get(':nth-child(4) > :nth-child(2) > a > .mat-tooltip-trigger').trigger('mouseover').invoke('show')
      cy.contains('Select a status from the list or select Yes/No for all.')
      cy.log('Exported tool tip verified')

      //11.Acknowledged

      cy.get(':nth-child(5) > :nth-child(2) > a > .mat-tooltip-trigger').trigger('mouseover').invoke('show')
      cy.contains('Select a status from the list or select Yes/No for all.')
      cy.log('Acknowledged tool tip verified')



      






     



    })})
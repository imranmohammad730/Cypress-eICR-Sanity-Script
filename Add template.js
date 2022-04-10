/// <reference types="Cypress" />

import templateObjects from '../PageObjects/templateObjects'


describe('Sanity test suite',function(){


    this.beforeEach(function()
   {
       cy.wait(5000)
   
       cy.visit(Cypress.env('url'))

       //cy.url().should('include','https://elrng.solitontechnologies.com/ELR') //URL string assertion
   
       cy.fixture('example.json').then(function(data)
       {
           this.data=data //to make data global
           cy.get('#username').type(this.data.username)
           cy.get('#password').type(this.data.password)
           cy.get('#submit').click()

       })
   
       

   })


    { 


        it('Add Template',function(){

            const templatepage=new templateObjects

            cy.get(':nth-child(11) > a').click() //eicr
            cy.get('.bea-portal-book-menu-single > :nth-child(2) > a').click() //mapping

            
                
            templatepage.getAddtemplateButton().click({ multiple: true })

            const uniqueSeed = Date.now().toString();
            const getUniqueId = () => Cypress._.uniqueId(uniqueSeed)
            const uniqueId = getUniqueId()


            templatepage.getTemplateName().type(uniqueId)


            templatepage.getReportableConditionName().select(0)


            templatepage.getSaveButton().click({ multiple: true })
            
            
            

            



   })

   this.afterAll(function()
   {
       cy.wait(5000)
   
       cy.get(':nth-child(8) > .bea-portal-book-primary-subheader-item > a').click() //logout

       }
   
       

   )



}})
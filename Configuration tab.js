/// <reference types="Cypress" />

describe('Sanity test suite',function(){


     this.beforeEach(function()
    {
        cy.wait(5000)
    
        cy.visit(Cypress.env('url'))

        cy.url().should('include','https://elrng.solitontechnologies.com/ELR') //URL string assertion
    
        cy.fixture('example.json').then(function(data)
        {
            this.data=data //to make data global
            cy.get('#username').type(this.data.username)
            cy.get('#password').type(this.data.password)
            cy.get('#submit').click()

        })
    
        

    })


     { 


         it('Configuration tab',function(){

         
    
       
    
        cy.get(':nth-child(14) > a').click() //click on configuration tab

        cy.get('.bea-portal-book-menu-single > :nth-child(3) > a').click() //click on eicr preferences

        cy.get('tbody > :nth-child(2) > :nth-child(2) > .ng-valid').should('be.checked') //SFTP checkbox assertion

        cy.get('.sftp-conatiner > table > :nth-child(1) > :nth-child(2) > .ng-untouched').should('have.value','10.20.30.34')
        cy.get(':nth-child(4) > .ng-untouched').should('have.value','inbox')
        cy.get('table > :nth-child(2) > :nth-child(2) > .ng-untouched').should('have.value','/cygdrive/c/')
        cy.get('.sftp-conatiner > table > :nth-child(3) > :nth-child(2) > .ng-untouched').should('have.value','eICR')
        cy.get(':nth-child(5) > :nth-child(2) > .ng-untouched').should('have.value','sftp')
        cy.get(':nth-child(7) > :nth-child(2) > .ng-untouched').should('have.value','processed')


    


        cy.get('tbody > :nth-child(4) > :nth-child(2) > .ng-untouched').should('be.checked') //Amazon s3 checkbox assertion

        cy.get('.aws-conatiner > table > :nth-child(1) > :nth-child(2) > .ng-untouched').should('have.value','eicrtest/eICR/SQSBucket')

        cy.get('select').select('20: us-east-2').should('have.value','20: us-east-2') //static dropdown\
        cy.get('.aws-conatiner > table > :nth-child(6) > :nth-child(2) > .ng-untouched').should('have.value','processed')

        cy.get('[style="width: 100%; text-align: right;"] > :nth-child(1)').click() //save button











    })

    this.afterAll(function()
    {
        cy.wait(5000)
    
        cy.get(':nth-child(8) > .bea-portal-book-primary-subheader-item > a').click() //logout

        }
    
        

    )



}})
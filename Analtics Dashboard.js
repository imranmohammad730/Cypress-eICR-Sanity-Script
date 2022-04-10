/// <reference types="Cypress" />

describe('first test suite',function(){


    it('Analytics Dashboard',function(){
    
        //cy.wait(5000)
    
        cy.visit(Cypress.env('url'))
    
        cy.get('#username').type('m.imran')
    
    
    
        cy.get('#password').type('A11223344')
    
        cy.get('#submit').click()

        cy.get(':nth-child(13) > a').click() //click on Analytics tab


      
        cy.get(':nth-child(3) > .mat-datepicker-input').type('{selectall}').type('{backspace}').type('10/01/2021') //date from

        cy.get('tr > :nth-child(4) > .mat-datepicker-input').type('{selectall}').type('{backspace}').type('10/31/2021') //date to

        //code to input todays date
        //       const dayjs = require('dayjs')

        //  //In test
        //  cy.log(dayjs().format('MM/DD/YYYY'))  //Prints todays date 30/09/2021
        //  cy.get(':nth-child(3) > .mat-datepicker-input').type(dayjs().format('MM/DD/YYYY')) //input today's date in DD/MM/YYYY format

        cy.get(':nth-child(5) > .filter-button').click() //click on search button

        //total messages over time section

        cy.get('app-total-messages-over-time > :nth-child(1) > #total_msgs_sent_by_provider_container > #total_msgs_sent_by_provider_title > .container-heading').should('contains.text', 'Total Messages Over Time') //verify title of section
        cy.log("Test messages over time title available")

        cy.get('app-total-messages-over-time > :nth-child(1) > #total_msgs_sent_by_provider_container > #total_msgs_sent_by_provider_title > .row > .grid-button > app-analytics-export-component > .ng-star-inserted').click() //download graph
        cy.get('app-total-messages-over-time > :nth-child(1) > #total_msgs_sent_by_provider_container > #total_msgs_sent_by_provider_title > .row > .grid-button > [title="View Data"] > .material-icons > img').click() //tabular view
        cy.get(':nth-child(1) > #total_msgs_sent_by_provider_container > #total_msgs_sent_by_provider_title > .row > .grid-button > app-analytics-export-component > button.ng-star-inserted > #downloadIcon').click() //download icon

        cy.get(':nth-child(1) > #total_msgs_sent_by_provider_container > #total_msgs_sent_by_provider_title > .row > .grid-button > app-analytics-export-component > #exportPopup > [style="display: block; margin-bottom: 10px;"] > a').click() //download PDF
        cy.get(':nth-child(1) > #total_msgs_sent_by_provider_container > #total_msgs_sent_by_provider_title > .row > .grid-button > app-analytics-export-component > button.ng-star-inserted > #downloadIcon').click() //download icon
        cy.get(':nth-child(1) > #total_msgs_sent_by_provider_container > #total_msgs_sent_by_provider_title > .row > .grid-button > app-analytics-export-component > #exportPopup > [style="display: block;"] > a').click() //download excel

         //cy.get('[title="Visualize"] > .material-icons > img').click() //click on visualise 

         cy.get('#total_msgs_sent_by_provider_grid > .k-widget > .k-grid-aria-root > .k-grid-header > .k-grid-header-wrap > table > thead > tr.ng-star-inserted > [aria-colindex="1"] > .k-cell-inner > .k-link').click() //Ascending order sorting on Date
         cy.get('#total_msgs_sent_by_provider_grid > .k-widget > .k-grid-aria-root > .k-grid-header > .k-grid-header-wrap > table > thead > tr.ng-star-inserted > [aria-colindex="1"] > .k-cell-inner > .k-link').click() //descending order sorting on Date
         cy.get('#total_msgs_sent_by_provider_grid > .k-widget > .k-grid-aria-root > .k-grid-header > .k-grid-header-wrap > table > thead > tr.ng-star-inserted > [aria-colindex="1"] > .k-cell-inner > .k-link').click() //sorting in default order
        
         //total messages sent by facilities section

         cy.get('app-analytics-bar-charts > :nth-child(1) > #total_msgs_sent_by_provider_container > #total_msgs_sent_by_provider_title > .container-heading').should('contains.text', 'Total Messages Sent By Facilities') //verify title of section
         cy.log("Test messages sent by facilities title available")
         cy.get('app-analytics-bar-charts > :nth-child(1) > #total_msgs_sent_by_provider_container > #total_msgs_sent_by_provider_title > .row > .grid-button > app-analytics-export-component > .ng-star-inserted > .img-size').click() //total messages sent by facilities download graph
         cy.get('#total_msgs_sent_by_provider_title > .row > .grid-button > [title="View Data"] > .material-icons > img').click() //tabular view

         cy.get('app-analytics-bar-charts > :nth-child(1) > #total_msgs_sent_by_provider_container > #total_msgs_sent_by_provider_title > .row > .grid-button > app-analytics-export-component > button.ng-star-inserted > #downloadIcon').click() // click on download icon

         cy.get('app-analytics-bar-charts > :nth-child(1) > #total_msgs_sent_by_provider_container > #total_msgs_sent_by_provider_title > .row > .grid-button > app-analytics-export-component > #exportPopup > [style="display: block; margin-bottom: 10px;"] > a').click() //download pdf
         cy.get('app-analytics-bar-charts > :nth-child(1) > #total_msgs_sent_by_provider_container > #total_msgs_sent_by_provider_title > .row > .grid-button > app-analytics-export-component > button.ng-star-inserted > #downloadIcon').click() // click on download icon

         cy.get('app-analytics-bar-charts > :nth-child(1) > #total_msgs_sent_by_provider_container > #total_msgs_sent_by_provider_title > .row > .grid-button > app-analytics-export-component > #exportPopup > [style="display: block;"] > a').click() //download excel

         //ethnicity section

         cy.get('app-analytics-race-and-ethnicity-grid > #total_msgs_sent_by_provider_container > #total_msgs_sent_by_provider_title > .container-heading').should('contains.text', 'Ethnicity') //verify title of section
         cy.log("Ethnicity title available")


         cy.wait(40000)
         cy.get('app-analytics-race-and-ethnicity-grid > #total_msgs_sent_by_provider_container > #total_msgs_sent_by_provider_title > .row > .grid-button > app-analytics-export-component > button.ng-star-inserted > #downloadIcon').click() //download icon for Ethincity

         cy.get('app-analytics-race-and-ethnicity-grid > #total_msgs_sent_by_provider_container > #total_msgs_sent_by_provider_title > .row > .grid-button > app-analytics-export-component > #exportPopup > [style="display: block; margin-bottom: 10px;"] > a').click() // download PDF
         cy.get('app-analytics-race-and-ethnicity-grid > #total_msgs_sent_by_provider_container > #total_msgs_sent_by_provider_title > .row > .grid-button > app-analytics-export-component > button.ng-star-inserted > #downloadIcon').click() //download icon for Ethincity


         cy.get('app-analytics-race-and-ethnicity-grid > #total_msgs_sent_by_provider_container > #total_msgs_sent_by_provider_title > .row > .grid-button > app-analytics-export-component > #exportPopup > [style="display: block;"] > a').click() // download excel




        //Race Section

         cy.get('app-analytics-race > #total_msgs_sent_by_provider_container > #total_msgs_sent_by_provider_title > .container-heading').should('contains.text', 'Race') //verify title of section
         cy.log("Race title available")


        cy.get('app-analytics-race > #total_msgs_sent_by_provider_container > #total_msgs_sent_by_provider_title > .row > .grid-button > app-analytics-export-component > button.ng-star-inserted > #downloadIcon').click() // download icon
        cy.get('app-analytics-race > #total_msgs_sent_by_provider_container > #total_msgs_sent_by_provider_title > .row > .grid-button > app-analytics-export-component > #exportPopup > [style="display: block; margin-bottom: 10px;"] > a').click() //download PDF
        
        cy.get('app-analytics-race > #total_msgs_sent_by_provider_container > #total_msgs_sent_by_provider_title > .row > .grid-button > app-analytics-export-component > button.ng-star-inserted > #downloadIcon').click() // download icon
        cy.get('app-analytics-race > #total_msgs_sent_by_provider_container > #total_msgs_sent_by_provider_title > .row > .grid-button > app-analytics-export-component > #exportPopup > [style="display: block;"] > a').click() //download excel

        //Patient Address

        cy.get('#patient_address_title > .container-heading').should('contains.text', 'Patient Address') //verify title of section
         cy.log("Patient Address title available")

        cy.wait(30000)


        cy.get('#patient_address_title > .row > .grid-button > app-analytics-export-component > button.ng-star-inserted > #downloadIcon').click() //download icon
        cy.get('#patient_address_title > .row > .grid-button > app-analytics-export-component > #exportPopup > [style="display: block; margin-bottom: 10px;"]').click() //download PDF


        cy.get('#patient_address_title > .row > .grid-button > app-analytics-export-component > button.ng-star-inserted > #downloadIcon').click() //download icon
        cy.get('#patient_address_title > .row > .grid-button > app-analytics-export-component > #exportPopup > [style="display: block;"] > a').click() //download Excel


        //top 5 data submitters section

        cy.get('#top_5_providers_title > .container-heading').should('contains.text', 'Top 5 Data Submitters') //verify title of section
         cy.log("Top 5 Data Submitters title available")

        cy.get('#top_5_providers_title > .row > .grid-button > app-analytics-export-component > .ng-star-inserted > .img-size').click() //download png
        cy.get('#top_5_providers_title > .row > .grid-button > [title="View Data"] > .material-icons > img').click() //click on tabular view
        cy.get('#top_5_providers_title > .row > .grid-button > app-analytics-export-component > button.ng-star-inserted > #downloadIcon').click() // click on download icon
        cy.get('#top_5_providers_title > .row > .grid-button > app-analytics-export-component > #exportPopup > [style="display: block; margin-bottom: 10px;"]').click() //download PDF

        cy.get('#top_5_providers_title > .row > .grid-button > app-analytics-export-component > button.ng-star-inserted > #downloadIcon').click() //click on download icon
        cy.get('#top_5_providers_title > .row > .grid-button > app-analytics-export-component > #exportPopup > [style="display: block;"]').click() // download Excel


        //bottom 5 data submitters

        cy.get('#bottom_5_providers_title > .container-heading').should('contains.text', 'Bottom 5 Data Submitters') //verify title of section
         cy.log("Bottom 5 Data Submitters title available")

        


        cy.get('#bottom_5_providers_title > .row > .grid-button > app-analytics-export-component > .ng-star-inserted > .img-size').click() //click on download icon to download png

        cy.get('#bottom_5_providers_title > .row > .grid-button > [title="View Data"] > .material-icons > img').click() //click on tabular view

        cy.get('#bottom_5_providers_title > .row > .grid-button > app-analytics-export-component > button.ng-star-inserted > #downloadIcon').click() //click on download icon
 
        cy.get('#bottom_5_providers_title > .row > .grid-button > app-analytics-export-component > #exportPopup > [style="display: block; margin-bottom: 10px;"]').click() //download PDF

        cy.get('#bottom_5_providers_title > .row > .grid-button > app-analytics-export-component > button.ng-star-inserted > #downloadIcon').click() //click on download icon


        cy.get('#bottom_5_providers_title > .row > .grid-button > app-analytics-export-component > #exportPopup > [style="display: block;"]').click() //download Excel


    })})
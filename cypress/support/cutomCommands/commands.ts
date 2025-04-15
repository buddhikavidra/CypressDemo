export {}
declare global{
    namespace Cypress{
        interface Chainable{
            /**
             * get a element for input[id=] locator
             * @param input placeholder :text
             */
            getGenLocator(input:string) : Chainable<any>
        }
    }
}
Cypress.Commands.add('getGenLocator',(input: string)=>{
    Cypress.log({
        displayName:"getGenLocator",
        message:input,
        consoleProps() {
            return{
                selector: input
            }
        },
    })
    return cy.get(`input[id=${input}]`,{
        log:false
    })
})
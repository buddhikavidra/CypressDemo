
describe('tempate',()=>{
    it('test',()=>{
        cy.visit('https://demo.applitools.com/')
        cy.getGenLocator('username').clear()
    })

})
/// <reference types="cypress"/>
import * as lists from '../fixtures/lists.json'

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > :nth-child(1)').click()
    cy.get('h1').contains('Querying').should('be.visible')
    //cy.get('').realHover()
    lists.forEach(list => {
      list.age
    });

  })
})
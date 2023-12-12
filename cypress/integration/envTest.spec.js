/// <reference types="cypress" />

describe('Environment Variables', () => {

  before(()=>{
    cy.fixture(`${Cypress.env('MY_ENV')}/data.json`).then(data=>{
      cy.log(data)
    })
  })

  beforeEach(()=>{
    cy.visit(Cypress.env('HOST'))
  })

  it('cypress.json or cypress.env.json', () => {
    cy.url().should('contain', Cypress.env('HOST'))
  })

  it('Config Test Env',{
    env: {
      myEnv: 'local'
    }
  }, () => {
    cy.log(Cypress.env('myEnv'))
  });
})

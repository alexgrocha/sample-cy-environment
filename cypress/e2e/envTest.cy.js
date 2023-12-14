/// <reference types="cypress" />

describe('Access Admin Panel', () => {
  beforeEach(() => {
      //cy.visit('/wp-admin')
      cy.login(data.usuario, data.senha)
  });

  it('should login with valid credentials', () => {
      //loginPage.login(data.usuario, data.senha)  
      dashboardPage.siteName.should("be.visible")   
  });
  
describe('Environment Variables', () => {

  before(()=>{
    cy.fixture(`${Cypress.env('env')}/data.json`).then(data=>{
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

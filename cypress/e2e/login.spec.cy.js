import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'

const loginPage = new LoginPage()

describe('EBAC Shop - Tests', () => {

  it('Login - Success', () => {
    loginPage.accessLoginPage()

    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    cy.location('pathname').should('equal', '/minha-conta/')
  })

  it('Login - Fail', () => {
    loginPage.accessLoginPage()

    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    cy.get('body').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    
  });
})
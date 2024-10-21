import RegisterPage from '../pages/registerPage';

const registerPage = new RegisterPage()

describe('EBAC Shop - Tests', () => {

  const Chance = require('chance')
  const chance = new Chance()

  it('Register - Success', () => {
    registerPage.accessRegisterPage()

    registerPage.userRegistrationAlways()

    cy.get('body').should('contain', 'A partir do painel de controle de sua conta, você pode ver suas compras recentes, gerenciar seus endereços de entrega e faturamento, e editar sua senha e detalhes da conta.') 
    
    cy.get('body').should('contain', 'Comprar')

    cy.get('body').should('contain', 'Welcome')
  })
  
  });
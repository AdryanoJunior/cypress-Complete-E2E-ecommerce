import userData from '../fixtures/userData.json'

import LoginPage from '../pages/loginPage';
import ProductPage from '../pages/productPage';
import ProductTwoPage from '../pages/productTwoPage';
import CheckoutPage from '../pages/checkoutPage';

const loginPage = new LoginPage()
const productPage = new ProductPage()
const productTwoPage = new ProductTwoPage()
const checkoutPage = new CheckoutPage()

describe('EBAC Shop - Tests', () => {

  it('Complete Order - Success', () => {

    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    cy.location('pathname').should('equal', '/minha-conta/')
    
    productPage.choosingProduct()
    productPage.addProductButton()
    
    cy.get('body').should('contain', '“Ariel Roll Sleeve Sweatshirt” foi adicionado no seu carrinho.')

    productTwoPage.selectingProduct()
    productTwoPage.addingProductButton()

    cy.get('body').should('contain', '2 × “Eos V-Neck Hoodie” foram adicionados no seu carrinho.')

    checkoutPage.completePurchase()
    cy.location('pathname').should('equal', '/checkout/')

    checkoutPage.fillPersonalDetails()
    
    checkoutPage.finalizePurchase()
    
    cy.get('body').should('contain', 'Obrigado. Seu pedido foi recebido.')
    cy.get('body').should('contain', 'Pagar em dinheiro na entrega.')
    cy.get('body').should('contain', 'Endereço de faturamento')
    cy.get('body').should('contain', 'Detalhes do pedido')
  })
  
  });

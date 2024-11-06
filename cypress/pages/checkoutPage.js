import { faker } from '@faker-js/faker';

class CheckoutPage {
    selectorsList() {
        const selectors = {
            viewCartButton: "[tabindex='1']",
            checkoutButton: '.checkout-button',
            firstNameField: "[name='billing_first_name']",
            lastNameField: "[name='billing_last_name']",
            companyField: "[name='billing_company']",
            streetAddressField: "[name='billing_address_1']",
            cityField: "[name='billing_city']",
            postCodeField: "[name='billing_postcode']",
            phoneField: "[name='billing_phone']",
            commentsField: "[name='order_comments']",
            termsClick: '#terms',
            finalizePurchaseButton: "[value='Finalizar compra']"
        }
        return selectors
    }
    completePurchase() {
        cy.get(this.selectorsList().viewCartButton).click()
        cy.location('pathname').should('equal', '/carrinho/')
        cy.get(this.selectorsList().checkoutButton).click()
    }

    fillPersonalDetails() {
        cy.get(this.selectorsList().firstNameField).clear().type(faker.person.firstName())
        cy.get(this.selectorsList().lastNameField).clear().type(faker.person.lastName())
        cy.get(this.selectorsList().companyField).clear().type(faker.company.name())
        cy.get(this.selectorsList().streetAddressField).clear().type(faker.location.streetAddress())
        cy.get(this.selectorsList().cityField).clear().type(faker.location.city())
        cy.get(this.selectorsList().postCodeField).clear().type('01521020')
        cy.get(this.selectorsList().phoneField).clear().type(faker.number.int())
        cy.get(this.selectorsList().commentsField).type('Deixar pedido na Portaria do edifício')
        cy.get(this.selectorsList().termsClick).click()
    }

    finalizePurchase() {
        cy.get(this.selectorsList().finalizePurchaseButton).click()
    }
}


export default CheckoutPage
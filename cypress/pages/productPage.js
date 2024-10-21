class ProductPage {
    selectorsList() {
        const selectors = {
            selectBuy: "[href='http://lojaebac.ebaconline.art.br/produtos/']",
            selectProduct: "[data-product-id='3964']",
            selectSize: "[data-title='XS']",
            selectColor: "[data-title='Red']",
            addProductButton: '.single_add_to_cart_button',
        }
        return selectors
    }
    choosingProduct() {
        cy.get(this.selectorsList().selectBuy).eq(1).click()
        cy.location('pathname').should('equal', '/produtos/')
        cy.get(this.selectorsList().selectProduct).eq(0).click()
        cy.get(this.selectorsList().selectSize).click()
        cy.get(this.selectorsList().selectColor).click()
    }

    addProductButton() {
        cy.get(this.selectorsList().addProductButton).click()
    }
}


export default ProductPage
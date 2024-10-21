class ProductTwoPage {
    selectorsList() {
        const selectors = {
            selectCategoryWomen: "[href='http://lojaebac.ebaconline.art.br/product-category/clothing/women/']",
            selectProduct2: "[data-product-id='4003']",
            selectSize2: "[data-title='M']",
            selectColor2: "[data-title='Green']",
            moreButton: "[value='+']",
            addProductButton2: '.single_add_to_cart_button',
        }
        return selectors
    }
    selectingProduct() {
        cy.get(this.selectorsList().selectCategoryWomen).click()
        cy.get(this.selectorsList().selectProduct2).eq(0).click()
        cy.get(this.selectorsList().selectSize2).click()
        cy.get(this.selectorsList().selectColor2).click()
        cy.get(this.selectorsList().moreButton).click()
    }

    addingProductButton() {
        cy.get(this.selectorsList().addProductButton2).click()
    }
}


export default ProductTwoPage
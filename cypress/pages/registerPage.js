class RegisterPage {
    selectorsList() {
        const selectors = {
            emailField: "[name='email']",
            passwordField: "[name='password']",
            registerButton: "[name='register']",
            myAccountContain: '#wrapper-container'
        }
        return selectors
    }
    accessRegisterPage() {
        cy.visit('/minha-conta/')
    }

    userRegistrationAlways() {
        cy.get(this.selectorsList().emailField).type(chance.email())
        cy.get(this.selectorsList().passwordField).eq(1).type(chance.string())
        cy.get(this.selectorsList().registerButton).click()
        cy.get(this.selectorsList().myAccountContain)
    }
}


export default RegisterPage
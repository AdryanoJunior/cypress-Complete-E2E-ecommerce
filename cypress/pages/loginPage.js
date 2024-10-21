class LoginPage {
    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[name='login']",
        }
        return selectors
    }
    accessLoginPage() {
        cy.visit('/minha-conta/')
    }

    loginWithUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).eq(0).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }
}


export default LoginPage
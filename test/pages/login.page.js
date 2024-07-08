class LoginPage {

    //locators

    get usernameTextBox() {
        return $('#username')
    }

    get usernamePasswordBox() {
        return $('#password')
    }

    get loginButton() {
        return $('button[type=submit]')
    }

    get checkLogin() {
        $('#content > div > h4')
    }

    get isYouLogged() {
        return $('div[id=flash]')
    }

    //actions

    async login(username, password) {
        await this.usernameTextBox.setValue(username);
        await this.usernamePasswordBox.setValue(password);
        await this.loginButton.click();
    }

    async checkLoginAs(message) {
        await expect(this.checkLogin).toEqual(message); 
    }

    async isYouLoggedAs(message) {
        await expect(this.isYouLogged)
            .toHaveText(expect.stringContaining(message));
    }

}
module.exports = new LoginPage();
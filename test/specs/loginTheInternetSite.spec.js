const LoginPage = require('../pages/login.page')

describe('Login Test', function (){

    it.skip('Login1', async () => {

        browser.url('https://the-internet.herokuapp.com/login')
        await $('#username').setValue('tomsmith');
        await $('#password').setValue('SuperSecretPassword!');
        await $('button[type=submit]').click();

        // assertions
        const checkLogin = $('#content > div > h4');
        await checkLogin.isEqual('Welcome to the Secure Area. When you are done click logout below.');

        const isYouLogged = await $('div[id=flash]');
        await isYouLogged.waitForDisplayed();
        await expect(isYouLogged).toHaveText(expect.stringContaining('You logged into a secure area!'));
    })

    it('login POM', async() => {

        browser.url('https://the-internet.herokuapp.com/login')

        await LoginPage.login('tomsmith','SuperSecretPassword!')
        await LoginPage.checkLoginAs('Welcome to the Secure Area. When you are done click logout below.')
        await LoginPage.isYouLoggedAs('You logged into a secure area!')

    })
    
})
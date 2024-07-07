describe("RecordLoginTest", () => {
  it("tests RecordLoginTest", async () => {
    //rozmiar okna
    await browser.setWindowSize(958, 508)
    await browser.url("https://the-internet.herokuapp.com/login")
    //sprawdzenie czy url sie zgadza
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/login")
    await browser.$("#username").setValue("tomsmith")
    await browser.$("#password").setValue("SuperSecretPassword!")
    await browser.$(".radius").click()
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/secure")
    await browser.$("a[class ='button secondary radius']").click()
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/login")
  });
});

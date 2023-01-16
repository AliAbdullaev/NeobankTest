const {expect} = require('@playwright/test');

class LoginPage {

    constructor(page)
    {
        this.page = page;
        this.phoneNumberField = page.locator("#login");
        this.continueButton = page.locator("#btnNext");
        this.textTitle = page.locator(".auth-form-title");
    }

    async goto()
    {
        await this.page.goto("https://web.neobank.one/");
    }

    async compareTitle(pageTitle)
    {
        await expect(this.page).toHaveTitle(pageTitle);
    }

    async enteringPhoneNumber(phoneNumber)
    {
        await this.phoneNumberField.type(phoneNumber);
        await this.continueButton.click();
    }

    // in playwright you need to add your size to config files
    async changeWindowSize()
    {
        await this.page.setViewportSize({
            width: 2560,
            height: 1329,
          });
    }

    async compareTextTitles(testTextTitle)
    {
        await expect(this.textTitle).toHaveText(testTextTitle);
    }


};

module.exports = {LoginPage};
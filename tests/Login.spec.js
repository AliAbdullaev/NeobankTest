const {test} = require('@playwright/test');
const {LoginPage} = require('../pageObject/LoginPage');
const loginData = JSON.parse(JSON.stringify(require('../testData/loginTestData.json')));


test('Test task for NeoBank', async ({page})=>

{   

    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.compareTitle(loginData.pageTitle);
    await loginPage.enteringPhoneNumber(loginData.phoneNumber);
    await loginPage.compareTextTitles(loginData.testTextTitle);
    await loginPage.changeWindowSize();

});
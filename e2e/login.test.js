const { STRINGS } = require("../src/utils/Constant");

describe('LoginScreen', () => {

    beforeAll(async () => {
        await device.launchApp();
    });

    beforeEach(async () => {
        await device.reloadReactNative();
    });


    it('Login Screen Validations', async () => {

        // Wait for the splash screen timeout
        await waitFor(element(by.text(STRINGS.APP_NAME))).toBeVisible().withTimeout(3000);
        // Verify that the app navigates to the Auth screen
        await waitFor(element(by.text(STRINGS.SplashText))).toBeVisible().withTimeout(3000);
        // Click Get Started button
        await element(by.text('Get Started')).tap();


        // Verify that the app navigates to the Login screen
        await expect(element(by.text(STRINGS.welcomeBack))).toBeVisible();

        // Tap the Login button without entering username and password
        await element(by.id('loginbtn')).tap();
        // Verify the alert message for missing username
        await expect(element(by.text('Please fill Username'))).toBeVisible();
        // Tap the Ok button in alert
        await element(by.text('OK')).tap();

        // Enter username
        await element(by.id('usernameInput')).typeText('johnd');
        // Dismiss the keyboard
        await element(by.id('usernameInput')).tapReturnKey();
        // Tap the Login button without entering password
        // Tap the Login button without entering username and password
        await new Promise(resolve => setTimeout(resolve, 500)); // Add a short delay here
        await element(by.id('loginbtn')).tap();
        // Verify the alert message for missing password
        await expect(element(by.text('Please fill Password'))).toBeVisible();
        // Tap the Ok button in alert
        await element(by.text('OK')).tap();


        // Enter username & password
        await element(by.id('passwordInput')).typeText('m38rmF$');
        await element(by.id('passwordInput')).tapReturnKey();
        await new Promise(resolve => setTimeout(resolve, 500)); // Add a short delay here
        await element(by.id('loginbtn')).tap();

        // // Verify that the loader is displayed
        // await expect(element(by.id('loader'))).toBeVisible();

        // // Wait for the loader to disappear
        // await waitFor(element(by.id('loader'))).toBeNotVisible().withTimeout(5000);
    });
});

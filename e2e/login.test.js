const { STRINGS } = require("../src/utils/Constant");

describe('LoginScreen', () => {

    beforeAll(async () => {
        await device.launchApp();
    });

    beforeEach(async () => {
        await device.reloadReactNative();

        // The splash screen should now be displayed
        await expect(element(by.text(STRINGS.APP_NAME))).toBeVisible();

        // We need to wait for the splash timeout (in this case 2000ms) 
        // and a little bit more to allow the navigation operation to complete
        await new Promise(resolve => setTimeout(resolve, 3000)); // Add a short delay here
    });

    it('Login Screen Validations', async () => {

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

        // Verify that the loader is displayed
        await new Promise(resolve => setTimeout(resolve, 1000)); // Add a short delay here
        await expect(element(by.text(STRINGS.tagLine))).toBeVisible();

        // // Wait for the loader to disappear
        // await waitFor(element(by.id('loader'))).toBeNotVisible().withTimeout(5000);
    });

    it('Navigates to the right screen after Splash', async () => {
        // Depending on whether the login was successful or not, we should be on a different screen
        // If the login was successful, we should be navigated to the 'HomeBottomTab' screen
        // If it was not, we should be navigated to the 'Auth' screen

        // Check if the Home screen is visible
        const isHomeVisible = await expect(element(by.text(STRINGS.tagLine))).toBeVisible();
        if (isHomeVisible) {
            // If Home is visible, then we should have been navigated to 'HomeBottomTab'
            console.log("Navigated to Home");
        } else {
            // If Home is not visible, then we should have been navigated to 'Auth'
            console.log("Navigated to Auth");
        }
    });
    
});

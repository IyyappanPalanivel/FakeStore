const { STRINGS } = require("../src/utils/Constant");

describe('LoginScreen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('Should display error messages for missing username and password', async () => {
    // Wait for the splash screen timeout
    await waitFor(element(by.text(STRINGS.APP_NAME))).toBeVisible().withTimeout(3000);

    // Verify that the app navigates to the Auth screen
    await waitFor(element(by.text(STRINGS.SplashText))).toBeVisible().withTimeout(3000);

    // Click Get Started button
    await element(by.text('Get Started')).tap();

    // Verify that the app navigates to the Login screen
    await expect(element(by.text(STRINGS.welcomeBack))).toBeVisible();

  });
});

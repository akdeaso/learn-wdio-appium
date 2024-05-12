import Page from "./page.js";
import { driver } from "@wdio/globals";

class homePage extends Page {
  get viewMenu() {
    return $("~View menu");
  }
  get loginButton() {
    return $('//*[@text="Log In"]');
  }
  get loginPageTitle() {
    return $("id=com.saucelabs.mydemoapp.android:id/loginTV");
  }

  async clickLoginButton() {
    await this.viewMenu.click();
    await driver.pause(500);
    await super.scrollDown();
    await this.loginButton.click();
  }
}

export default new homePage();

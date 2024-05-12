import Page from "./page.js";

class LoginPage extends Page {
  get inputEmail() {
    return $("id=com.saucelabs.mydemoapp.android:id/nameET");
  }
  get inputPassword() {
    return $("id=com.saucelabs.mydemoapp.android:id/passwordET");
  }
  get loginButton() {
    return $("id=com.saucelabs.mydemoapp.android:id/loginBtn");
  }

  async login(email, password) {
    await this.inputEmail.setValue(email);
    await this.inputPassword.setValue(password);
    await this.loginButton.click();
  }
}

export default new LoginPage();

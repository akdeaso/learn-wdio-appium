import Page from "./page.js";

class CompletePage extends Page {
  get successMessage() {
    return $("id=com.saucelabs.mydemoapp.android:id/completeTV");
  }
  get continueShoppingButton() {
    return $("id=com.saucelabs.mydemoapp.android:id/shoopingBt");
  }
}

export default new CompletePage();

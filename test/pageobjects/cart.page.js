import Page from "./page.js";

class CartPage extends Page {
  get backpackPrice() {
    return $("id=com.saucelabs.mydemoapp.android:id/priceTV");
  }
  get productQuantity() {
    return $("id=com.saucelabs.mydemoapp.android:id/noTV");
  }
  get totalPrice() {
    return $("id=com.saucelabs.mydemoapp.android:id/totalPriceTV");
  }
  get checkoutButton() {
    return $("id=com.saucelabs.mydemoapp.android:id/cartBt");
  }
}

export default new CartPage();

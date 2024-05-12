import Page from "./page.js";

class ProductPage extends Page {
  get backpackPrice() {
    return $("id=com.saucelabs.mydemoapp.android:id/priceTV");
  }
  get greenColor() {
    return $("~Green color");
  }
  get increaseQuantity() {
    return $("~Increase item quantity");
  }
  get addToCart() {
    return $("~Tap to add product to cart");
  }
  get cartQuantity() {
    return $("id=com.saucelabs.mydemoapp.android:id/cartTV");
  }
  get cartButton() {
    return $("id=com.saucelabs.mydemoapp.android:id/cartIV");
  }

  async addProductToCart() {
    await super.scrollDown();
    await this.greenColor.click();
    await this.increaseQuantity.click();
    await this.addToCart.click();
  }
}

export default new ProductPage();

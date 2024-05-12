import { driver } from "@wdio/globals";
import homePage from "../pageobjects/home.page.js";

describe("E2E Testing login until checkout", () => {
  it.only("should open login page", async () => {
    await homePage.clickLoginButton();
    await expect(homePage.loginPageTitle).toHaveText("Login");
  });
  it("should login with valid credentials", async () => {
    await $("id=com.saucelabs.mydemoapp.android:id/nameET").setValue(
      "bod@example.com"
    );
    await $("id=com.saucelabs.mydemoapp.android:id/passwordET").setValue(
      "10203040"
    );
    await $("id=com.saucelabs.mydemoapp.android:id/loginBtn").click();
    const productPageTitle = await $(
      "id=com.saucelabs.mydemoapp.android:id/productTV"
    );
    await expect(productPageTitle).toHaveText("Products");
  });
  it("should add product to cart", async () => {
    const backpack = await $("~Sauce Labs Backpack");
    await backpack.click();
    const backpackPrice = await $(
      "id=com.saucelabs.mydemoapp.android:id/priceTV"
    );
    await expect(backpackPrice).toHaveText("$ 29.99");
    await driver
      .action("pointer")
      .move({ x: 250, y: 850 })
      .down()
      .pause(100)
      .move({ x: 250, y: 500, duration: 200 })
      .up()
      .perform();
    const greenColor = await $("~Green color");
    await greenColor.click();
    const increaseQuantity = await $("~Increase item quantity");
    await increaseQuantity.click();
    const addToCart = await $("~Tap to add product to cart");
    await addToCart.click();
    const cartQuantity = await $(
      "id=com.saucelabs.mydemoapp.android:id/cartTV"
    );
    expect(cartQuantity).toHaveText("2");
  });
  it("should show cart items", async () => {
    const cartButton = await $("id=com.saucelabs.mydemoapp.android:id/cartIV");
    await cartButton.click();
    const backpackPrice = await $(
      "id=com.saucelabs.mydemoapp.android:id/priceTV"
    );
    await expect(backpackPrice).toHaveText("$ 29.99");
    const productQuantity = await $(
      "id=com.saucelabs.mydemoapp.android:id/noTV"
    );
    await expect(productQuantity).toHaveText("2");
    const totalPrice = await $(
      "id=com.saucelabs.mydemoapp.android:id/totalPriceTV"
    );
    await expect(totalPrice).toHaveText("$ 59.98");
  });
  it("should proceed to checkout", async () => {
    const checkoutButton = await $(
      "id=com.saucelabs.mydemoapp.android:id/cartBt"
    );
    await checkoutButton.click();
    await $("id=com.saucelabs.mydemoapp.android:id/nameET").setValue(
      "bod@example.com"
    );
    await $("id=com.saucelabs.mydemoapp.android:id/passwordET").setValue(
      "10203040"
    );
    await $("id=com.saucelabs.mydemoapp.android:id/loginBtn").click();
    const checkoutTitle = await $(
      "id=com.saucelabs.mydemoapp.android:id/checkoutTitleTV"
    );
    await expect(checkoutTitle).toHaveText("Checkout");
    const fullName = await $(
      "id=com.saucelabs.mydemoapp.android:id/fullNameET"
    );
    await fullName.setValue("Ainz Ooal Gown");
    const address = await $("id=com.saucelabs.mydemoapp.android:id/address1ET");
    await address.setValue("Great Tomb of Nazarick");
    const city = await $("id=com.saucelabs.mydemoapp.android:id/cityET");
    await city.setValue("Nazarick");
    await driver
      .action("pointer")
      .move({ x: 250, y: 850 })
      .down()
      .pause(100)
      .move({ x: 250, y: 500, duration: 200 })
      .up()
      .perform();
    const zipCode = await $("id=com.saucelabs.mydemoapp.android:id/zipET");
    await zipCode.setValue("12345");
    const country = await $("id=com.saucelabs.mydemoapp.android:id/countryET");
    await country.setValue("New World");
    const paymentButton = await $(
      "id=com.saucelabs.mydemoapp.android:id/paymentBtn"
    );
    await paymentButton.click();
    const fullNameCheckout = await $(
      "id=com.saucelabs.mydemoapp.android:id/nameET"
    );
    await fullNameCheckout.setValue("Ainz Ooal Gown");
    const cardNumber = await $(
      "id=com.saucelabs.mydemoapp.android:id/cardNumberET"
    );
    await cardNumber.setValue("123456");
    await driver
      .action("pointer")
      .move({ x: 250, y: 850 })
      .down()
      .pause(100)
      .move({ x: 250, y: 500, duration: 200 })
      .up()
      .perform();
    const expirationDate = await $(
      "id=com.saucelabs.mydemoapp.android:id/expirationDateET"
    );
    await expirationDate.setValue("12/25");
    const securityCode = await $(
      "id=com.saucelabs.mydemoapp.android:id/securityCodeET"
    );
    await securityCode.setValue("123");
    const reviewButton = await $(
      "id=com.saucelabs.mydemoapp.android:id/paymentBtn"
    );
    await reviewButton.click();
    await reviewButton.click();
    const successMessage = await $(
      "id=com.saucelabs.mydemoapp.android:id/completeTV"
    );
    await expect(successMessage).toHaveText("Checkout Complete");
    const continueShoppingButton = await $(
      "id=com.saucelabs.mydemoapp.android:id/shoopingBt"
    );
    await continueShoppingButton.click();
    const productPageTitle = await $(
      "id=com.saucelabs.mydemoapp.android:id/productTV"
    );
    await expect(productPageTitle).toHaveText("Products");
  });
});

import { driver } from "@wdio/globals";

describe("E2E Testing login until checkout", () => {
  it("should open login page", async () => {
    //selector with accessibility id
    await $("~View menu").click();
    await driver.pause(500);
    //scroll down
    await driver
      .action("pointer")
      .move({ x: 250, y: 850 })
      .down()
      .pause(100)
      .move({ x: 250, y: 500, duration: 200 })
      .up()
      .perform();
    await $('//*[@text="Log In"]').click();
    const loginPageTitle = await $(
      "id=com.saucelabs.mydemoapp.android:id/loginTV"
    );
    await expect(loginPageTitle).toHaveText("Login");
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
    const backpackTitle = await $(
      "id=com.saucelabs.mydemoapp.android:id/priceTV"
    );
    await expect(backpackTitle).toHaveText("$ 29.99");
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
});

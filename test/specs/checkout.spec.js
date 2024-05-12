import HomePage from "../pageobjects/home.page.js";
import LoginPage from "../pageobjects/login.page.js";
import ProductPage from "../pageobjects/product.page.js";
import CartPage from "../pageobjects/cart.page.js";
import CheckoutPage from "../pageobjects/checkout.page.js";
import CompletePage from "../pageobjects/complete.page.js";

describe("E2E Testing login until checkout", () => {
  it("should open login page", async () => {
    await HomePage.clickLoginButton();
    await expect(HomePage.loginPageTitle).toHaveText("Login");
  });
  it("should login with valid credentials", async () => {
    await LoginPage.login("bod@example.com", "10203040");
    await expect(LoginPage.productPageTitle).toHaveText("Products");
  });
  it("should add product to cart", async () => {
    await HomePage.selectBackpack();
    await expect(ProductPage.backpackPrice).toHaveText("$ 29.99");
    await ProductPage.addProductToCart();
    await expect(ProductPage.cartQuantity).toHaveText("2");
  });
  it("should show cart items", async () => {
    await ProductPage.cartButton.click();
    await expect(CartPage.backpackPrice).toHaveText("$ 29.99");
    await expect(CartPage.productQuantity).toHaveText("2");
    await expect(CartPage.totalPrice).toHaveText("$ 59.98");
  });
  it("should proceed to checkout", async () => {
    await CartPage.checkoutButton.click();
    await LoginPage.login("bod@example.com", "10203040");
    await expect(CheckoutPage.checkoutTitle).toHaveText("Checkout");
    await CheckoutPage.fillShippingAddress(
      "Ainz Ooal Gown",
      "Great Tomb of Nazarick",
      "Nazarick",
      "12345",
      "New World"
    );
    await CheckoutPage.fillPaymentMethod(
      "Ainz Ooal Gown",
      "123456",
      "12/25",
      "123"
    );
    await expect(CompletePage.successMessage).toHaveText("Checkout Complete");
    await CompletePage.continueShoppingButton.click();
    await expect(HomePage.homePageTitle).toHaveText("Products");
  });
});

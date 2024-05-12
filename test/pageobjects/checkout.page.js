import Page from "./page.js";

class CheckoutPage extends Page {
  get checkoutTitle() {
    return $("id=com.saucelabs.mydemoapp.android:id/checkoutTitleTV");
  }
  get inputFullName() {
    return $("id=com.saucelabs.mydemoapp.android:id/fullNameET");
  }
  get inputAddress() {
    return $("id=com.saucelabs.mydemoapp.android:id/address1ET");
  }
  get inputCity() {
    return $("id=com.saucelabs.mydemoapp.android:id/cityET");
  }
  get inputZip() {
    return $("id=com.saucelabs.mydemoapp.android:id/zipET");
  }
  get inputCountry() {
    return $("id=com.saucelabs.mydemoapp.android:id/countryET");
  }
  get paymentButton() {
    return $("id=com.saucelabs.mydemoapp.android:id/paymentBtn");
  }
  get inputFullNameCheckout() {
    return $("id=com.saucelabs.mydemoapp.android:id/nameET");
  }
  get inputCardNumber() {
    return $("id=com.saucelabs.mydemoapp.android:id/cardNumberET");
  }
  get inputExpirationDate() {
    return $("id=com.saucelabs.mydemoapp.android:id/expirationDateET");
  }
  get inputSecurityCode() {
    return $("id=com.saucelabs.mydemoapp.android:id/securityCodeET");
  }

  async fillShippingAddress(fullName, address, city, zip, country) {
    await this.inputFullName.setValue(fullName);
    await this.inputAddress.setValue(address);
    await this.inputCity.setValue(city);
    await super.scrollDown();
    await this.inputZip.setValue(zip);
    await this.inputCountry.setValue(country);
    await this.paymentButton.click();
  }
  async fillPaymentMethod(fullName, cardNumber, expirationDate, securityCode) {
    await this.inputFullNameCheckout.setValue(fullName);
    await this.inputCardNumber.setValue(cardNumber);
    await super.scrollDown();
    await this.inputExpirationDate.setValue(expirationDate);
    await this.inputSecurityCode.setValue(securityCode);
    await this.paymentButton.click();
    await this.paymentButton.click();
  }
}

export default new CheckoutPage();

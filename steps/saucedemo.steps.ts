import {Given, When, Then} from "@wdio/cucumber-framework";
import LoginPage from "../pageObjects/LoginPage";
import InventoryPage from "../pageObjects/InventoryPage";
import CartPage from "../pageObjects/CartPage";

// Instantiate page objects
const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();
const cartPage = new CartPage();

Given('I am on the SauceDemo Login Page', async () => {
    await loginPage.open();
});

When('I log in as {string} with password {string}', async (username: string, password: string) => {
    await loginPage.login(username, password);
});

When('I add product {string} to the cart', async (productName: string) => {
    await inventoryPage.assertProductPageisOpen();
    await inventoryPage.addProductToCart(productName);
});

Then('I should see {string} in the cart', async (productName: string) => {
     await cartPage.goToCartAndAssert();
    const productNames = await cartPage.getCartProductNames();
    expect(productNames).toContain(productName);
});

When('I remove product {string} from the cart', async (productName: string) => {
    await cartPage.removeProduct(productName);
});

Then('the cart should be empty', async () => {
    await cartPage.assertCartIsEmpty();
});
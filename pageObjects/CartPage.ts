import {$,$$,expect} from "@wdio/globals";

// CartPage class to interact with the cart page elements and actions
export default class CartPage {
    get cartItems() {
        return $$('.cart_item');
    }

    // Method to get the names of products in the cart
    async getCartProductNames(): Promise<string[]> {
    const items = await this.cartItems; 
    const names = await Promise.all(
        await items.map(async item => await item.$('.inventory_item_name').getText())
    );
    return names;
    }

    // Method to remove a product from the cart by its name
    async removeProduct(productName: string){
        const item = await $(`//*[text()="${productName}"]/ancestor::div[@class="cart_item"]`);
        const removeButton = await item.$('button.btn_secondary');
        await browser.execute((el) => el.click(), removeButton);
    }
    
    // Method to assert that the cart is empty
    async assertCartIsEmpty() {
        const items = await this.cartItems;
        expect(items.length).toBe(0);
    }

    // Method to navigate to the cart and assert the cart page is open
    async goToCartAndAssert() {
    const cartLink = await $('[data-test="shopping-cart-link"]');
    await cartLink.waitForClickable({ timeout: 10000 });
    await browser.execute((el) => el.click(), cartLink);

    const cartTitle = await $('span.title');
    await cartTitle.waitForDisplayed({ timeout: 10000 });
    const titleText = await cartTitle.getText();
    expect(titleText).toBe('Your Cart');
    }
}
import {$} from "@wdio/globals";

// InventoryPage class to interact with the inventory page elements and actions
export default class InventoryPage {

    get CartIcon() {
        return $('.shopping_cart_link');
    }
    
    // Method to add a product to the cart by its name
    async addProductToCart(productName: string) {
    // convert product name to the format used in the button's data-test
    const formattedName = productName.toLowerCase().replace(/ /g, '-');
    const buttonSelector = `[data-test="add-to-cart-${formattedName}"]`;

    const addButton = await $(buttonSelector);
    await browser.execute((el) => el.click(), addButton);

    }

    // Method to open the cart page
    async openCart() {
        const cartIcon = await this.CartIcon;
        await cartIcon.click();
    }

    // Method to assert that the product page is open
    async assertProductPageisOpen() {
        const inventoryTitle = await $('span.title');
        expect(await inventoryTitle.getText()).toBe('Products');
    }
}
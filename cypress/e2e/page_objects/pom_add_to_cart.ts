const addToCartPage = {
    txtItemName: (itemName: string) => `//div[contains(text(), "${itemName}")]`,
    txtCartTitle: '//span[@class="fa-layers-counter shopping_cart_badge"]',
    btnAddToCartBackpack: '//button[contains(text(),"Add to cart") and @data-test="add-to-cart-sauce-labs-backpack"]',
    btnAddToCartBikeLight: '//button[contains(text(),"Add to cart") and @data-test="add-to-cart-sauce-labs-bike-light"]',
    btnRemoveBackpackFromCart: '//button[contains(text(),"Remove") and @data-test="remove-sauce-labs-backpack"]',
    btnRemoveBikeLightFromCart: '//button[contains(text(),"Remove") and @data-test="remove-sauce-labs-bike-light"]',
    btnCart: '//a[@data-test="shopping-cart-link"]',
    btnContinueShopping: '//button[contains(text(),"Continue Shopping")]',
    txtUpdatedCart: '//span[@data-test="shopping-cart-badge"]',
  };
  
  export default addToCartPage;
  
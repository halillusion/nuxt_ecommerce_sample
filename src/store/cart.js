import { acceptHMRUpdate, defineStore } from 'pinia'

export const cartStore = defineStore('cart', {
  state: () => ({
    cart: {},
    favorite: {},
  }),
  actions: {
    async fetchCart(bearerToken) {
      /*
      const API_URL = useRuntimeConfig().API_URL;
      const response = await fetch(API_URL + '/Product/ListProducts/' + page, {
        headers: {
          'Authorization': 'Bearer ' + bearerToken,
          'GUID': useRuntimeConfig().GUID
        },
        method: 'GET',
      });
      const products = await response.json();
      if (products.data && products.data.length > 0) {
        */
        this.cart = {}
      //}
    },
    addToCart(productId, productQty, productPrice) {
      this.cart[productId] = {
        id: productId,
        qty: productQty,
        price: productPrice
      };
    },
    removeFromCart(productId) {
      delete this.cart[productId];
    },
    addToFavorite(productId) {
      this.favorite[productId] = productId;
    },
    removeFromFavorite(productId) {
      delete this.favorite[productId];
    }
  },
  getters: {
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(cartStore, import.meta.hot));
}
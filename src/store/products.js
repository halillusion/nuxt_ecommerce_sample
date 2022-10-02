import { acceptHMRUpdate, defineStore } from 'pinia'

export const productsStore = defineStore('products', {
  state: () => ({
    products: [],
  }),
  actions: {
    async fetchProducts(bearerToken, page = 0) {
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
        this.products = products.data
      }
    }
  },
  getters: {
    getProducts: state => state.products,
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(productsStore, import.meta.hot));
}
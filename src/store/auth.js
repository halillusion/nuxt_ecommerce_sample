import { acceptHMRUpdate, defineStore } from 'pinia'

export const authStore = defineStore('auth', {
  state: () => ({
    token: null,
  }),
  actions: {
    async setToken(token) {
      this.token = token;
    },
    async fetchProducts() {
      const API_URL = useRuntimeConfig().API_URL;
      const response = await fetch(API_URL + '/products');
      this.products = await response.json();
    }
  },
  getters: {
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(authStore, import.meta.hot));
}
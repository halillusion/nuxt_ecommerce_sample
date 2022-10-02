<template>
  <main class="main">
    <Breadcrumb :schema="schema"/>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="content-wrapper">
            <h1 class="page-title">
              <strong>Beyaz Eşya</strong> kategorisi içerisindeki ürünler listeleniyor
            </h1>
            <div class="product-list">
              <div class="row">
                <div class="col-12">
                  <div class="list-filter-options">
                    <select class="form-select" v-model="filterOption" aria-label="Filtreleme">
                      <option value="">Filtrele</option>
                      <option value="name_az">İsim: A-Z</option>
                      <option value="name_za">İsim: Z-A</option>
                      <option value="price_az">Fiyat: A-Z</option>
                      <option value="price_za">Fiyat: Z-A</option>
                    </select>
                    <select class="form-select" v-model="perPage" aria-label="Kayıt Göster">
                      <option value="20">20</option>
                      <option value="40">40</option>
                      <option value="60">60</option>
                      <option value="80">80</option>
                      <option value="100">100</option>
                    </select>
                    <div class="btn-group btn-group-sm" role="group" aria-label="Görünüm">
                      <input type="radio" class="btn-check" v-model="layout" value="grid" id="layout-grid" autocomplete="off">
                      <label class="btn btn-outline-light" for="layout-grid" title="Izgara"><i class="ti ti-layout-grid"></i></label>
                      <input type="radio" class="btn-check" v-model="layout" value="list" id="layout-list" autocomplete="off">
                      <label class="btn btn-outline-light" for="layout-list" title="Liste"><i class="ti ti-layout-list"></i></label>
                    </div>
                  </div>
                </div>
                <div class="list">
                  <div v-if="!loading" class="row g-1">
                    <template v-for="(product, key) in computedProductList[(page-1)]" :key="key">
                      <div class="col-12" :class="layout === 'grid' ? 'col-sm-6 col-md-4 col-lg-3' : ''">
                        <ProductWidget :product="product" :layout="layout" />
                      </div>
                    </template>
                    <div class="col-12">
                      <nav aria-label="Sayfalama">
                        <ul class="pagination justify-content-center">
                          <li class="page-item" v-for="(num, key) in computedPageCount" :key="'pagination'+key">
                            <a class="page-link" :class="page === num ? 'active' : ''" href="#" @click="page = num">{{num}}</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div v-else class="row g-1">
                    <template v-for="(product, key) in [1, 2 , 3, 4, 5, 6, 7, 8, 1, 2 , 3, 4, 5, 6, 7, 8]" :key="'skeleton'+key">
                      <div class="col-12" :class="layout === 'grid' ? 'col-sm-6 col-md-4 col-lg-3' : ''">
                        <ProductWidgetSkeleton :layout="layout" />
                      </div>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import { mapStores, mapState  } from 'pinia'
import { authStore } from '~/store/auth'
import { productsStore } from '~/store/products'
import { cartStore } from '~/store/cart'
export default {
  name: 'Index',
  data() {
    return {
      schema: [
        {
          "name": "Ana Sayfa",
          "link": "/"
        },
        {
          "name": "Ürünler",
          "link": "/"
        },
        {
          "name": "Beyaz Eşya",
          "link": "/"
        },
      ],
      layout: 'grid',
      perPage: 20,
      page: 1,
      filterOption: '',
      loading: true,
      productList: [],
    }
  },
  computed: {
    ...mapStores(authStore, productsStore, cartStore),
    ...mapState(productsStore, ['products']),
    computedProductList() {
      const productList = JSON.parse(JSON.stringify(this.productList));
      if (this.filterOption === 'name_az') {
        productList.sort((a, b) => a.name.localeCompare(b.name));
      }
      if (this.filterOption === 'name_za') {
        productList.sort((a, b) => b.name.localeCompare(a.name));
      }
      if (this.filterOption === 'price_az') {
        productList.sort((a, b) => a.price - b.price);
      }
      if (this.filterOption === 'price_za') {
        productList.sort((a, b) => b.price - a.price);
      }

      return productList.reduce((acc, val, i) => {
        let idx = Math.floor(i / parseInt(this.perPage))
        let page = acc[idx] || (acc[idx] = [])
        page.push(val)

        return acc
      }, [])
    },
    computedPageCount() {
      return Math.ceil(this.productList.length / parseInt(this.perPage));
    }
  },
  methods: {
    async fetchProducts() {
      if (this.authStore.token !== null) {
        await this.productsStore.fetchProducts(this.authStore.token);
        this.productList = this.productsStore.products;
      }
    }
  },
  async created() {
    if (this.authStore.token === null) {
      const url = this.$route.path === '/' ? 'http://localhost:3000/' : this.$route.path;
      const fetchToken = await fetch(url + 'api/token');
      const token = await fetchToken.json();
      if (token && token.status && token.data.token) {
        this.authStore.setToken(token.data.token);
      }
    }

    if (this.productsStore.products.length === 0) {
      await this.fetchProducts();
      this.loading = false;
    }
  },
  watch: {
    perPage() {
      if (this.page > this.computedPageCount) {
        this.page = this.computedPageCount;
      }
    },
    page() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 500);
    }
  }
}
</script>
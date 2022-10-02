<template>
  <div class="product-card" :title="product.name" :class="layout">
    <img :src="imageSrc" :alt="product.name">
    <div class="body">
      <div class="name">{{ product.name }}</div>
      <div class="price">{{ numberFormat.format(product.price) }}</div>
      <div class="installment-price">
        <strong>Taksitli Fiyatı:</strong> 
        <span>3 x {{ numberFormat.format((product.price / 3)) }}</span>
      </div>
      <div class="actions">
        <input type="number" v-model="qty" min="1" :max="product.stock" />
        <div class="buttons">
          <button title="Sepete Ekle" @click="addToCart()"><i class="ti ti-shopping-cart-plus"></i></button>
          <button v-if="cart[product.id] !== undefined" title="Sepetten Çıkar" @click="removeFromCart()">
            <i class="ti ti-shopping-cart-x"></i>
          </button>
          <button title="Favorilere Ekle" :class="favorite[product.id] !== undefined ? 'active' : ''" @click="favorite[product.id] === undefined ? addToFavorite() : removeFromFavorite()">
            <i class="ti ti-heart"></i>
          </button>
          <button title="Karşılaştır"><i class="ti ti-arrows-shuffle-2"></i></button>
        </div>
        <a href="#">Ürünü İncele <i class="ti ti-arrow-narrow-right"></i></a>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapStores  } from 'pinia'
import { cartStore } from '~/store/cart'

export default {
  name: 'ProductWidget',
  data() {
    return {
      numberFormat: new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }),
      qty: 1,
      imageSrc: '',
    }
  },
  props: {
    product: {
      type: Object,
      required: true
    },
    layout: {
      type: String,
      enum: ['grid', 'list'],
      required: true
    }
  },
  async created() {
    this.cartStore = cartStore();
    await this.cartStore.fetchCart('bearerToken');

    if (this.cart[this.product.id] !== undefined) {
      this.qty = this.cart[this.product.id].qty;
    }

    this.imageSrc = this.getRandProductImageUrl();
  },
  computed: {
    ...mapState(cartStore, ['cart', 'favorite']),
  },
  methods: {
    getRandProductImageUrl() {
      const imageArr = [1,2,3];
      return '/img/products/' + imageArr[Math.floor(Math.random() * imageArr.length)] + '.jpg';
    },
    addToCart() {
      this.product.cartQty = this.qty;
      this.cartStore.addToCart(this.product.id, this.qty, this.product.price);
    },
    removeFromCart() {
      this.cartStore.removeFromCart(this.product.id);
    },
    addToFavorite() {
      this.cartStore.addToFavorite(this.product.id);
    },
    removeFromFavorite() {
      this.cartStore.removeFromFavorite(this.product.id);
    }
  }
}
</script>
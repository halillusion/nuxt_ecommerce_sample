<template>
  <div class="product-card skeleton" :class="layout">
    <div class="image"></div>
    <div class="body">
      <div class="name"></div>
      <div class="price"></div>
      <div class="installment-price">
        <strong></strong> 
        <span></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductWidgetskeleton',
  props: {
    layout: {
      type: String,
      enum: ['grid', 'list'],
      required: true
    }
  }
}
</script>
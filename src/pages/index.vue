<template>
<Breadcrumb :schema="schema"/>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="content-wrapper">
          <h1 class="page-title"><strong>Beyaz Eşya</strong> kategorisi içerisindeki ürünler listeleniyor</h1>
          <div class="product-list">
            <div class="row">
              <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                sdfsdf
              </div>
              <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                sdfsdf
              </div>
              <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                sdfsdf
              </div>
              <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                sdfsdf
              </div>
              <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                sdfsdf
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>
<script>
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
      ]
    }
  }
}
</script>
<template>
  <nav aria-label="breadcrumb" class="breadcrumb-bar">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <ol class="breadcrumb">
            <li v-for="(item, key) in schema" :key="key" class="breadcrumb-item" :class="(key+1) === schema.length ? 'active' : ''">
              <a v-if="(key+1) !== schema.length" :href="item.link">{{item.name}}</a>
              <strong v-else>{{item.name}}</strong>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Breadcrumb',
  props: {
    schema: {
      type: Array,
      required: true
    }
  }
}
</script>
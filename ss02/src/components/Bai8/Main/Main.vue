<template>
  <div class="main">
    <div class="cart-grid">
      <Cart v-for="index in 12" :key="index" />
    </div>
  </div>
</template>

<script>
import Cart from '../Cart/Cart.vue';

export default {
  name: "Main",
  components: {
    Cart
  }
}
</script>

<style scoped>
.main {
  flex-grow: 1;
  padding: 20px;
}

.cart-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}
</style>

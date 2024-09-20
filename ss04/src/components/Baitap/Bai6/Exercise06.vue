<template>
  <div>
    <input v-model.number="itemPrice" type="number" placeholder="Nhập giá trị" />


    <button @click="addToCart">Add to cart</button>

    
    <p>Giá trị sản phẩm hiện tại: {{ itemPrice }} VND</p>
    <p><strong>Tổng tiền trong giỏ hàng:</strong> {{ totalPrice }} VND</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
    // Khai báo biến để lưu trữ giá trị từ input
    const itemPrice = ref(0);

    // Khai báo biến để lưu trữ tổng tiền
    const total = ref(0);

    // Thuộc tính computed để tính tổng tiền
    const totalPrice = computed(() => total.value);

    // Hàm để thêm giá trị từ input vào tổng tiền
    const addToCart = () => {
      if (itemPrice.value > 0) {
        total.value += itemPrice.value;
      }
      itemPrice.value = 0; // Reset giá trị input sau khi thêm
    };

</script>

<style >

</style>

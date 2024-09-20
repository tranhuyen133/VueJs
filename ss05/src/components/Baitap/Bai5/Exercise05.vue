<template>
  <div>
    <h4>Bài5</h4>
    <p>Các số chẵn từ mảng:</p>
    <p>
      <!-- Sử dụng v-for để render các số chẵn -->
      <span v-for="(num, index) in evenNumbers" :key="index">{{ num }} </span>
    </p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
    // Tạo mảng các số nguyên
    const array = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    // Tính toán và trả về mảng các số chẵn
    const evenNumbers = computed(() => {
      return array.value.filter(num => num % 2 === 0);
    });
</script>

<style >

</style>

<template>
  <div>
    <h4>Bài6</h4>
    <p>Danh sách các số thỏa mãn điều kiện:</p>
    <p>
      <!-- Sử dụng v-for để render các số thỏa mãn điều kiện -->
      <span v-for="(num, index) in filteredNumbers" :key="index">{{ num  }} </span>
    </p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

    // Tạo mảng các số nguyên
    const array = ref([5, 12, 15, 22, 9, 18, 25, 30, 7, 33]);

    // Tính toán và trả về mảng các số thỏa mãn điều kiện (ví dụ: chia hết cho 3)
    const filteredNumbers = computed(() => {
      return array.value.filter(num => num % 3 === 0);
    });

</script>

<style >

</style>

<template>
  <div>
    <h4>Bài8</h4>
    <!-- Nút để sắp xếp mảng theo thứ tự tăng dần -->
    <button @click="sortAscending" :class="{ active: isAscending }">Tăng dần</button>
    
    <!-- Nút để sắp xếp mảng theo thứ tự giảm dần -->
    <button @click="sortDescending" :class="{ active: !isAscending }">Giảm dần</button>

    <!-- Hiển thị mảng các số nguyên -->
    <br/>
    <br/>
    <div>
      <span v-for="(num, index) in numbers" :key="index" class="number">{{ num }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

    // Mảng các số nguyên bất kỳ
    const numbers = ref([1,2,3,4,5,6,7,8,9]);

    // Biến để kiểm tra xem mảng đang được sắp xếp theo thứ tự nào
    const isAscending = ref(true);

    // Hàm sắp xếp mảng theo thứ tự tăng dần
    const sortAscending = () => {
      numbers.value.sort((a, b) => a - b);
      isAscending.value = true;
    };

    // Hàm sắp xếp mảng theo thứ tự giảm dần
    const sortDescending = () => {
      numbers.value.sort((a, b) => b - a);
      isAscending.value = false;
    };

</script>

<style scoped>
button {
  padding: 10px 20px;
  margin-right: 10px;
  border: 2px solid black;
  background-color: white;
  cursor: pointer;
  font-size: 16px;
}

button.active {
  background-color: rgb(39, 120, 120);
  color: rgb(245, 245, 245);
}

.number {
  display: inline-block;
  padding: 10px;
  font-size: 20px;
  border: 1px solid black;
  margin-right: 5px;
}
</style>

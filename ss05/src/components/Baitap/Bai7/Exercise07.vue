<template>
  <div>
    <h4>Bài7</h4>
    <!-- Tạo ba button với class được active dựa vào activeIndex -->
    <button 
      v-for="index in 3" 
      :key="index" 
      :class="{'active': activeIndex === index}" 
      @click="setActive(index)">
      Button {{ index }}
    </button>

    <!-- Hiển thị thông tin Button được nhấn -->
    <p>Khi nhấn Button {{ activeIndex }}</p>
  </div>
</template>
.
<script setup>
import { ref } from 'vue';
    // Biến activeIndex để lưu trữ button đang active, giá trị mặc định là 1
    const activeIndex = ref(1);

    // Hàm để cập nhật giá trị activeIndex khi nhấn button
    const setActive = (index) => {
      activeIndex.value = index;
    };

</script>

<style >
button.active {
  background-color: red;
  color: white;
 
}
</style>

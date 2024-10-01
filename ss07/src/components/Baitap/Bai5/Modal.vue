<template>
    <div v-if="isVisible" class="modal-overlay">
      <div class="modal">
        <div class="modal-header">
          <h3>{{ title }}</h3>
          <button class="close-btn" @click="closeModal">×</button>
        </div>
        <div class="modal-body">
          <!-- Sử dụng slot để chèn nội dung từ component cha -->
          <slot></slot>
        </div>
        <div class="modal-footer">
          <button @click="closeModal">Close</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Props để nhận tiêu đề từ component cha
  const props = defineProps({
    title: {
      type: String,
      required: true
    }
  });
  
  // Biến quản lý hiển thị modal
  const isVisible = ref(true);
  
  // Hàm đóng modal
  const closeModal = () => {
    isVisible.value = false;
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    width: 300px;
  }
  
  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .close-btn {
    border: none;
    background: transparent;
    font-size: 20px;
  }
  
  .modal-body {
    margin-top: 10px;
    margin-bottom: 20px;
  }
  
  .modal-footer {
    text-align: right;
  }
  </style>
  
<template>
    <div class="modal-backdrop">
      <div class="modal">
        <p>Bạn có chắc chắn muốn xóa sản phẩm này?</p>
        <button @click="$emit('confirm')">OK</button>
        <button @click="$emit('cancel')">Hủy</button>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal {
    background: white;
    padding: 20px;
    border-radius: 5px;
  }
  </style>
  
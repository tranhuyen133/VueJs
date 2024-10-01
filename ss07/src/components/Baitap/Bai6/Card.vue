<template>
    <div class="card">
      <div class="card-header">
 
        <slot name="header"></slot>
      </div>
      <div class="card-body">
     
        <slot name="body"></slot>
      </div>
      <div class="card-footer">
      
        <slot name="footer"></slot>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    max-width: 400px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .card-header {
    font-weight: bold;
    margin-bottom: 8px;
  }
  
  .card-body {
    margin-bottom: 16px;
  }
  
  .card-footer {
    text-align: right;
  }
  
  button {
    padding: 8px 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  
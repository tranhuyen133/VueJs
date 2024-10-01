<template>
    <div>
      <h1>Message Children Component</h1>
  
      <button @click="emitSendMessage">Send message</button>
    </div>
  </template>
  
  <script setup>

  const emitSendMessage = () => {
    emit('sendMessage');
  };
  </script>
  
  <style scoped>
  button {
    padding: 10px 20px;
    font-size: 16px;
    border: 1px solid black;
    background-color: white;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #f0f0f0;
  }
  </style>
  
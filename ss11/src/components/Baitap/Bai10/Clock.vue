<template>
    <div>
      <h1>Bài10</h1>
      <b>Thời gian hiện tại : {{ time }}</b>
    </div>
  </template>
  
  <script setup>
  import { onBeforeUnmount, onMounted, ref } from "vue";
  let timerId;
  const formatDate = (date) => {
    const today = new Date(date);
    // lấy ra giờ 
    const hours = today.getHours().toString().padStart(2, 0);
    // lấy ra phút
    const minutes = today.getMinutes().toString().padStart(2, 0);
    // lấy ra giây
    const seconds = today.getSeconds().toString().padStart(2, 0);
    // format thời gian
    return `${hours}:${minutes}:${seconds}`;
  };
  
  const time = ref(formatDate(new Date()));
  onMounted(() => {
    timerId = setInterval(() => {
      time.value = formatDate(new Date());
    }, 1000);
  });
  onBeforeUnmount(() => {
    clearInterval(timerId);
  });
  </script>
  
  <style></style>
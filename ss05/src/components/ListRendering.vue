<template>
  <div>
    <h3>List Rendering</h3>

    <ul>
      <li v-for="user in listenUser" :key="user.id">
        <span>Id: {{ user.id }}</span> - 
        <span>Name: {{ user.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
const listenUser = [
  {
    id: 1,
    name: "Nguyễn Văn A",
  },
  {
    id: 2,
    name: "Nguyễn Văn B",
  },
  {
    id: 3,
    name: "Nguyễn Văn C",
  },
];
</script>

<style>
</style>

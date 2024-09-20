<script setup>
import { reactive } from "vue";

const userInfo = reactive ( {
    id:1,
    userName:"Nguyễn Văn A"
});

const handleIncreased =() =>{
    userInfo.id++;
}
</script>

<template>
  <div>
    <h1>ReactiveDemo</h1>
    <p>ID:{{ userInfo.id}}</p>
    <p>UserName :{{userInfo.userName}}</p>
    <button @click="handleIncreased">Increased ID</button>
  </div>
</template>

<style>

</style>
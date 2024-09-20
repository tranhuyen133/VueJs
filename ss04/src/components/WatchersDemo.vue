<template>
<div>
<h1>Watchers</h1>
  <button @click="handleCount">Count</button>
</div>
  
</template>

<script setup>
import {ref, watch} from "vue";

const count = ref(0);
 const handleCount =() => {
    count.value++;
 };

watch(count,(newValue, oldValue)=>{
    //Lắng nghe sự thay đổi của count
    console.log(` Old Value:${oldValue} - NewValue:${newValue} `);
    
})

</script>

<style>

</style>
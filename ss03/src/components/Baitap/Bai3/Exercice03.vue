<template>
<div>
    <h1>Bai3</h1>
<div>
    
    <input type="text" v-bind:disabled="isDisabled" >Cho phép nhập</div>
<div>
    <input type="text" v-bind:disable="isDisable">Cho phép nhập </div>
</div>
  
</template>

<script setup>
const isDisabled = false;
const isDisable = true ;
</script>

<style>

</style>
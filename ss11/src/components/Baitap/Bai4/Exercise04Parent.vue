<template>
  <div>
    <h1>Exercise03 Parent Component</h1>
    <p>Age: {{ age }}</p>
    <button @click="increaseAge">Increase age</button>
    <Exercise04Children :age="age" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Exercise04Children from './Exercise04Children.vue';

const age = ref(1);

const increaseAge = () => {
  age.value++;
};
</script>

<style>
</style>

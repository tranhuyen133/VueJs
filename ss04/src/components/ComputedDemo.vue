<script setup>
import { computed, ref } from "vue";

const index = ref(0);
const caculateFibonacy = computed(() => {
  const fib = (n) => {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
  };

  return fib(index.value);
});
const handleIncrease = () => {
  index.value++;
};
</script>

<template>
  <div>
    <h1>Computed Demo</h1>
    <p>
      Tai vi tri thu : {{ index }} thi so Fib :{{ caculateFibonacy }}
    </p>
    <button @click="handleIncrease">Increase index</button>
  </div>
</template>

<style></style>
<template>
  <div>
    <h1>Children Component</h1>
    <!-- lay gia tri ttu props roi render du lieu -->
    <h3>Child Component received userName: {{ userNameProps }}</h3>
    <p>Child age : {{ ChildAgeProps }}</p>
    <p>Child userInfo : {{ userInfoProps }}</p>    
  </div>
</template>

<script setup>
// Buoc 1 : Dinh nghia props ben trong component con thong qua phuong thuc
const { userNameProps, ChildAgeProps,userInfoProps } = defineProps([
  "userNameProps",
  "ChildAgeProps",
  "userInfoProps",
]);

</script>

<style></style>
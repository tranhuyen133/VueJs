<template>
    <div>
      <h1>Parent Component</h1>
      <p>User name of parent component : {{userName}}</p>
      <p>_______________________________________________</p>
      <children-component :userNameProps="userName" :ChildAgeProps="age" :userInfoProps="userInfo"></children-component>
      <!-- Su dung component con  -->
      <!-- Buoc 2 trong cokponent cha , goi prop dc khai bao ben con va truyen gia tri cho no -->
    </div>
  </template>
  
  <script setup>
  
  import ChildrenComponent from "./ChildrenComponent.vue";
  const userName = 'Nguyen van A';
  // tao bien tuoi truyen tu parent xuong con 
  const age = 19
  const userInfo = {
      id:1,
      name: "Nguyen van B",
      age: 20
  }

  </script>
  
  <style></style>
<template>
<!-- <img :src ="ulr" alt=""/> -->
<div>
  <img v-bind:src="url" alt="" />

  <button v-bind:disabled="isDisabled" >Click me</button>

  <input type="text" v-bind:disabled="isEnter">

  <div v-bind="divAttributes">Container</div>
  <!-- Binding 2 thuộc tính id:"paragraph", area="paragraph" -->
  <p v-bind="paragraphAttributes">Nội dung </p>
  <!-- V-bind cho class và style -->
  <div v-bind:class="{texRed : isTexRed}">Hello Word</div>

</div>


</template>

<script setup>
const url=
"https://tse4.mm.bing.net/th?id=OIP.flFnEYwJTrlz18RUTAIUxwHaHa&pid=Api&P=0&h=220";

const disabled = true ;

const isEnter =true;
const divAttributes={
id:"container-id",
class:"container-class",
};
const paragraphAttributes={
  id:"paragraph-id",
  class:"paragraph-class",
};
const isTexRed = true;
</script>

<style>
.texRed{
  color: red;
}
</style>
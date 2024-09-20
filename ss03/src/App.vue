<template>
<div>
<BindingProperty/>
<EventComponent/>
<Exercice01/>
<Exercice02/>
<Exercice03/>
<Exercice04/>
<Exercice05/>
</div>

</template>

<script setup>
  import EventComponent from "./components/EventComponent.vue";
  import BindingProperty from "./components/BindingProperty.vue"
  import Exercice01  from "./components/Baitap/Bai1/Exercice01.vue" 
  import Exercice02 from "./components/Baitap/Bai2/Exercice02.vue"
  import Exercice03 from "./components/Baitap/Bai3/Exercice03.vue"
  import Exercice04 from "./components/Baitap/Bai4/Exercise04.vue"
  import Exercice05 from "./components/Baitap/Bai5/Exercise05.vue"
</script>

<style>

</style>
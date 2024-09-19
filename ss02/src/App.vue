<script setup>
import ListCourse from './components/Bai1/ListCourse.vue'
import ColorBox from './components/Bai2/ColorBox.vue'
import Card from './components/Bai3/Card.vue'
import Calculation from './components/Bai4/Calculation.vue'
import UserInfo from './components/Bai5/UserInfo.vue'
import FormatName from './components/Bai6/FormatName.vue'
import AdminIndex from './components/Bai7/AdminIndex.vue'
import UserLayout from './components/Bai8/UserLayout.vue'

</script>

<template>
  <div> 

      <ListCourse />
      <ColorBox /> 
      <Card/>
      <Calculation/>
      <UserInfo/>
      <FormatName/>
      <AdminIndex/>
      <UserLayout/>

    
  
    
  </div> 
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

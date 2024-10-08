<template>
  <div>
  <h1>List Product</h1>
  <input type="text" v-model="keySearch">
  <input type="Number" v-model="priceValue">
  <button @click="handleSearch">Search</button>

  <h1>ProductName  {{ result.productName }}</h1>
  <h1>Price : {{ result.Price }}</h1>
  </div>
  
</template>

<script setup>
import {  computed, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter(); //chuyen trang
const route = useRoute(); //lay du lieu tren URL

// console.log(route.params);

const queryParam = reactive({
  productName: "",
  price: 0,

});

//Lay gia tri cua URL va cap nhat chp reactive queryParam
const result = computed(()=>{
  return{
    productName: route.query.productName,
    price: route.query.price,
  }
});

const keySearch = ref("");
const priceValue = ref ("");

const handleSearch =() => {
  // router.push(`/listproduct?search=${keySearch.value}`);
  // console.log(keySearch.value)
  router.push({
    name: "ListProduct",
    query : { productName: keySearch.value},
  });
}
</script>

<style>

</style>
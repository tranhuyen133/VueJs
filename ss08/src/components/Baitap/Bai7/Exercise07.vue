<template>
    <div>
      <h2>Thêm mới sản phẩm</h2>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="productCode">Mã sản phẩm : </label>
          <input v-model="product.productCode" value ="productCode" type="text" placeholder="Nhập mã sản phẩm" />
        </div>
  
        <div>
          <label for="productName">Tên sản phẩm: </label>
          <input v-model="product.productName" value ="productName" type="text" placeholder="Nhập tên sản phẩm" />
        </div>
  
        <div>
          <label for="price">Giá  </label>
          <input v-model="product.price" value ="price" type="number" placeholder="Nhập giá sản phẩm" />
        </div>
  
        <div>
          <label for="quantity">Số lượng </label>
          <input v-model="product.quantity" value ="quantity" type="number" placeholder="Nhập số lượng" />
        </div>
  
        <button type="submit">Thêm mới</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { reactive } from 'vue';

  const product = reactive({
    productCode: "",
    productName: "",
    price: 0,
    quantity: 0
  })
  

  const handleSubmit = () => {
    console.log("Dữ liệu sản phẩm:", product)
  }
  </script>
  
  <style scoped>

  form {
    display: flex;
    flex-direction: column;
    width: 300px;
  }
  
  label {
    margin-top: 10px;
  }
  
  input {
    margin-bottom: 10px;
    padding: 5px;
  }
  
  button {
    background-color: rgb(140, 209, 241);
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: rgb(64, 64, 82);
  }
  </style>
  
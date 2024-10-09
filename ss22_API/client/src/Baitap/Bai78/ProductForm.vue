<template>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Tên sản phẩm</label>
        <input v-model="product.name" id="name" type="text" required />
      </div>
      <div>
        <label for="price">Giá</label>
        <input v-model="product.price" id="price" type="number" required />
      </div>
      <div>
        <label for="quantity">Số lượng (kg)</label>
        <input v-model="product.quantity" id="quantity" type="number" required />
      </div>
      <div>
        <label for="image">URL Hình ảnh</label>
        <input v-model="product.image" id="image" type="text" required />
      </div>
      <button type="submit">{{ isEdit ? 'Cập nhật' : 'Thêm mới' }}</button>
    </form>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  
  const product = ref({
    name: '',
    price: '',
    quantity: '',
    image: ''
  });
  
  const isEdit = ref(false);
  const router = useRouter();
  
  const submitForm = async () => {
    const method = isEdit.value ? 'PUT' : 'POST';
    const url = isEdit.value
      ? `http://localhost:8080/productlist/${product.value.id}`
      : "http://localhost:8080/productlist";
      
    await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product.value)
    });
    router.push("/product-list");
  };
  </script>
  
  <style scoped>
  form div {
    margin-bottom: 10px;
  }
  </style>
  
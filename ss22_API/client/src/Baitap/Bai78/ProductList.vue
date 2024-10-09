<template>
    <div>
      <button @click="openForm">Thêm mới sản phẩm</button>
  
      <table class="product-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Tên sản phẩm</th>
            <th>Hình ảnh</th>
            <th>Giá</th>
            <th>Số lượng (kg)</th>
            <th>Ngày thêm</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in products" :key="product.id">
            <td>{{ index + 1 }}</td>
            <td>{{ product.name }}</td>
            <td>
              <img :src="product.image" alt="Hình ảnh sản phẩm" v-if="product.image" />
            </td>
            <td>{{ product.price }} đ</td>
            <td>{{ product.quantity }}</td>
            <td>{{ product.dateAdded }}</td>
            <td>
              <button @click="editProduct(product)">Sửa</button>
              <button @click="confirmDelete(product.id)">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <!-- Modal xác nhận xóa -->
      <confirm-modal v-if="showDeleteModal" @confirm="deleteProduct" @cancel="closeModal" />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import ConfirmModal from "./ConfirmModal.vue"; 
  
  const products = ref([]);
  const showDeleteModal = ref(false);
  const productToDelete = ref(null);
  
  const loadProducts = async () => {
    const response = await fetch("http://localhost:8080/productlist");
    products.value = await response.json();
  };
  
  const confirmDelete = (id) => {
    showDeleteModal.value = true;
    productToDelete.value = id;
  };
  
  const deleteProduct = async () => {
    if (productToDelete.value) {
      await fetch(`http://localhost:8080/productlist/${productToDelete.value}`, {
        method: "DELETE",
      });
      await loadProducts(); // Tải lại danh sách sau khi xóa
      showDeleteModal.value = false;
    }
  };
  
  const closeModal = () => {
    showDeleteModal.value = false;
  };
  
  onMounted(() => {
    loadProducts();
  });
  </script>
  
  <style scoped>
  .product-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .product-table th, .product-table td {
    padding: 10px;
    border: 1px solid #ccc;
  }
  
  .product-table img {
    width: 50px;
    height: 50px;
    object-fit: cover;
  }
  
  button {
    margin-right: 10px;
  }
  </style>
  
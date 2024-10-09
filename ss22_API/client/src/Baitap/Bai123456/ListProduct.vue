<template>
    <div>
      <h1>List of Products</h1>
  
      <!-- Form để nhập thông tin sản phẩm -->
      <form @submit.prevent="createOrUpdateProduct">
        <div>
          <label for="name">Name:</label>
          <input v-model="productInfo.name" type="text" id="name" required />
        </div>
        <div>
          <label for="price">Price:</label>
          <input v-model="productInfo.price" type="number" id="price" required />
        </div>
        <div>
          <label for="quantity">Quantity:</label>
          <input v-model="productInfo.quantity" type="number" id="quantity" required />
        </div>
        <div>
          <label for="image">Image URL:</label>
          <input v-model="productInfo.image" type="text" id="image" required />
        </div>
        <button type="submit">{{ isUpdateMode ? "Update Product" : "Create Product" }}</button>
      </form>
  
      <!-- Hiển thị danh sách sản phẩm -->
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody v-for="product in products" :key="product.id">
          <tr>
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.quantity }}</td>
            <td>
              <button @click="editProduct(product)">Edit</button>
              <button @click="removeProductById(product.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <div v-if="isShowLoading">Loading....</div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  
  // Biến lưu trữ danh sách sản phẩm
  const products = ref([]);
  // Biến để hiển thị trạng thái loading
  const isShowLoading = ref(false);
  // Biến để lưu trữ thông tin sản phẩm (cho thêm mới hoặc cập nhật)
  const productInfo = ref({
    id: null,
    name: "",
    price: 0,
    quantity: 0,
    image: ""
  });
  // Biến để kiểm tra xem đang ở chế độ cập nhật hay tạo mới
  const isUpdateMode = ref(false);
  
  // Hàm load danh sách sản phẩm từ API
  const loadProducts = async () => {
    try {
      isShowLoading.value = true;
      const response = await fetch("http://localhost:8080/listproduct");
      const data = await response.json();
      products.value = data;
    } catch (error) {
      console.error("Lỗi khi tải sản phẩm:", error);
    } finally {
      isShowLoading.value = false;
    }
  };
  
  // Hàm để thêm mới hoặc cập nhật sản phẩm
  const createOrUpdateProduct = async () => {
    try {
      let url = "http://localhost:8080/listproduct";
      let method = "POST";
  
      if (isUpdateMode.value && productInfo.value.id) {
        url += `/${productInfo.value.id}`;
        method = "PUT";
      }
  
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productInfo.value),
      });
  
      const data = await response.json();
      console.log(isUpdateMode.value ? "Sản phẩm đã cập nhật:" : "Sản phẩm vừa tạo:", data);
  
      // Sau khi thêm/cập nhật sản phẩm, tải lại danh sách sản phẩm
      loadProducts();
  
      // Reset form
      productInfo.value = {
        id: null,
        name: "",
        price: 0,
        quantity: 0,
        image: ""
      };
      isUpdateMode.value = false;
    } catch (error) {
      console.error("Lỗi khi thêm/cập nhật sản phẩm:", error);
    }
  };
  
  // Hàm để edit sản phẩm (chuyển thông tin sản phẩm vào form để cập nhật)
  const editProduct = (product) => {
    productInfo.value = { ...product };
    isUpdateMode.value = true;
  };
  
  // Hàm để xóa sản phẩm theo id
  const removeProductById = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/listproduct/${id}`, {
        method: "DELETE",
      });
  
      if (response.status === 200) {
        console.log(`Đã xóa sản phẩm có id: ${id}`);
        // Sau khi xóa, tải lại danh sách sản phẩm
        loadProducts();
      } else {
        console.error("Không thể xóa sản phẩm:", response.statusText);
      }
    } catch (error) {
      console.error("Lỗi khi xóa sản phẩm:", error);
    }
  };
  
  // Gọi hàm loadProducts khi component được mounted
  onMounted(() => {
    loadProducts();
  });
  </script>
  
  <style >
  
  </style>
  
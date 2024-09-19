<template>

  <div class="card">
    <p>Bai3 </p>
    <div class="card-image">
      <p>Image</p>
    </div>
    <div class="card-body">
      <h3>Title</h3>
      <button class="card-button">Add to card</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style scoped>
.card {
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  text-align: center;
  font-family: Arial, sans-serif;
}

.card-image {
  background-color: #999;
  color: white;
  padding: 40px 0;
}

.card-body {
  padding: 10px;
}

h3 {
  margin: 10px 0;
  font-size: 18px;
}

.card-button {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
}

.card-button:hover {
  background-color: #e0e0e0;
}
</style>

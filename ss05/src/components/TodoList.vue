<template>
<div>
  <h3>TodoList</h3>
<div class="container">
    <div class="todo">
      <h3 class="heading">Danh sách công việc</h3>
      <header class="header">
        <input v-model="inputValue" type="text" class="input" />
        <button @click="handleAddJob" class="button button-add">Add job</button>
      </header>

      

      <ul class="list-item">
        <li class="item">
          <div class="left">
            <input type="checkbox" id="" />
            <label for="">Quét nhà</label>
          </div>
          <div class="right">
            <button class="button button-delete">Delete</button>
          </div>
        </li>
      </ul>

      <footer class="footer">
        <p>Công việc hoàn thành:</p>
        <p><b> 1 </b> / <b> 10 </b></p>
      </footer>
    </div>
  </div>
</div>
  
</template>

<script setup></script>
import {ref}  from "vue"

const handleAddJob = () => {
  // B1 
}

<style scoped>
.container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.heading {
  text-align: center;
  font-size: 24px;
  padding-bottom: 24px;
}

.todo {
  width: 600px;
  border: 1px solid #dadada;
  padding: 20px 24px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

.header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 12px;
}

.input {
  height: 36px;
  border: 1px solid #dadada;
  outline: none;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  flex: 1;
  padding: 0 16px;
}

.button {
  height: 36px;
  border: 1px solid transparent;
  color: #fff;
  outline: none;
  border-radius: 4px;
  padding: 0 16px;
  cursor: pointer;
}

.button-add {
  background-color: blue;
}

.button-delete {
  background-color: red;
}

.list-item {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
}

.item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

input[type="checkbox"] {
  height: 18px;
  width: 18px;
}

.left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.right {
}

.footer {
  display: flex;
  gap: 8px;
}
</style>
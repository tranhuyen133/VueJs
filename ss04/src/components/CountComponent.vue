<script setup>
import { ref } from "vue";
let count = ref(0);
//Khi dùng ref :
//Để cập nhật lại giá trị thì bắt buộc phải truy cập vào value
//Khi sử dụng thì không cần dùng value

const randomNumber = ref(1);
const pushNumber = ref();

const handleCount = () => {
  //cập nhật lại giá trị của count
  count.value++;
  count.value += 5;
};
const handleRandom = () => {
  //Tạo số ngẫu nhiên từ 1 đến 10
  const ramdom = Math.ceil(Math.random() * 10);
  //gán lại giá trị cho biến Random Number
  randomNumber.value = ramdom;
};
const handlePushRandom = () => {
    const push = Math.ceil(Math.random() *10 );

//Push số random vào mảng và cập nhật lại giá trị cho mảng numbers
//Cách 1 : numbers.value.push(ramdom);
//Cách 2 :
numbers.value=[...numbers.value, random];
};
</script>

<template>
  <div>
    <h1> CountComponent </h1>
    <p>Count: {{ count }}</p>
    <button @click="handleCount">Count</button>
    <p>Random: {{ randomNumber }}</p>
    <button @click="handleRandom">Random</button>
     <p>Push: {{ pushNumber }}</p>
     <button @click="handlePushRandom">Push</button>
  </div>
</template>

<style></style>

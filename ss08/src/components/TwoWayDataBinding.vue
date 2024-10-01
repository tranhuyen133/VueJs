<template>
  <div>
    <form @submit.prevent="handleSubmit">
        <h3>TwowayDataBinding</h3>
    <h2>UserName : {{ userInfo.userName }}</h2>
    <h2>DataOfBirth : {{ userInfo.dateOfBirth }}</h2>
    <h2>Gender : {{ userInfo.gender }}</h2>
    <h2>Hobbies : {{ userInfo.hobbies }}</h2>
    <h2>Thêm người dùng:</h2>
    <div> Họ và tên: <input v-model="userInfo.userName" type="text" placeholder="Nhập tên"></div>
    <div>Ngày sinh: <input v-model="userInfo.dateOfBirth" type="date"></div>
    <div>Giới tính </div>
    <div>  <input name="gender" v-model="userInfo.gender" type="radio" value="0">Nam
        <input name="gender" v-model="userInfo.gender" type="radio" value="1" />Nữ
         <input name="gender" v-model="userInfo.gender" type="radio" value="2"/> Khác
     
    </div>
    <div>Sở thích</div>
    <div>
        Chơi game <input value="game" v-model="userInfo.hobbies" type="checkbox">
        Code <input value="code" v-model="userInfo.hobbies" type="checkbox">
        Bơi lội <input value="swim" v-model="userInfo.hobbies" type="checkbox">
        Bóng chuyền<input value="volleyball" v-model="userInfo.hobbies" type="checkbox">
    </div>
    <button>Thêm</button>
    </form>
    
  </div>

</template>

<script setup>
import {reactive} from "vue";


const userInfo = reactive({
    userName: " ",
    dateOfBirth : "",
    gender:"",
    hobbies:"",
});

const handleSubmit = (e) => {
    //Ngăn chặn sự kiện load lại trang
    // e.preventDefaul();
    const user = {
        userName: userName.value,
        dateOfBirth : dateOfBirth.value,
        gender:gender.value,
        hobbies : hobbies.value

    };
    console.log("Submited",user);
    
};
</script>

<style>

</style>


<script setup>

const handleClick=()=>{
    console.log("Clicked");
};

const handleDelete=(id)=>{
    console.log("Id: ",id);
    
};
const handleGetEvent=(event)=>{
    console.log("Event: ",event);
    
}
const handleSubmit= () =>{
    alert ("Submited")
}
const handleCloseForm=() => {
    alert("Đóng Form")
}
</script>

<template>
<div>
        <button v-on:click="handleClick">Click me</button>
        <button v-on:click="handleDelete(1)">Delete</button>
        <button @click="handleGetEvent"> Event Info</button>

        <form @submit.prevent="handleSubmit">
        <button type="submit">Submit</button>
        </form>

        <button @keydown.esc="handleCloseForm">Đóng Form</button>
</div>

</template>

<style></style>
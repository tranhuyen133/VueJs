<template>
<div>
    <h1>Admin Index Page</h1>
  <nav>
    <router-link active-class="active" to="/admin" >Dashboard</router-link>
    <router-link active-class="active" to="/admin/manager-user">Manager-User</router-link>
    <router-link active-class="active" to="/admin/manager-product">Manager-Product</router-link>
  </nav>
</div>
  
</template>

<script>
export default {

}
</script>

<style>
.active{
    background-color: red;
}
</style>
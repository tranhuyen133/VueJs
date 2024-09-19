<template>
<div>
    <h1>BAI8</h1>
    <div class="user-layout">
    <Header />
    <Navbar />
    <div class="content-wrapper">
      <Menu />
      <Main />
      <Article />

    </div>
  </div>
</div>
  
</template>

<script>
import Header from './Header/Header.vue';
import Menu from './Menu/Menu.vue';
import Navbar from './Navbar/Navbar.vue';
import Main from './Main/Main.vue';
import Article from './Article/Article.vue';


export default {
  name: "UserLayout",
  components: {
    Header,
    Menu,
    Navbar,
    Main,
    Article
  }
}
</script>

<style scoped>
.user-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content-wrapper {
  display: flex;
  flex-grow: 1;
}
</style>

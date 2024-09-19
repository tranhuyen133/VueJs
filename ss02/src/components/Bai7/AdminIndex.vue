<template>
  <div class="admin-layout">
    <h1>Bai7</h1>
    <Header />
    <div class="content-wrapper">
      <Menu />
      <Main />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './Header/Header.vue';
import Menu from './Menu/Menu.vue';
import Main from './Main/Main.vue';
import Footer from './Footer/Footer.vue';

export default {
  name: "AdminIndex",
  components: {
    Header,
    Menu,
    Main,
    Footer
  }
}
</script>

<style scoped>
.admin-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content-wrapper {
  display: flex;
  flex-grow: 1;
}

footer {
  margin-top: auto;
}
</style>

<template>
  <div id="app">

    <Footer />
  </div>
</template>

<script>

import Footer from '../components/Footer.vue'


export default {
  name: 'Home',
  components: {
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

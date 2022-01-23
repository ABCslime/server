<template>
  <div id="app">

    <div id="login">
      <div></div>
      <div>
        <form ref="form">
        <a>username:</a>
        <input name="username">
        <a>username:</a>
        <input name="password">
        <a href="#" v-on:click="submit">SUBMIT</a>
      </form>
      </div>
      <div></div>

    </div>
    <Footer />
  </div>
</template>

<script>
import Auth from "../services/auth.service.js"
import Footer from "@/components/Footer";
export default {
  name: "Login",
  components: {
    Footer
  },
  methods : {
    submit : function(){
      Auth.login(this.target.elements.username.value,this.target.elements.password.value)
    }
  }
}
</script>


<style scoped>
#login{
  display: grid;
  grid-template-columns: 25% 50% 25%;
  border-top: 5px solid #2c3e50;
  background: aquamarine;
}
</style>

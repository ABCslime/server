<template>
  <div id="app">

    <router-view :key="this.$route.query.sch || this.$route.query.sortBy || this.$route.query.sortDirection" />

  </div>
</template>

<script>




export default {
  name: 'App',

  data() {
    return {

    }
  },
  methods: {


  },



  mounted(){
    this.$store.dispatch('auth/refresh');



  }



}



</script>
<style lang="scss">

</style>


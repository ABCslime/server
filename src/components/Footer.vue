<template>

  <div id="footer">
    <div id="l_footer">
      <p>
        this is multi use server
      </p>
      <h3>Author:</h3>
      <a>Anej Batagelj</a>
    </div>
    <div id="r_footer">
      <h3>Main Links</h3>
      <ul>
        <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
        <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
        <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
        <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
#footer{
  display: grid;
  grid-template-columns: 50% 50%;
  border-top: 5px solid #2c3e50;
  background: aquamarine;
}

</style>

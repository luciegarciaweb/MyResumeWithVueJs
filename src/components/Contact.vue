<template>
  <div class="contact">
    <h1>{{ msg }}</h1>
    <p> luciegarciaweb@gmail.com </p> 
    <p> Tel: 06.51.13.84.40 </p> 
    <p> Montpellier </p> 
    <p>

      <a href="https://github.com/luciegarciaweb" target="_blank" rel="noopener"><img alt="Vue logo" src="./../assets/github.jpg" width=65 height=40> </a>.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 90px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #1a1d66;
}
</style>

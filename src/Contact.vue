<template>
  <div id="contact">
    <img alt="Vue logo" src="./assets/moi.jpg" width=200 height=200>
    <Contact msg="Contact"/>
  </div>
</template>

<script>
import Contact from './components/Contact.vue'

export default {
  name: 'contact',
  components: {
    Contact
  }
}
</script>

<style>
#contact {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 90px;
}
</style>

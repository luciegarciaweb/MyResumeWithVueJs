<template>
  <div id="experience" class="container">
    <Experience msg="Expérience"/>
    <p>
      <b-btn v-b-toggle.collapse1 variant="warning">Toggle Collapse</b-btn>
    </p>
  </div>
</template>

<script>
import Experience from './components/Experience.vue'

export default {
  name: 'experience',
  components: {
    Experience
  }
}
</script>

<style>
#experience {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 90px;
}
</style>

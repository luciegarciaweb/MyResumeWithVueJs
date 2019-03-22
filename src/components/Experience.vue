<template>
  <div class="experience">
    <b-img thumbnail fluid src="mainProps" rounded="0" alt="Not rounded image" />
    <b-container fluid>

    <b-row class="text-center">
      <b-col md="4" class="py-3">
        <h1>{{ msg }}</h1>
      <p> luciegarciaweb@gmail.com </p> 
      <p> Tel: 06.51.13.84.40 </p> 
      <p> Montpellier </p> 
      <p>

        <a href="https://github.com/luciegarciaweb" target="_blank" rel="noopener"><img alt="Vue logo" src="./../assets/github.jpg" width=65 height=40> </a>.
      </p>
      </b-col>

      <b-col md="8" class="py-3">
        <b-button v-b-popover.hover.right="'Popover!'" variant="primary">Right</b-button>
      </b-col>
  
    </b-row>
  </b-container>
    <p>
      {{ count }}
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>
</template>



<script>
export default {
  name: 'Experience',
  props: {
    msg: String
  },
 
  name: 'Counter',
  data() {
    return {
      // Initialized to zero to begin
      count: 0,
    }
  },
  methods: {
    increment() {
      this.count += 1;
    },
    decrement() {
      this.count -= 1;
    }
  },

  data() {
    return {
      mainProps: { blank: true, blankColor: '#ooo', width: 75, height: 75, class: 'm1' }
    }
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

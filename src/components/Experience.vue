<template>
  <div class="experience">
    <h1>{{ msg }}</h1>
    <ul id="example-1">
      <li v-for="item in items">
        {{ item.message }}
      </li>
    </ul>
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

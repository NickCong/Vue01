<template>
  <div class="about">
     <button v-on:click='btnclick'>{{ btnname }}</button>
  </div>
</template>

<script>
export default {
  name: 'search',
  methods: {
    btnclick: function () {
      alert('Hello')
    }
  },
  data: function () {
    return {
      btnname: 'Click Me'
    }
  }
  }
</script>

<style>
.about {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div class="recruit">
     <button v-on:click='btnclick'>{{ btnname }}</button>
  </div>
</template>

<script>

export default {
  name: 'recruit',
  methods: {
    btnclick: function () {
      alert('Hello recruit')
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
.recruit {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>你好</p>
    <Hello />
    <Jack />
  </div>
</template>


<script>
  import Hexon from './components/Hexon'
  export default {
    components: {
      "Hexon": Hexon,
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

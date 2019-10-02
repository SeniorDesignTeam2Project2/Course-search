<template>
  <div id="app">
    <router-view/>
    <router-view name="content"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html,
body {
  background: white;
  margin: 0;
}

body {
  font-family: Verdana, Geneva, sans-serif;
  font-size: 100%;
  width: 70%;
  margin-right: auto;
  margin-left: auto;
  padding: 0;
  background: white;
  line-height: 1.8;
}

@media screen and (max-width: 1024px) {
  body {
    width: 100%;
  }
}

</style>

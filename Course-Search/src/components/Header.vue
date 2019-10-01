<template>
    <div class="header">
      <div class="banner">Class search</div>

      <div id="csunlogo_container">
        <img src="../assets/ECS Horizontal 186+black.jpg" alt="CSUN" />
      </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
.banner {
  background-color: rgb(208, 13, 45);
  padding: 0.5% 0.4em;
  font-size: 150%;
  color: white;
}

#csunlogo_container {
  padding: 5% 10% 0;
}

#csunlogo_container img {
  display: inline-block;
  height: auto;
  max-width: 100%;
  padding-bottom: 5%;
  border-bottom: 2px solid rgb(231, 228, 228);
}
</style>


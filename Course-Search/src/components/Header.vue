<template>
<html lang="en">
  <head>
    <title>Course search</title>
    <meta charset="utf-8" />

    <!-- import the webpage's stylesheet -->
    <link href="css/styles.css" rel="stylesheet" type="text/css" />

    <!-- import the webpage's javascript file -->
    <!-- <script src="/script.js" defer></script> -->
  </head>
  <body>
    <header role="header">
      <div class="banner">Class search</div>

      <div id="csunlogo_container">
        <img src="assets/ECS Horizontal 186+black.jpg" alt="CSUN" />
      </div>
    </header>
  </body>
</html>
</template>

<style lang="scss">
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

.banner {
  background-color: rgb(208, 13, 45);
  padding: 0.5% 0.4em;
  font-size: 150%;
  color: white;
}

#csunlogo_container {
  padding: 5% 10%;
}

#csunlogo_container img {
  display: inline-block;
  height: auto;
  max-width: 100%;
  padding-bottom: 5%;
  border-bottom: 2px solid rgb(231, 228, 228);
}
</style>


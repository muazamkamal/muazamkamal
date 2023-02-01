<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
/* @import url("https://fonts.googleapis.com/css?family=Roboto+Condensed"); */
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

html {
  margin: 0;
  padding: 0;

  height: 100vh;
  width: 100%;

  background-color: rgb(14, 14, 14, 0.95);
  color: rgb(253, 253, 253);
}

body {
  margin: 0;
  height: 100%;
}

a,
a:visited {
  color: inherit;
  text-decoration: none;
}

a:hover,
a:active {
  text-decoration: none;
  color: rgb(14, 124, 89);
}

#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  letter-spacing: 5px;
  line-height: 2em;
  height: 100%;
}
</style>

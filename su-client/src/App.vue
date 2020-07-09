<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
    <router-view/>
  </div>
</template>

<style>
    body, html {
        height: 100%;
        margin: 0;
        background-color: #d7c9d1;;
    }

    .homepage {

        position: relative;
        height: 100vh !important;
        object-fit: contain;
        top: 50%;
        transform: translateY(-50%);

    }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  background-color: #d7c9d1;;
}
</style>

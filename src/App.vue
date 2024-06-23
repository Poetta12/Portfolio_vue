<template>
  <div id="app">
    <HeaderPage />
    <router-view />
  </div>
</template>

<script setup>
import HeaderPage from './components/HeaderPage.vue'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

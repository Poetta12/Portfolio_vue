<template>
  <div id="app">
    <HeaderPage />

    <router-view />
  </div>
</template>

<script setup>
import HeaderPage from './components/HeaderPage.vue'
import '@/assets/css/main.css' // Assurez-vous d'importer le bon chemin
import '@/assets/Icomoon/style.css'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

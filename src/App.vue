<template>
  <div id="app-container">
    <HeaderPage />
    <div id="app-body">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import HeaderPage from './components/HeaderPage.vue'
import '@/assets/css/main.css' // Assurez-vous d'importer le bon chemin
import '@/assets/Icomoon/style.css'
</script>

<style>
#app-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app-body {
  width: 60%;
  margin: auto;
  background-color: #333;
  box-shadow: 0 0 80px 100px #333;
}

@media (max-width: 768px) {
  #app-body {
    width: 100%;
  }
}
</style>

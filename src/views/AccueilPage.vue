<template>
  <div id="accueuil-intro">
    <h1>Bienvenue chez <span>PoettaTech</span></h1>
    <h2>Web / Software Development Solutions</h2>
  </div>
  <AboutMe />
  <InfoModule />
</template>

<script setup>
import AboutMe from '../components/AboutMe.vue'
import InfoModule from '../components/InfoModule.vue'
</script>

<style scoped>
#accueuil-intro {
  padding-bottom: 30px;
}

h2,
h1 {
  color: white;
}
#accueuil-intro h1 span {
  font-size: 2.5rem;
  font-weigth: bold;
  color: #fdc17b;
}
#accueuil-intro p:last-child {
  font-size: 0.8rem;
}
</style>

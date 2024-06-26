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
#accueuil-intro{
  position:relative;
  z-index: 1000;
}
#accueuil-intro h1{
  font-size: 4rem;
}
#accueuil-intro h2{
  font-size: 2.5rem;
}
#accueuil-intro h1 span {
  font-weigth: bold;
  color: #fdc17b;
}
#accueuil-intro p:last-child {
  font-size: 0.8rem;
}
@media (max-width: 768px) {
  
}
</style>

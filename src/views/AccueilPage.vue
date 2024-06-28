<template>
  <div id="accueil-intro">
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
h2,
h1 {
  color: white;
}

#accueil-intro {
  padding-top: 30px;
}

#accueil-intro h1 {
  font-size: 4rem;
}
#accueil-intro h2 {
  font-size: 2.5rem;
}
#accueil-intro h1 span {
  font-weight: bold;
  color: #fdc17b;
}
#accueil-intro p:last-child {
  font-size: 0.8rem;
}
@media (max-width: 768px) {
}
</style>

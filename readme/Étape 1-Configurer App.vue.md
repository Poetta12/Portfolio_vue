## Étape 1: Configurer App.vue

Tout d'abord, nous allons modifier le fichier `App.vue` pour utiliser les nouveaux composants.

```vue
<template>
  <div id="app">
    <HeaderPage />
    <router-view />
  </div>
</template>

<script setup>
import HeaderPage from './components/HeaderPage.vue';
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
```
# Description

## Dans cette configuration :

- **Template** (\<template>):

    -   Le contenu principal de l'application est encapsulé dans une balise <div> avec l'identifiant app.
    -   Le composant HeaderPage est inclus pour afficher l'en-tête de la page.
    -   <router-view /> est utilisé pour afficher le composant associé à l'URL courante définie par Vue Router.
- **Script** (\<script setup>):

    -   Importe le composant HeaderPage depuis ./components/HeaderPage.vue.

- **Style** (\<style>):

    -   Applique des styles au conteneur principal #app, notamment la police de caractères, l'anti-crénelage pour les polices web, l'alignement du texte au centre, la couleur du texte et un décalage marginaire de 60px en haut.

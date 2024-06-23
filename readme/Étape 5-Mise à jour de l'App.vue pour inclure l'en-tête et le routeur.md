## Étape 5: Mise à jour de l'App.vue pour inclure l'en-tête et le routeur

Dans cette étape, nous allons mettre à jour le fichier `App.vue` pour inclure le composant Header et le routeur Vue.

### Fichier App.vue

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
/* Vous pouvez ajouter des styles globaux ici */
</style>
```

## Description

### Template (`<template>`):

- Le composant `HeaderPage` est ajouté pour afficher l'en-tête de l'application.
- `<router-view />` est utilisé pour afficher le contenu dynamique basé sur la navigation définie par Vue Router.

### Script (`<script setup>`):

- Importe le composant `HeaderPage` depuis `./components/HeaderPage.vue`.

### Style (`<style>`):

- Vous pouvez ajouter des styles globaux ici pour toute la mise en page de l'application.

Cette mise à jour permet à `App.vue` d'intégrer correctement l'en-tête et de gérer la navigation à travers les différentes pages du portfolio Vue.js.
## Étape 2: Créer HeaderPage.vue

Ensuite, nous allons créer le composant `HeaderPage.vue` pour notre en-tête.

### Fichier HeaderPage.vue

```vue
<template>
  <header>
    <h1>Mon Portfolio</h1>
    <nav>
      <ul>
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/portfolio">Portfolio</router-link></li>
        <li><router-link to="/cv">CV</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
</script>

<style scoped>
header {
  background-color: #333;
  color: white;
  padding: 10px;
}

nav ul {
  list-style-type: none;
  display: flex;
  justify-content: center;
}

nav ul li {
  margin: 0 10px;
}

nav ul li a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  transition: color 0.3s ease;
}

nav ul li a:hover {
  color: #f39c12;
}
</style>
```



# Description

## Dans ce fichier :

- **Template** (`<template>`):

    - `<header>` contient le titre "Mon Portfolio" et un `<nav>` avec des liens `<router-link>` vers différentes sections de l'application (Accueil, Portfolio, CV, Contact).

- **Style** (`<style scoped>`):

    - Le style est appliqué spécifiquement au composant `HeaderPage.vue`.
    - `header` a un fond de couleur #333 avec du texte blanc et un espace intérieur de 10px.
    - Les éléments `<ul>` sont affichés en ligne (`flex`) et centrés horizontalement.
    - Les liens `<a>` sont en blanc avec une transition de couleur au survol (`hover`).

Ce composant constitue l'en-tête de ton application Vue.js avec une navigation simple et stylisée.
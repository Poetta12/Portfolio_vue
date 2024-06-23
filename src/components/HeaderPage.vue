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

<script setup></script>

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
  color: #f39c12; /* Couleur au survol */
}
</style>

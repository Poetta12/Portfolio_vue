  <template>
  <header>
    <div id="header-container">
      <div class="logo">
        <img src="@/assets/logos/WDS_logo_white-150x123.png" alt="Logo de votre site" />
      </div>
      <ul id="header-reseaux">
        <li><a href="https://www.poettatech.fr" class="icon-profile"></a></li>
        <li><a href="https://x.com/poettawds" class="icon-x"></a></li>
        <li><a href="https://github.com/Poetta12" class="icon-github"></a></li>
        <li><a href="https://www.linkedin.com/in/pedronfcosta/" class="icon-linkedin"></a></li>
      </ul>
      <div @click="toggleMenu" :class="{ open: !isMenuHidden }" class="menu-button hide-desktop">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav :class="{ show: !isMenuHidden }" class="main-nav">
        <ul>
          <li><router-link to="/" @click="closeMenu">Accueil</router-link></li>
          <li><router-link to="/portfolio" @click="closeMenu">Portfolio</router-link></li>
          <li><router-link to="/cv" @click="closeMenu">CV</router-link></li>
          <li><router-link to="/contact" @click="closeMenu">Contact</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuHidden = ref(true)

const toggleMenu = () => {
  isMenuHidden.value = !isMenuHidden.value
}

const closeMenu = () => {
  isMenuHidden.value = true
}
</script>

<style scoped>
/* Styles spécifiques au composant */
header {
  position: sticky; /* Rendre le header fixe */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* Assurez-vous qu'il est au-dessus d'autres contenus */
  padding: 1rem;
  background-color: #333;
  color: #fff;
  box-shadow: 0 0 80px 100px #333;
  margin: -15px;
}

#header-reseaux {
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  width: 30%;
  margin: auto;
}

#header-reseaux li {
  display: flex;
  align-items: center;
}

#header-reseaux a {
  font-size: 1.5rem;
  color: #fdc17b;
}

#header-container {
  display: flex;
  justify-content: space-between;
  align-items: center; /* Centre verticalement les éléments */
}

.logo {
  width: 100px; /* Ajuster la taille du logo */
}

.logo img {
  height: auto;
  max-width: 100%;
}

.menu-button {
  display: none; /* Par défaut, le bouton est caché */
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #fff;
  position: relative;
  width: 30px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 2000;
}

.menu-button span {
  display: block;
  width: 100%;
  height: 4px;
  background-color: #fdc17b;
  transition: all 0.3s ease;
}

.menu-button.open span:nth-child(1) {
  transform: translateY(12px) rotate(45deg);
}

.menu-button.open span:nth-child(2) {
  opacity: 0;
}

.menu-button.open span:nth-child(3) {
  transform: translateY(-12px) rotate(-45deg);
}

.main-nav {
  display: flex;
  justify-content: flex-end; /* Aligner le menu à droite */
  align-items: center;
}

.main-nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.main-nav ul li {
  margin-left: 1rem;
}

.main-nav ul li a {
  text-decoration: none;
  color: #fff;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s ease;
}

.main-nav ul li a:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
}

.menu-button.hide-desktop {
  display: none; /* Afficher le bouton seulement en mode mobile */
}

#header-container a{
  font-size: 1.5rem;
}

#header-reseaux a{
  font-size: 2.5rem;
}

@media (max-width: 768px) {
  .menu-button.hide-desktop {
    display: flex; /* Afficher le bouton seulement en mode mobile */
  }

  .main-nav {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    z-index: 999; /* Assurez-vous que le menu est au-dessus du contenu */
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  .main-nav.show {
    transform: translateX(0);
  }

  .main-nav ul {
    flex-direction: column;
    align-items: center;
    margin-top: 8rem;
    padding: 0.3rem;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 10px 0 0 10px;
  }

  .main-nav ul li {
    margin: 0.5rem 0;
  }

  #header-reseaux a {
    font-size: 2rem;
  }

}
</style>

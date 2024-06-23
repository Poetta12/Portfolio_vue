<template>
  <div id="about">
    <section>
      <article>
        <div id="profil-photo">
          <img src="@/assets/img/Pedro-COSTA.png" alt="Pedro Costa" />
        </div>
        <div>
          <h2>PEDRO COSTA</h2>
          <h6>DEVELOPPEUR FULL STACK JR</h6>
        </div>
      </article>
      <article id="coordonnees">
        <section class="contact-info">
          <h2>Coordonnées</h2>
          <ul>
            <li>
              <span class="icon-email"></span>
              <a href="mailto:poettawds@gmail.com">poettawds@gmail.com</a>
            </li>
            <li><span class="icon-phone"></span><a href="tel:+33753812381">07 53 81 23 81</a></li>
            <li><span class="icon-location1"></span> Annecy, 74</li>
            <li><span class="icon-v-card"></span> Permis B</li>
          </ul>
        </section>

        <section id="cv-container" class="cv-download">
          <h2>CV</h2>
          <div>
            <button id="goCV" class="icon-eye" @click="viewCV"></button>
            <button class="icon-download2" @click="downloadCV"></button>
          </div>
        </section>
      </article>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const downloadCV = () => {
  const pdfUrl = 'src/assets/docs/CV-Pedro_Costa.pdf' // Mettez à jour le chemin si nécessaire
  const link = document.createElement('a')
  link.href = pdfUrl
  link.setAttribute('download', 'CV-Pedro_Costa.pdf')
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const viewCV = () => {
  // Code pour afficher le CV, si nécessaire
}
</script>

<style scoped>
#about {
  width: 100%;
  margin: auto;
  background-color: #f9f9f9;
  text-align: center;
  padding: 1rem 2rem;
  background-color: #181818; /* Couleur de fond */
  color: #fdc17b; /* Couleur de texte */
}

#profil-photo {
  position: relative;
  background: #d3d5e1;
  width: 200px;
  height: 145px;
  border-radius: 100% 100% 0 0;
}

#profil-photo img {
  max-width: 175px;
  position: absolute;
  top: -30px;
  left: 10px;
}

#about section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#about section article:first-child {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#about h2 {
  font-size: 2rem;
}

#about h6 {
  font-size: 1rem;
  color: #555;
}

#coordonnees {
  margin-top: 1rem;
  text-align: left;
}

#coordonnees p,
#coordonnees a {
  margin: 0.5rem 0;
  font-size: 1rem;
}

#cv-container div {
  dispay: flex;
}
.cv-download button {
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  text-decoration: none;
  color: #fff;
  background-color: #333;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.cv-download button:hover {
  background-color: #555;
}

@media (min-width: 768px) {
  #about {
    width: 100%;
  }
  #about > section {
    height: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }
  #about section article:last-child {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #coordonnees {
    margin-top: 0rem;
  }
  #about section#cv-container {
    width: 100%;
    flex-direction: row;
    place-content: space-between;
  }
}

@media (min-width: 1024px) {
  #about[data-v-989c27d0] {
    width: 60%;
  }
}
</style>

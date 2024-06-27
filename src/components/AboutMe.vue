<template>
  <div id="about">
    <section>
      <article>
        <div id="profil-photo">
          <img src="@/assets/img/Pedro-COSTA.png" alt="Pedro Costa" />
        </div>
        <div id="coord">
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
            <li>
              <span class="icon-location1"></span>
              <p>Annecy, 74</p>
            </li>
            <li>
              <span class="icon-v-card"></span>
              <p>Permis B</p>
            </li>
          </ul>
        </section>

        <section id="cv-container" class="cv-download">
          <h2>CV</h2>
          <div>
            <!-- Utilisation de router-link pour naviguer vers /cv -->
            <router-link to="/cv" @click="closeMenu">
              <button class="icon-eye-plus"></button>
            </router-link>
            <button class="icon-document-download1" @click="downloadCV"></button>
          </div>
        </section>
      </article>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const downloadCV = () => {
  const pdfUrl = 'public/docs/CV-Pedro_Costa.pdf'
  const link = document.createElement('a')
  link.href = pdfUrl
  link.setAttribute('download', 'CV-Pedro_Costa.pdf')
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const closeMenu = () => {
  // Éventuellement, vous pouvez implémenter ici la logique pour fermer un menu
  // si nécessaire lorsque l'utilisateur clique sur le bouton Consulter.
}
</script>

<style scoped>
#about {
  width: 70%;
  margin: auto;
  text-align: center;
  padding: 3rem 0 1rem;
  background-color: #333;
  color: #fdc17b;
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

#coord {
  font-size: 2rem;
  padding-top: 10px;
  line-height: 1;
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
  font-size: rem;
}

#about h6 {
  font-size: 1.2rem;
  color: white;
  text-align: right;
}

#about section article:last-child li {
  display: flex;
  align-items: center;
}

#about section article:last-child li p,
#about section article:last-child li a,
#about section article:last-child li span {
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
}

#about section article:last-child li span {
  padding-right: 10px;
}

#coordonnees {
  margin-top: 1rem;
  text-align: left;
}

section#cv-container {
  display: flex;
}

#about section#cv-container {
  width: 100%;
  flex-direction: row;
  place-content: space-between;
  padding: 10px 0 0;
}

#cv-container button {
  margin: 0;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  text-decoration: none;
  color: #333;
  background-color: #fdc17b;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 75px;
}

#cv-container .cv-download button:hover {
  background-color: #555;
  color: #fdc17b;
}

@media (min-width: 768px) {
  #about > section {
    height: 100%;
    flex-direction: row;
    justify-content: space-between;
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
}

@media (min-width: 1024px) {
}
</style>

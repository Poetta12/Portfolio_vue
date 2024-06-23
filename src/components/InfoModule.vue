<template>
  <div id="info-module">
    <!-- Modal -->
    <div id="myModal" class="modal" :class="{ show: modalOpen }">
      <div class="modal-content">
        <!-- <span class="close" @click="closeModal">&times;</span> -->
        <p id="modal-text">{{ modalContent }}</p>
      </div>
    </div>

    <!-- Contenu principal -->
    <div id="bloc1">
      <section>
        <article v-for="(item, index) in infoItems" :key="index" :id="item.id">
          <h4 :class="item.iconClass">{{ item.title }}</h4>
          <p class="text-content">{{ item.content }}</p>
          <button class="read-more" @click="openModal(item.content)">Lire plus</button>
        </article>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const modalOpen = ref(false)
const modalContent = ref('')

const infoItems = ref([
  {
    id: 'time',
    title: 'Time',
    iconClass: 'icon-clock-o',
    content:
      "Le temps est une ressource inestimable que j'utilise avec soin. Je m'engage à gérer efficacement mon temps pour garantir des livraisons de projets ponctuelles et de haute qualité. Mon approche rigoureuse et structurée me permet de respecter les délais tout en maintenant un haut niveau de performance."
  },
  {
    id: 'work',
    title: 'Work',
    iconClass: 'icon-briefcase',
    content:
      'Mon travail en tant que développeur full-stack junior est le reflet de ma passion et de mon engagement dans le domaine du développement web. J\'ai participé à divers projets, allant de la création de sites web dynamiques à des applications mobiles intuitives. Explorez ma section "Projets" pour voir des exemples concrets de mes réalisations, incluant des technologies telles que HTML, CSS, JavaScript, Vue.js, et Laravel.'
  },
  {
    id: 'smart',
    title: 'Smart',
    iconClass: 'icon-coffee',
    content:
      "J'aime transformer des défis techniques en solutions intelligentes. Mon esprit analytique et ma capacité à apprendre rapidement me permettent de concevoir et d'implémenter des solutions innovantes qui répondent aux besoins des utilisateurs tout en optimisant les processus existants. Mon objectif est d'utiliser la technologie de manière stratégique pour créer une valeur ajoutée significative."
  },
  {
    id: 'vision',
    title: 'Vision',
    iconClass: 'icon-leaf',
    content:
      "Je crois en une vision qui anticipe et s'adapte aux évolutions technologiques. Mon ambition est de développer des solutions numériques qui non seulement répondent aux besoins actuels, mais qui sont également prêtes à évoluer avec les futures tendances et exigences du marché. Je suis passionné par l'innovation et déterminé à contribuer à des projets ambitieux et visionnaires."
  }
])

const openModal = (content) => {
  modalContent.value = content
  modalOpen.value = true
  document.body.classList.add('modal-open') // Ajoute la classe au body
}

const closeModal = () => {
  modalOpen.value = false
  document.body.classList.remove('modal-open') // Retire la classe du body
}

// Fermer la modal lorsqu'on clique en dehors de celle-ci
window.onclick = function (event) {
  const modal = document.getElementById('myModal')
  if (event.target == modal) {
    closeModal()
  }
}
</script>

<style scoped>
#info-module {
  width: 100%;
  margin: auto;
}
/* Styles spécifiques au composant InfoModule */
#myModal {
  width: 100vw !important;
  height: 100vh !important;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
}

#myModal div {
  background: #fdc17b;
}
.modal {
  display: none; /* Cachée par défaut */
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: #fefefe;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 600px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  top: 50%;
  left: 50%; /* Centrer horizontalement */
  transform: translate(-50%, -50%); /* Centrer verticalement et horizontalement */
  overflow-y: scroll;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

/* Ajout de la classe .show */
.modal.show {
  display: block;
}

/* Articles */
#bloc1 {
  display: flex;
  justify-content: center;
  padding: 0rem !important;
}

#bloc1 section {
  display: flex;
  flex-direction: column;
  place-items: center;
  place-content: center;
  color: #fdc17b;
}

#bloc1 h4 {
  font-size: 1.3rem;
  font-weight: bold;
}

#bloc1 p {
  font-size: 0.7rem;
}

#bloc1 article {
  /* width: 50%; */
  height: 200px;
  text-align: justify;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  margin: 10px 0;
  padding: 10px;
  background-color: #181818;
  border: 1px solid #ddd;
  border-radius: 10px 20px;
}

#bloc1 article h4 {
  margin-bottom: 10px;
}

#bloc1 article p {
  line-height: 1.6;
}

.read-more {
  position: absolute;
  bottom: 5px;
  right: 5px;
  display: block;
  margin-top: 0;
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.read-more:hover {
  background-color: #0056b3;
}

@media (min-width: 768px) {
  #info-module {
    width: 100%;
  }
  #bloc1 article {
    width: 49%;
  }
  #bloc1 section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    place-items: center;
    place-content: space-between;
  }
}

@media (min-width: 1024px) {
  #info-module {
    width: 60%;
  }
}
</style>

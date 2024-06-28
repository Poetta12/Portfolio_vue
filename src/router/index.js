import { createRouter, createWebHistory } from 'vue-router'
import AccueilPage from '../views/AccueilPage.vue'
import PortfolioPage from '../views/PortfolioPage.vue'
import ContactPage from '../views/ContactPage.vue'
import CVPage from '../views/CVPage.vue'
import NotFoundPage from '../views/NotFoundPage.vue'

const routes = [
  { path: '/', name: 'Accueil', component: AccueilPage },
  { path: '/portfolio', name: 'Portfolio', component: PortfolioPage },
  { path: '/contact', name: 'Contact', component: ContactPage },
  { path: '/cv', name: 'CV', component: CVPage },
  // Catch-all route for unmatched routes
  { path: '/:pathMatch(.*)', component: NotFoundPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

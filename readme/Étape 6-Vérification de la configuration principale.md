## Étape 6: Vérification de la configuration principale

Assurez-vous que `main.js` inclut le routeur et monte correctement l'application.

### Fichier `main.js`

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app');
```

## Description

- Le fichier `main.js` utilise `createApp` pour instancier l'application Vue.
- `App` est importé depuis `./App.vue`, servant de composant racine de l'application.
- `router` est importé depuis `./router`, configuré pour gérer les routes de l'application.
- L'utilisation de `.use(router)` intègre le routeur dans l'application Vue.
- Enfin, `.mount('#app')` monte l'application sur l'élément HTML avec l'ID `app`.

Cette configuration permet à l'application Vue.js de tirer parti du routeur pour la navigation entre différentes vues et assure que l'application est correctement montée sur la page web.

<template>
    <div class="container">
        <div id="left-side">
            <section class="personal-info">
                <h3>Informations personnelles</h3>
                <ul>
                    <li>Email:<a href="mailto:poettawds@gmail.com">poettawds@gmail.com</a></li>
                    <li>Téléphone:<a href="callto:0753812381">0753812381</a></li>
                    <li>Localisation: Annecy, 74000</li>
                    <li>Permis: B</li>
                </ul>
            </section>
            
            <section class="links">
                <h3>Mes liens</h3>
                <ul>
                    <li class="icon-github"><a href="https://linkedin.com/in/pedronfcosta/">LinkedIn</a></li>
                    <li class="icon-linkedin"><a href="https://github.com/Poetta12">GitHub</a></li>
                    <li class="icon-x"><a href="https://x.com/poettawds">X / Twitter</a></li>
                    <li class="icon-profile"><a href="http://www.poettatech.fr/">poettatech.fr</a></li>
                </ul>
            </section>
            
            <section class="education">
                <h3>Formation</h3>
                <ul>
                    <li><strong>Dev Avancé, TP6</strong> (Campus Numérique in the Alps, avr. 2024 - janv. 2026)</li>
                    <li><strong>Licence - JAVA</strong> (Conservatoire National des Arts et Métiers, sept. 2023 - juin 2026)</li>
                    <li><strong>Licence - MUC</strong> (Universidade Nova de Lisboa, sept. 2020 - juin 2023)</li>
                </ul>
            </section>

            <section class="skills">
                <h3>Compétences</h3>
                <ul>
                    <li class="tooltip"><img src="/src/assets/logos/html.webp" alt="logo html"><span class="tooltiptext">HTML</span></li>
                    <li class="tooltip"><img src="/src/assets/logos/CSS.png" alt="logo css"><span class="tooltiptext">CSS</span></li>
                    <li class="tooltip"><img src="/src/assets/logos/js.png" alt="logo JavaScript"><span class="tooltiptext">JavaScript</span></li>
                    <li class="tooltip"><img src="/src/assets/logos/php.png" alt="logo PHP"><span class="tooltiptext">PHP</span></li>
                    <li class="tooltip"><img src="/src/assets/logos/java.png" alt="logo Java"><span class="tooltiptext">Java</span></li>
                    <li class="tooltip"><img src="/src/assets/logos/sql.webp" alt="logo sql"><span class="tooltiptext">SQL</span></li>
                    <li class="tooltip"><img src="/src/assets/logos/Group-59.webp" alt="logo agile"><span class="tooltiptext">Développement Agile</span></li>
                    <li class="tooltip"><img src="/src/assets/logos/agile_logo.png" alt="logo scrum"><span class="tooltiptext">Méthodologie Scrum</span></li>
                    <li class="tooltip"><img src="/src/assets/logos/logo.svg" alt="logo vue"><span class="tooltiptext">Vue.js</span></li>
                    <li class="tooltip"><img src="/src/assets/logos/laravel.jpg" alt="logo laravel"><span class="tooltiptext">Laravel</span></li>
                    <li class="tooltip"><img src="/src/assets/logos/SYM.png" alt="logo Symphony"><span class="tooltiptext">Symphony</span></li>
                    <li class="tooltip"><img src="/src/assets/logos/wp.jpg" alt="logo wordpress"><span class="tooltiptext">WordPress</span></li>
                </ul>
            </section>

            <section class="languages">
                <h3>Langues</h3>
                <ul>
                    <li class="tooltip"><img src="/src/assets/logos/pt.jpg" alt="Portugal"><span class="tooltiptext">Portugal</span></li>
                    <li class="tooltip"><img src="/src/assets/logos/fr.jpg" alt="France"><span class="tooltiptext">France</span></li>
                    <li class="tooltip"><img src="/src/assets/logos/en1.png" alt="Anglais"><span class="tooltiptext">English</span></li>
                    <li class="tooltip"><img src="/src/assets/logos/spain.jpg" alt="Espagnol"><span class="tooltiptext">Español</span></li>
                </ul>
            </section>
        </div>
        <div id="right-side">
            <header>
                <h1>Pedro Costa</h1>
                <h2>Développeur full stack junior</h2>
            </header>
            
            <section class="profile">
                <h3>Profil</h3>
                <p>Actuellement en formation de Développeur Avancé, je recherche une alternance de 12 mois. Dynamique et ayant un excellent sens du contact, j'aime collaborer avec des interlocuteurs variés. Volontaire, je me distingue par mon engagement au service du collectif et mon goût d'apprendre.</p>
            </section>
            <section class="experience">
                <h3>Expérience professionnelle significative</h3>
                <ul>
                    <li><strong>Développeur front-end, CodePhenix, Île-de-France</strong> (janvier 2023 - mars 2024)
                        <ul>
                            <li>Utilisation des frameworks tels que Bootstrap et Vue.js pour développer des interfaces utilisateur modernes et réactives.</li>
                            <li>Développement d'applications web en utilisant des langages de programmation tels que JavaScript, HTML et CSS</li>
                        </ul>
                    </li>
                    <li><strong>Department Sales Manager, E.Leclerc, Île de France</strong> (septembre 2019 - décembre 2019)
                        <ul>
                            <li>Coaching des équipes commerciales et formation aux méthodes de vente pour améliorer les résultats.</li>
                            <li>Management d'une équipe et participation au suivi administratif et RH dans le respect des procédures internes.</li>
                        </ul>
                    </li>
                    <li><strong>Directeur magasin, Lidl France, Île de France</strong> (mars 2013 - juin 2017)
                        <ul>
                            <li>Gestion des stocks et suivi des commandes pour assurer une disponibilité optimale des produits.</li>
                            <li>Management des équipes en veillant à la qualité du climat social.</li>
                        </ul>
                    </li>
                </ul>
            </section>
            
            <section class="interests">
                <h3>Centres d'intérêt</h3>
                <p>Cinéma, œnologie, musique, football et musculation, activités associatives, théâtre, lecture.</p>
            </section>
            
            <section class="references">
                <h3>Références</h3>
                <ul>
                    <li>Brieuc Lebars, Code Phenix (brieuc@codephenix.com)</li>
                    <li>Aliou Diaby, Formateur indépendant Développeur Web (diabyaliou19@gmail.com)</li>
                    <li>Philippe Strapazzon, Campus Numérique in the Alps (philippe.strappazzon@le-campus-numerique.fr)</li>
                </ul>
            </section>
        </div>
    </div>
</template>

<script setup>
import jsLogo from '@/assets/logos/js.png'; // Utilisation d'un chemin d'importation absolu avec Vite
</script>


<style scoped>



*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f9;
    color: #333;
}

.container {
    display: flex;
    
    flex-wrap: wrap; /* Permet de passer en colonne sur les petits écrans */
    width: 100%;
    max-width: 900px;
    margin: 20px auto;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    overflow: hidden; /* Empêche le débordement */
}

#left-side,
#right-side {
    padding: 20px;
}

#left-side {
    width: 35%;
    background: #333;
    color: #fff;
}

#left-side h3 {
    color: rgb(253, 193, 123);
}

#left-side ul {
    list-style: none;
}

#left-side ul li a {
    padding-left: 10px;
    color: #a2cbf5;
    text-decoration: none;
}

#left-side ul li a:hover {
    text-decoration: underline;
}

#right-side {
    width: 65%;
    background: #fff;
}

header {
    background: rgb(253, 193, 123);
    padding: 20px;
    border-radius: 0 100px 100px 0;
    margin-bottom: 20px;
}

header h1 {
    font-size: 2.5em;
    margin-bottom: 10px;
    color: #333;
}

header h2 {
    font-size: 1.5em;
    color: #666;
}

section {
    margin-bottom: 20px;
}

section h3 {
    font-size: 1.4em;
    color: #333;
    border-bottom: 2px solid #666;
    padding-bottom: 5px;
    margin-bottom: 10px;
}

.skills ul,
.languages ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    text-align: center;
}

.skills img,
.languages img {
    width: 64px;
    height: 64px;
    background: #fff;
}

.tooltip {
    position: relative;
    display: inline-block;
}

.tooltip .tooltiptext {
    visibility: hidden;
    width: 150px;
    background-color: rgb(253, 193, 123);
    color: #333;
    text-align: center;
    border-radius: 5px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 125%; /* Positionne le tooltip au-dessus de l'élément */
    left: 50%;
    margin-left: -75px; /* Centre le tooltip */
    opacity: 0;
    transition: opacity 0.3s;
}

.tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%; /* En bas du tooltip */
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: rgb(253, 193, 123) transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
}

@media (max-width: 768px) {
    .container {
        flex-direction: column;
    }

    #left-side {
        
        width: 100%;
    }

    #right-side {
        order: -1; /* Met #left-side avant #right-side */
        width: 100%;
    }

    header {
        border-radius: 0;
        text-align: center;
    }
}
</style>
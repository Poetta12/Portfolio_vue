<template>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV - Pedro Costa</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>Pedro Costa</h1>
            <h2>Développeur full stack junior</h2>
        </header>
        <section>
            <h3>Informations personnelles</h3>
            <ul>
                <li>Email: <a href="mailto:poettawds@gmail.com">poettawds@gmail.com</a></li>
                <li>Téléphone: 0753812381</li>
                <li>Localisation: Annecy, 74000</li>
                <li>Permis: B</li>
            </ul>
        </section>
        <section>
            <h3>Mes liens</h3>
            <ul>
                <li><a href="https://linkedin.com/in/pedronfcosta/">LinkedIn</a></li>
                <li><a href="https://github.com/Poetta12">GitHub</a></li>
                <li><a href="http://www.poettatech.fr/">poettatech.fr</a></li>
            </ul>
        </section>
        <section>
            <h3>Profil</h3>
            <p>Actuellement en formation de Développeur Avancé, je recherche une alternance de 12 mois. Dynamique et ayant un excellent sens du contact, j'aime collaborer avec des interlocuteurs variés. Volontaire, je me distingue par mon engagement au service du collectif et mon goût d'apprendre.</p>
            <p>Ma vie est enrichie par le cinéma, l'œnologie, la musique, le football et la musculation, les activités associatives, le théâtre, ainsi que ma dévotion à la lecture.</p>
        </section>
        <section>
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
        <section>
            <h3>Formation</h3>
            <ul>
                <li><strong>Dev Avancé, TP6</strong> (Campus Numérique in the Alps, avr. 2024 - janv. 2026)</li>
                <li><strong>Licence - JAVA</strong> (Conservatoire National des Arts et Métiers, sept. 2023 - juin 2026)</li>
                <li><strong>Licence - MUC</strong> (Universidade Nova de Lisboa, sept. 2020 - juin 2023)</li>
            </ul>
        </section>
        <section>
            <h3>Compétences</h3>
            <ul>
                <li>JavaScript</li>
                <li>PHP</li>
                <li>Java</li>
                <li>Vue.js</li>
                <li>Laravel</li>
                <li>Développement agile</li>
            </ul>
        </section>
        <section>
            <h3>Langues</h3>
            <ul>
                <li>Portugais</li>
                <li>Français</li>
                <li>Anglais</li>
                <li>Espagnol</li>
            </ul>
        </section>
        <section>
            <h3>Références</h3>
            <ul>
                <li>Brieuc Lebars, Code Phenix (brieuc@codephenix.com)</li>
                <li>Aliou Diaby, Formateur indépendant Développeur Web (diabyaliou19@gmail.com)</li>
                <li>Philippe Strapazzon, Campus Numérique in the Alps (philippe.strappazzon@le-campus-numerique.fr)</li>
            </ul>
        </section>
        <section>
            <h3>Centres d'intérêt</h3>
            <p>Cinéma, œnologie, musique, football et musculation, activités associatives, théâtre, lecture.</p>
        </section>
    </div>
</body>
</html>
</template>

<script setup></script>

<style scoped>
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

.container {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

header {
    text-align: center;
    margin-bottom: 20px;
}

header h1 {
    margin: 0;
    font-size: 2em;
    color: #333;
}

header h2 {
    margin: 0;
    font-size: 1.5em;
    color: #666;
}

section {
    margin-bottom: 20px;
}

section h3 {
    margin-bottom: 10px;
    font-size: 1.2em;
    color: #333;
}

ul {
    list-style: none;
    padding: 0;
}

ul li {
    margin-bottom: 10px;
}

ul li a {
    color: #0066cc;
    text-decoration: none;
}

ul li a:hover {
    text-decoration: underline;
}

p {
    margin: 0 0 10px;
}


</style>
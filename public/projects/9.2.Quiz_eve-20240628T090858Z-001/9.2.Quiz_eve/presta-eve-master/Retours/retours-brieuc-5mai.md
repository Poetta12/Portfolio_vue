# Retours EVE

*05/05/2021*



## Home

### Header

* Utiliser une balise `<header>`
* Pas besoin de mettre 2 balises `<nav>` avec Bootstrap (cf devdocs). A l'intérieur de la 1ère, on met une balise `<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#maNavbar"><span class="navbar-toggler-icon"></span></button>` et on met le `<ul>` dans un div avec l'id `maNavbar` et les class `collapse navbar-collapse`
* On passera surement en `space-around` ou `space-between`
* ne pas utiliser font-weight: bold mais font-family: "Montserrat Bold" (remarque générale sur tout le site)



### Section Introduction

* La croix est trop grande

* Je réorganiserai la première partie (avec le logo Mage et le texte) :

  * Le logo Session 2019-2020 serait au même niveau que `close-symbol` positionné absolument (par rapport à left et **bottom** et non top). Pour sa hauteur, pas besoin de lui mettre autant. L'image fait environ 120x120 de base. On lui dit de faire 180px de largeur, vous pouvez mettre 200px de hauteur, ça suffira (plus facile à gérer pour le positionnement)
  * On aligne le logo Mage à droite du `col-lg-5` (on évite les marges négatives)

  Ca devrait être plus facile à gérer. En responsive, on pourra faire en sorte que Session reste à la frontière entre le rose et le blanc, et on centrera le logo Magehe

* Dans le css, vous avez un font-size à 200%, 2em me semble plus simple



* On enlève AFMTéléthon de ce bandeau car ils viennent d'arriver dans la Mage et n'y étaient pas pour cette session
* Je mettrais le conteneur en space-around avec du padding de chaque côté (exemple 10%)
* Je pense qu'il faudrait gérer les logos par rapport à leur hauteur et pas leur largeur pour uniformiser le bandeau
* on pourra leur mettre des marges en haut, en bas et peut-être sur les côtés, pour que ce soit joli en responsive





### Section évaluation

* Je pense que la background-image ne va pas nous permettre d'avoir le résultat voulu (notamment l'équerre au-dessus de la section suivante et le texte au dessus des pointillés)
* On va surement devoir mettre une balise image dans la section en position absolue à un endroit qui nous permet d'avoir l'effet souhaité. On pourra mettre une background-color au paragraphe pour "couper" l'image 
* La font-size du paragraphe est trop grande



### Section Mage

* Plus de padding à gauche
* Pour la font, utiliser "Montserrat Bold" pour mettre en gras, plutôt que font-weight. (notamment le h2 et le h3)
* J'ai l'impression que le bleu du h2 n'est pas le bon
* Bouton en gras
* A ajouter : les pictos en position absolute
* En responsive, on mettra le bouton au centre (dès md)



### Section Ressources

* même remarques qu'au-dessus
* J'ai l'impression que les couleurs de fond de ces deux sections ne sont pas les bonnes

### Suite

* mêmes remarques sur le padding et le gras (les boutons en gras)



## Evaluation

### Navbar

cf au-dessus



### Introduction

* On peut augmenter la font-size des paragraphes d'intro
* Les deux boutons "Nous contacter" et "C'est parti !" doivent être à la même largeur



### Evaluateur

* J'ai un doute sur le fait que chaque partie soit l'un sous l'autre, chacun étant une sorte de carousel, ou s'il s'agit d'un grand carousel (un peu comme inclusiscore). 

* Dans la partie 1, question 1, "Minorités" est expliqué. Finalement, on va enlever cette explication et à la question 3, où le mot minorités est suivi d'un *, au hover, un div apparaitra avec la définition
* Ne pas oublier des marges au-dessus et en-dessous des boutons pour le responsive
* Baisser les font des titres en responsive



### Résultat

* J'ai un doute sur le fait que résultat soit sur une autre page (comme inclusiscore)
* "Résultat global" à gauche sur la maquette et non centré
* Il manque les titres dans les divs résultats "Bon, on va pas se mentir, c'est pas génial..."
* En responsive, ne fonctionne pas sous 500px
* Réfléchir au responsive mobile pour les divs résultats
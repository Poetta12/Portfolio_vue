'use strict'

//SITE CONTAINERS**********************************************************
//BASE SITE
var script = document.querySelector('script')
var body = document.querySelector('body')

var header = document.createElement('header')
body.appendChild(header)
var landingSection = document.createElement('section')
landingSection.id = 'landingSection'
body.appendChild(landingSection)
var main = document.createElement('main')
body.appendChild(main)
var footer = document.createElement('footer')
body.appendChild(footer)

// CREATION DU HEADER***********************************************************

// creation deu logo***********************************************************
var blocLogo = document.createElement('button')
blocLogo.id = 'blocLogo'
var logo = document.createElement('h1')
logo.id = 'logoAccueil'
var logoSpan1 = document.createElement('span')
logoSpan1.setAttribute('class', 'black')
logoSpan1.textContent = 'E'
var logoSpan2 = document.createElement('span')
logoSpan2.setAttribute('class', 'white')
logoSpan2.textContent = 'SHOP'

header.appendChild(blocLogo)
blocLogo.appendChild(logo)
logo.appendChild(logoSpan1)
logo.appendChild(logoSpan2)

// creation des icones header***************************************************
var iconesList = document.createElement('ul')
iconesList.id = 'icones'
var iconesLi1 = document.createElement('li')
var iconesSpan1 = document.createElement('span')
iconesSpan1.id = 'headContact'
iconesSpan1.setAttribute('class', 'icon-phone')
var iconesLi2 = document.createElement('li')
iconesLi2.id = 'wishHeart'
iconesLi2.setAttribute('class', 'hide')
var wishHeartBut = document.createElement('span')
wishHeartBut.setAttribute('class', 'icon-heart-o')
var iconesLi3 = document.createElement('li')
iconesLi3.id = 'bagBut'
var iconesSpan3 = document.createElement('span')
iconesSpan3.setAttribute('class', 'icon-bag')
var iconesLi4 = document.createElement('li')
iconesLi4.id = 'compteBut'
var compteIcon = document.createElement('span')
compteIcon.setAttribute('class', 'icon-user')
compteIcon.id = 'compteIcon'
compteIcon.classList.add('hide')

header.appendChild(iconesList)
iconesList.appendChild(iconesLi1)
iconesList.appendChild(iconesLi2)
iconesList.appendChild(iconesLi3)
iconesList.appendChild(iconesLi4)
iconesLi1.appendChild(iconesSpan1)
iconesLi2.appendChild(wishHeartBut)
iconesLi3.appendChild(iconesSpan3)
iconesLi4.appendChild(compteIcon)

// creation du bouton NAV***********************************************************
var navBut = document.createElement('button')
navBut.id = 'navBut'

header.appendChild(navBut)

//CREATION DU MENU NAV***********************************************************
var nav = document.createElement('nav')
nav.classList.add('hide')

header.appendChild(nav)

var menuList = document.createElement('ul')
var navLi0 = document.createElement('li')
navLi0.id = 'personnalMenu'
var navLi0Contenu = document.createElement('p')
navLi0Contenu.classList.add('icon-hand-peace-o')
var navLi2 = document.createElement('li')
navLi2.classList.add('icon-tag2')
var navLi4 = document.createElement('li')
var navLi5 = document.createElement('li')
navLi5.classList.add('hide')
navLi5.classList.add("icon-user")
var navLi6 = document.createElement('li')
navLi6.classList.add('hide')
navLi6.classList.add('icon-power-off')

var navButton4 = document.createElement('button')
navButton4.id ='produitsCatalogue'
navButton4.textContent = 'PRODUITS'

var navButton1 = document.createElement('button')
navButton1.id ='connexionMenu'
navButton1.textContent = 'CONNEXION'
navLi4.classList.add('icon-link2')
var navButton2 = document.createElement('button')
navButton2.id ='compteMenu'
navButton2.textContent = 'MON COMPTE'
var navButton3 = document.createElement('button')
navButton3.id ='deconnexionMenu'
navButton3.textContent = 'DECONNECTER'

navButton4.addEventListener('click', function(){
  if(grandCatalogue.classList.contains('hide')){
    grandCatalogue.classList.remove('hide')
    rideauForm.classList.add('hide')
    modalWarning.classList.add('hide')
    modalCompte.classList.add('hide')
    vetements.classList.add('hide')
    chaussures.classList.add('hide')
    rideauPP.classList.add('hide')
    rideauPP.classList.remove('mettreForme')
    panier.classList.add('hide')
    panier.classList.remove('mettreForme')
    contactContainer.classList.add('hide')
    contactContainer.classList.remove('mettreForme')
    nav.classList.add('hide')
    body.classList.add('freeze')
  }else{
    grandCatalogue.classList.add('hide')
    body.classList.remove('freeze')
  }  
})

nav.appendChild(menuList)
menuList.appendChild(navLi0)
menuList.appendChild(navLi2)
menuList.appendChild(navLi4)
menuList.appendChild(navLi5)
menuList.appendChild(navLi6)

navLi2.appendChild(navButton4)
navLi4.appendChild(navButton1)
navLi5.appendChild(navButton2)
navLi6.appendChild(navButton3)

// TEXTE LANDING SECTION***********************************************************
//var landingSection = document.getElementById('landingSection')

var landingArticle = document.createElement('article')
var landingTitre = document.createElement('h2')
var landingTexte = document.createElement('p')
var exploreBut = document.createElement('button')
exploreBut.id = 'explore'

landingTitre.textContent = 'Changez d\'attitude, Changez de style...'
landingTexte.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
tempor incididunt ut labore et dolore magna aliqua.'
exploreBut.textContent = 'Explorez maintenant'

landingSection.appendChild(landingArticle)
landingArticle.appendChild(landingTitre)
landingArticle.appendChild(landingTexte)
landingArticle.appendChild(exploreBut)


//MAIN
var collection = document.createElement('section')
collection.id = 'collection'
var bestSell = document.createElement('section')
bestSell.id = 'bestSell'
var promoSlide = document.createElement('section')
promoSlide.id = 'promoSlide'
var nouveaute = document.createElement('section')
nouveaute.id = 'nouveaute'
var avisSlide = document.createElement('section')
avisSlide.id = 'avisSlide'
var catalogueSection = document.createElement('section')
catalogueSection.id = 'catalogue'
catalogueSection.classList.add('hide')
var buyers = document.createElement('section')
buyers.id = 'buyers'
var rideauForm = document.createElement('section')
rideauForm.id = 'rideauForm'
rideauForm.classList.add('hide')
var contactContainer = document.createElement('section')
contactContainer.id = 'contactContainer'
contactContainer.classList.add('hide')
var modalWarning = document.createElement('section')
modalWarning.id = 'modalWarning'
modalWarning.classList.add('hide')
var modalCompte = document.createElement('section')
modalCompte.id = 'modalCompte'
modalCompte.classList.add('hide')
var rideauPP = document.createElement('section')
rideauPP.id = 'rideauPP'
var panier = document.createElement('section')
panier.id = 'panier'
panier.classList.add('hide')
var chaussures = document.createElement('section')
chaussures.id = 'chaussures'
chaussures.classList.add('hide')
var vetements = document.createElement('section')
vetements.id = 'vetements'
vetements.classList.add('hide')
var retour = document.createElement('div')
retour.id = 'retour'

main.appendChild(collection)
main.appendChild(bestSell)
main.appendChild(promoSlide)
main.appendChild(nouveaute)
main.appendChild(avisSlide)
main.appendChild(catalogueSection)
main.appendChild(buyers)
main.appendChild(rideauForm)
main.appendChild(contactContainer)
main.appendChild(modalWarning)
main.appendChild(modalCompte)
main.appendChild(rideauPP)
main.appendChild(panier)
main.appendChild(chaussures)
main.appendChild(vetements)
main.appendChild(retour)

body.insertBefore(script, footer.nextElementSibling)

//RECUPERER LOGIN UTILISATEUR***********************************************************
class login {
  constructor(nom, prenom, pseudo, password){
    this.nom = nom
    this.prenom = prenom
    this.pseudo = pseudo
    this.password = password
  }

  get lastName(){
    return `${this.nom}`
  }
  get firstName(){
    return `${this.prenom}`
  }
  get monPseudo(){
    return `${this.pseudo}`
  }
}

// CONSTRUCTOR PANIER***********************************************************

class newProduit { 
  constructor(nom, prix, image, quantite){
    this.nom = nom
    this.prix = prix
    this.image = image
    this.quantite = quantite
  }
}

//CONSTRUCTOR WISHLIST***********************************************************
class newWish { 
  constructor(nom, prix, image){
    this.nom = nom
    this.prix = prix
    this.image = image
  }
}

//TABLEAU DE STOCKAGE DONNEES INSCRIPTION***********************************************************
var client = []

// TABLEAU PANIER***********************************************************
var newTable = []

//TABLEAU WISHLIST***********************************************************
var wishTable = []

// var regex
var regexNom = /^[A-Z].*[a-z]$/;
var regexPrenom = /^[A-Z].*[a-z]$/;
var regexPseudo = /^[A-Z].*[a-z]$/;
var regexPassword = /[A-Z]{3}-[1-9]{3}/
var regexEmail = /^.*@.*\..*$/;
var regexObjet = /.+/
var regexMessage = /.+/
var regexNumber = /\d/

// CREATION PAGE PRODUIT***********************************************************
var rideauPP = document.getElementById('rideauPP')
rideauPP.classList.add('hide')

var containerPP  = document.createElement('div')
containerPP.id  = 'containerPP'
var ensemblePP = document.createElement('div')
ensemblePP.id = 'ensemblePP'
var imagePrincPP = document.createElement('article')
imagePrincPP.id = 'imagesPP'
var princPP = document.createElement('figure')
princPP.id = 'princPP'
var imagePP1 = document.createElement('img')
var closePP = document.createElement('button')
closePP.id = 'closePP'
closePP.textContent = 'X'
var blocFigPP = document.createElement('div')
var figPP1 = document.createElement('figure')
var figPP2 = document.createElement('figure')
var figPP3 = document.createElement('figure')
var figPP4 = document.createElement('figure')
var imagSecPP1 = document.createElement('img')
imagSecPP1.src = 'assets/images/avatar1.png'
var imagSecPP2 = document.createElement('img')
imagSecPP2.src = 'assets/images/avatar1.png'
var imagSecPP3 = document.createElement('img')
imagSecPP3.src = 'assets/images/avatar1.png'
var imagSecPP4 = document.createElement('img')
imagSecPP4.src = 'assets/images/avatar1.png'

var donneesPP = document.createElement('article')
donneesPP.id = 'donneesPP'
var infoPP = document.createElement('div')
infoPP.id = 'infoPP'
var produitCoord = document.createElement('div')
produitCoord.id = 'produitCoord'
var titrePP = document.createElement('h4')
var prixPP = document.createElement('h4')
prixPP.classList.add('euro')
var starBloc = document.createElement('div')

var fieldsetPP = document.createElement('fieldset')
var selectPP = document.createElement('select')
selectPP.value = 'Taille'
var optionPP1 = document.createElement('option')
optionPP1.value = 'Taille'
optionPP1.textContent = 'Taille'
var optionPP2 = document.createElement('option')
var optionPP3 = document.createElement('option')
var optionPP4 = document.createElement('option')
var optionPP5 = document.createElement('option')
var optionPP6 = document.createElement('option')

var actionPP = document.createElement('div')
actionPP.id = 'actionPP'
var qtPP = document.createElement('input')
qtPP.type = 'number'
qtPP.name = 'quantite'
qtPP.placeholder = '1'
qtPP.min = '1'
qtPP.setAttribute('value', 1)
var butPP = document.createElement('button')
butPP.id = 'butPP'
butPP.textContent = 'Ajouter au panier'

var descriPP = document.createElement('article')
descriPP.id = 'descriPP'
var titreDescriPP = document.createElement('h5')
titreDescriPP.textContent = 'Détails du produit'
var textDescriPP = document.createElement('p')
textDescriPP.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, \
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

var butContainerPP = document.createElement('div')
butContainerPP.id = 'butContainerPP'
var leftButPP = document.createElement('button')
leftButPP.classList.add('icon-step-backward')
leftButPP.setAttribute('id', 'leftButPP')
var rightButPP = document.createElement('button')
rightButPP.classList.add('icon-step-forward')
rightButPP.setAttribute('id', 'rightButPP')

rideauPP.appendChild(containerPP)
containerPP.appendChild(ensemblePP)

ensemblePP.appendChild(imagePrincPP)
imagePrincPP.appendChild(princPP)
princPP.appendChild(imagePP1)
imagesPP.appendChild(closePP)
imagesPP.appendChild(blocFigPP)
blocFigPP.appendChild(figPP1)
blocFigPP.appendChild(figPP2)
blocFigPP.appendChild(figPP3)
blocFigPP.appendChild(figPP4)
figPP1.appendChild(imagSecPP1)
figPP2.appendChild(imagSecPP2)
figPP3.appendChild(imagSecPP3)
figPP4.appendChild(imagSecPP4)

ensemblePP.appendChild(donneesPP)
donneesPP.appendChild(infoPP)
infoPP.appendChild(produitCoord)
produitCoord.appendChild(titrePP)
produitCoord.appendChild(prixPP)
produitCoord.appendChild(starBloc)

infoPP.appendChild(fieldsetPP)
fieldsetPP.appendChild(selectPP)
selectPP.appendChild(optionPP1)
selectPP.appendChild(optionPP2)
selectPP.appendChild(optionPP3)
selectPP.appendChild(optionPP4)
selectPP.appendChild(optionPP5)
selectPP.appendChild(optionPP6)

donneesPP.appendChild(actionPP)
actionPP.appendChild(qtPP)
actionPP.appendChild(butPP)

containerPP.appendChild(descriPP)
descriPP.appendChild(titreDescriPP)
descriPP.appendChild(textDescriPP)

containerPP.appendChild(butContainerPP)
butContainerPP.appendChild(leftButPP)
butContainerPP.appendChild(rightButPP)

//CREATION DE LA SECTION COLLECTION***********************************************************
var collection = document.getElementById('collection')

var titreCollection = document.createElement('h3')
var collTitreSpan1 = document.createElement('span')
collTitreSpan1.setAttribute('class', 'black')
collTitreSpan1.textContent = 'NOS'
var collTitreSpan2 = document.createElement('span')
collTitreSpan2.setAttribute('class', 'white')
collTitreSpan2.textContent = 'COLLECTIONS'

collection.appendChild(titreCollection)
titreCollection.appendChild(collTitreSpan1)
titreCollection.appendChild(collTitreSpan2)

var collectionContainer = document.createElement('div')
var collArticle1 = document.createElement('article')
collArticle1.id = 'collArticle1'
var collFig1 = document.createElement('figure')
var collImage1 = document.createElement('img')
collImage1.src = 'assets/images/Style_sportswear_homme_1.jpg'
collImage1.setAttribute('alt', 'Collection 1')
var collArticle2 = document.createElement('article')
collArticle2.id = 'collArticle2'
var collFig2 = document.createElement('figure')
var collImage2 = document.createElement('img')
collImage2.src = 'assets/images/marques-sportswear-homme-scaled.jpg'
collImage2.setAttribute('alt', 'Collection 2')

collection.appendChild(collectionContainer)
collectionContainer.appendChild(collArticle1)
collectionContainer.appendChild(collArticle2)

collArticle1.appendChild(collFig1)
collFig1.appendChild(collImage1)

collArticle2.appendChild(collFig2)
collFig2.appendChild(collImage2)

// CREATION PAGE MON COMPTE***********************************************************
var modalCompte = document.getElementById('modalCompte')

var modalCompteEnsemble = document.createElement('div')
modalCompteEnsemble.setAttribute('id', 'modalCompteEnsemble')

var monId = document.createElement('article')
monId.setAttribute('id', 'monId')
var personnalCompte = document.createElement('h4')
personnalCompte.setAttribute('id','personnalCompte')
var monIdEnsemble = document.createElement('div')
monIdEnsemble.setAttribute('id', 'monIdEnsemble')
var figureMonId = document.createElement('figure')
var imageMonId = document.createElement('img')
var blocCoordonnees = document.createElement('div')
blocCoordonnees.setAttribute('id', 'blocCoordonnees')
var petitBlocCoord1 = document.createElement('div')
var nomId = document.createElement('p')
var nomInfo = document.createElement('p')
nomInfo.setAttribute('id', 'nomInfo')
nomInfo.setAttribute('class', 'bold')
var petitBlocCoord2 = document.createElement('div')
var prenomId = document.createElement('p')
var prenomInfo = document.createElement('p')
prenomInfo.setAttribute('id', 'prenomInfo')
prenomInfo.setAttribute('class', 'bold')
var petitBlocCoord3 = document.createElement('div')
var pseudoId = document.createElement('p')
var pseudoInfo = document.createElement('p')
pseudoInfo.setAttribute('id', 'pseudoId')
pseudoInfo.setAttribute('class', 'bold')

var compteControle = document.createElement('div')
compteControle.setAttribute('id', 'compteControle')
var mouvBut = document.createElement('button')
mouvBut.setAttribute('id', 'mouvBut')
var mouvSpan = document.createElement('span')
var wishBut = document.createElement('button')
wishBut.setAttribute('id', 'wishBut')
var wishSpan = document.createElement('span')

var wishListCompte = document.createElement('article')
wishListCompte.id = 'wishListCompte'
wishListCompte.classList.add('hide')
wishListCompte.classList.add('empty')

var mouvements = document.createElement('article')
mouvements.id = 'mouvements'
mouvements.setAttribute('class', 'hide')
var mouvTitle = document.createElement('h4')
var mouvText1 = document.createElement('p')
var mouvText2 = document.createElement('p')
var mouvText3 = document.createElement('p')
var mouvText4 = document.createElement('p')
var lastShop = document.createElement('div')
lastShop.id = "lastShop"
var figureMouv = document.createElement('figure')
var imageMouv = document.createElement('img')
var mouvBloc = document.createElement('div')
var nomProduitMouv = document.createElement('h5')
var prixProduitMouv = document.createElement('h5')

modalCompte.appendChild(modalCompteEnsemble)
modalCompteEnsemble.appendChild(monId)
modalCompteEnsemble.appendChild(compteControle)
modalCompteEnsemble.appendChild(wishListCompte)
modalCompteEnsemble.appendChild(mouvements)

monId.appendChild(personnalCompte)
monId.appendChild(monIdEnsemble)
monIdEnsemble.appendChild(figureMonId)
figureMonId.appendChild(imageMonId)
imageMonId.src = 'assets/images/avatar1.png'
monIdEnsemble.appendChild(blocCoordonnees)
blocCoordonnees.appendChild(petitBlocCoord1)
blocCoordonnees.appendChild(petitBlocCoord2)
blocCoordonnees.appendChild(petitBlocCoord3)
petitBlocCoord1.appendChild(nomId)
nomId.textContent = 'Nom: '
petitBlocCoord1.appendChild(nomInfo)
petitBlocCoord2.appendChild(prenomId)
prenomId.textContent = 'Prénom: '
petitBlocCoord2.appendChild(prenomInfo)
petitBlocCoord3.appendChild(pseudoId)
pseudoId.textContent = 'Pseudo: '
petitBlocCoord3.appendChild(pseudoInfo)

compteControle.appendChild(mouvBut)
mouvBut.appendChild(mouvSpan)
mouvSpan.textContent = 'Mes Mouvements'
compteControle.appendChild(wishBut)
wishBut.appendChild(wishSpan)
wishSpan.textContent = 'Ma WishList'

mouvements.appendChild(mouvTitle)
mouvTitle.textContent = 'Mes Mouvements'
mouvements.appendChild(mouvText1)
mouvText1.textContent = 'Achats: 3'
mouvements.appendChild(mouvText2)
mouvText2.textContent = 'Points: 254 Points'
mouvements.appendChild(mouvText3)
mouvText3.textContent = 'Solde Dispo: 54.56€'
mouvements.appendChild(mouvText4)
mouvText4.textContent = 'Derniers Achats: ...'
mouvements.appendChild(lastShop)
lastShop.appendChild(figureMouv)
figureMouv.appendChild(imageMouv)
imageMouv.src = 'assets/catalogue/adidas_Practice.jpg'
lastShop.appendChild(mouvBloc)
mouvBloc.appendChild(nomProduitMouv)
nomProduitMouv.textContent = 'Nom Produit'
mouvBloc.appendChild(prixProduitMouv)
prixProduitMouv.textContent = 'Prix Produit'

// CREATION COLLECTION CHAUSSURES
var chaussures = document.getElementById('chaussures')

var chaussuresContainer = document.createElement('div')
chaussuresContainer.id = 'chaussuresContainer'

var chaussuresSubContainer = document.createElement('div')
chaussuresSubContainer.id = 'chaussuresSubContainer'
var titreChaussures = document.createElement('h3')
var chaussuresTitreSpan1 = document.createElement('span')
chaussuresTitreSpan1.setAttribute('class', 'black')
chaussuresTitreSpan1.textContent = 'LES'
var chaussuresTitreSpan2 = document.createElement('span')
chaussuresTitreSpan2.setAttribute('class', 'white')
chaussuresTitreSpan2.textContent = 'CHAUSSURES'

chaussures.appendChild(chaussuresContainer)

chaussuresContainer.appendChild(titreChaussures)
chaussures.appendChild(chaussuresSubContainer)
titreChaussures.appendChild(chaussuresTitreSpan1)
titreChaussures.appendChild(chaussuresTitreSpan2)

// CREATION COLLECTION VETEMENTS
var vetements = document.getElementById('vetements')

var vetementsContainer = document.createElement('div')
vetementsContainer.id = 'vetementsContainer'

var vetementsSubContainer = document.createElement('div')
vetementsSubContainer.id = 'vetementsSubContainer'
var titreVetements = document.createElement('h3')
var vetementsTitreSpan1 = document.createElement('span')
vetementsTitreSpan1.setAttribute('class', 'black')
vetementsTitreSpan1.textContent = 'LES'
var vetementsTitreSpan2 = document.createElement('span')
vetementsTitreSpan2.setAttribute('class', 'white')
vetementsTitreSpan2.textContent = 'VETEMENTS'

vetements.appendChild(titreVetements)
vetements.appendChild(vetementsSubContainer)
titreVetements.appendChild(vetementsTitreSpan1)
titreVetements.appendChild(vetementsTitreSpan2)

//CREATION BEST SELL****************************************************

// CREATION MEILLEURS PRODUITS
var bestSell = document.getElementById('bestSell')

var bestSellContainer = document.createElement('div')
bestSellContainer.id = 'bestSellContainer'

var containerUn = document.createElement('div')
containerUn.id = 'containerUn'
var titreBest = document.createElement('h3')
var bestTitreSpan1 = document.createElement('span')
bestTitreSpan1.setAttribute('class', 'black')
bestTitreSpan1.textContent = 'MEILLEURS'
var bestTitreSpan2 = document.createElement('span')
bestTitreSpan2.setAttribute('class', 'white')
bestTitreSpan2.textContent = 'PRODUITS'

bestSell.appendChild(bestSellContainer)

bestSellContainer.appendChild(titreBest)
bestSellContainer.appendChild(containerUn)
titreBest.appendChild(bestTitreSpan1)
titreBest.appendChild(bestTitreSpan2)

// CREATION PRODUIT LANDSCAPE***********************************************************
var landscapeBloc = document.createElement('div')
landscapeBloc.id = 'landscapeBloc'
bestSellContainer.appendChild(landscapeBloc)

//CREATION LES OPPORTUNITES***********************************************************
var promoSlide = document.getElementById('promoSlide')

var titrePromo = document.createElement('h3')
var promoTitreSpan1 = document.createElement('span')
promoTitreSpan1.setAttribute('class', 'black')
promoTitreSpan1.textContent = 'LES'
var promoTitreSpan2 = document.createElement('span')
promoTitreSpan2.setAttribute('class', 'white')
promoTitreSpan2.textContent = 'OPPORTUNITES'

promoSlide.appendChild(titrePromo)
titrePromo.appendChild(promoTitreSpan1)
titrePromo.appendChild(promoTitreSpan2)

var promoContainer = document.getElementById('promoSlideContainer')

var promoContainer = document.createElement('div')
promoContainer.id = 'promoSlideContainer'

promoSlide.appendChild(promoContainer)

var leftBut = document.createElement('button')
leftBut.setAttribute('id', 'left')
leftBut.classList.add('icon-step-backward')
var rightBut = document.createElement('button')
rightBut.setAttribute('id', 'right')
rightBut.classList.add('icon-step-forward')

promoSlide.appendChild(leftBut)
promoSlide.appendChild(rightBut)

// CREATION LES NOUVEAUTES***********************************************************
var nouveaute = document.getElementById('nouveaute')

var titreNew = document.createElement('h3')
var newTitreSpan1 = document.createElement('span')
newTitreSpan1.setAttribute('class', 'black')
newTitreSpan1.textContent = 'LES'
var newTitreSpan2 = document.createElement('span')
newTitreSpan2.setAttribute('class', 'white')
newTitreSpan2.textContent = 'NOUVEAUTES'

nouveaute.appendChild(titreNew)
titreNew.appendChild(newTitreSpan1)
titreNew.appendChild(newTitreSpan2)

var nouveauteContainer = document.createElement('div')
nouveauteContainer.id = 'nouveauteContainer'

nouveaute.appendChild(nouveauteContainer)

// CREATION PAGE CATALOGUE***********************************************************
var grandCatalogue = document.getElementById('catalogue')

var catTitre = document.createElement('h3')
var catTitreSpan1 = document.createElement('span')
catTitreSpan1.setAttribute('class', 'black')
catTitreSpan1.textContent = 'NOS'
var catTitreSpan2 = document.createElement('span')
catTitreSpan2.setAttribute('class', 'white')
catTitreSpan2.textContent = 'PRODUITS'

grandCatalogue.appendChild(catTitre)
catTitre.appendChild(catTitreSpan1)
catTitre.appendChild(catTitreSpan2)

var containerCat = document.createElement('div')
containerCat.id = 'containerCat'

grandCatalogue.appendChild(containerCat)

/***********************************LA BOUCLE******************************************/
catalogue.forEach(function(produit){

  //BOUCLE MEILLEURS PRODUITS
  var articleBest = document.createElement('article')
  var voirBestContainer = document.createElement('div')
  voirBestContainer.id = 'voirBestContainer'
  var voirBest = document.createElement('div')
  var voirBestContenu = document.createElement('h6')
  voirBestContenu.textContent = 'Voir Plus'
  var heartButBest = document.createElement('button')
  heartButBest.classList.add('heartButBest')
  heartButBest.classList.add('icon-heart-o')
  var figureBest = document.createElement('figure')
  var bestProduitPanier = document.createElement('button')
  bestProduitPanier.id= 'BestProduitPanier'
  bestProduitPanier.setAttribute('class', 'hide')
  bestProduitPanier.textContent = "Ajouter au panier"
  var imgBest = document.createElement('img')
  var bestDonneesContainer = document.createElement('div')
  bestDonneesContainer.id = 'bestDonneesContainer'
  var titreBest = document.createElement('h6')
  var prixBest = document.createElement('h6')
  prixBest.classList.add('euro')

  if(produit.bestSell){
    containerUn.appendChild(articleBest)
    articleBest.appendChild(heartButBest)
    articleBest.appendChild(figureBest)
    articleBest.appendChild(bestDonneesContainer)
    bestDonneesContainer.appendChild(titreBest)
    bestDonneesContainer.appendChild(prixBest)
    figureBest.appendChild(imgBest)
    figureBest.appendChild(bestProduitPanier)
    articleBest.appendChild(voirBestContainer)
    voirBestContainer.appendChild(voirBest)
    voirBest.appendChild(voirBestContenu)

    // bouton "Ma WishList" de article***********************************************************
    heartButBest.addEventListener('click', function(e){
      e.stopPropagation()

      if(heartButBest.classList.contains('icon-heart-o')){
        heartButBest.classList.remove('icon-heart-o')
        heartButBest.classList.add('icon-heart')

        wishListCompte.classList.remove('empty')

        var wishArticle = new newWish(produit.nom, Number(produit.prix), produit.image)
        wishTable.push(wishArticle)

        //wishTable.forEach(function(chaqueWish, i){})

      }else if(heartButBest.classList.contains('icon-heart')){
        heartButBest.classList.add('icon-heart-o')
        heartButBest.classList.remove('icon-heart')

        wishTable.splice(wishTable.indexOf(wishArticle),1);
      }
    })

    //GESTION ETOILES MEILLEURS PRODUITS***********************************************************
    for(var i=0; i<5; i++){
      if(produit.eval<=i){
        var span2 = document.createElement('span')
        
        span2.classList.add('icon-star-o')
        bestDonneesContainer.appendChild(span2)
      }else{
        var span1 = document.createElement('span')
        span1.classList.add('icon-star')
        bestDonneesContainer.appendChild(span1)
      }
    }

    imgBest.src = produit.image
    titreBest.textContent = produit.nom
    prixBest.textContent = produit.prix //+ "€"

    //En clickant sur l'image***********************************************************
    articleBest.addEventListener('click', function(){

      rideauPP.classList.remove('hide')
      rideauPP.classList.add('mettreForme')

      rideauForm.classList.add('hide')
      grandCatalogue.classList.add('hide')
      modalWarning.classList.add('hide')
      modalCompte.classList.add('hide')
      panier.classList.add('hide')
      panier.classList.remove('mettreForme')
      contactContainer.classList.add('hide')
      contactContainer.classList.remove('mettreForme')
      grandCatalogue.classList.add('hide')
      nav.classList.add('hide')

      imagePP1.src = produit.image
      titrePP.textContent = produit.nom
      prixPP.textContent = produit.prix
      textDescriPP.textContent = produit.descrip;

      starMaker()
      sizeTaille()
    })

    // SLIDE PAGE PRODUIT BEST PRODUCTS***********************************************************
    rightButPP.addEventListener("click", nextSlide)
    leftButPP.addEventListener("click", previousSlide)

    window.addEventListener('keydown', function(e){
      if(e.keyCode == 39){
        nextSlide()
      }else if(e.keyCode == 37){
        previousSlide()
      }
    })

    function nextSlide(){
      if(articleBest == containerUn.lastElementChild){
        articleBest = containerUn.firstElementChild
        imagePP1.src = articleBest.childNodes[1].childNodes[0].src
        titrePP.textContent = articleBest.childNodes[2].childNodes[0].textContent
        prixPP.textContent = articleBest.childNodes[2].childNodes[1].textContent

        starMaker()

      }else{
        articleBest = articleBest.nextElementSibling
        imagePP1.src = articleBest.childNodes[1].childNodes[0].src
        titrePP.textContent = articleBest.childNodes[2].childNodes[0].textContent
        prixPP.textContent = articleBest.childNodes[2].childNodes[1].textContent

        starMaker()
      }
    }

    function previousSlide(){
      if(articleBest == containerUn.firstElementChild){
        articleBest = containerUn.lastElementChild
        imagePP1.src = articleBest.childNodes[1].childNodes[0].src
        titrePP.textContent = articleBest.childNodes[2].childNodes[0].textContent
        prixPP.textContent = articleBest.childNodes[2].childNodes[1].textContent

        starMaker()
      }else{
        articleBest = articleBest.previousElementSibling
        imagePP1.src = articleBest.childNodes[1].childNodes[0].src
        titrePP.textContent = articleBest.childNodes[2].childNodes[0].textContent
        prixPP.textContent = articleBest.childNodes[2].childNodes[1].textContent

        starMaker()
      }
    }
  }

  function starMaker(){
    starBloc.innerHTML=""
    for(var i=0; i<5; i++){
      if(produit.eval<=i){
        var spanPP2 = document.createElement('span')
        spanPP2.classList.add('icon-star-o')
        starBloc.appendChild(spanPP2)
      }else{
        var spanPP1 = document.createElement('span') 
        spanPP1.classList.add('icon-star')
        starBloc.appendChild(spanPP1)
      }
    }
  }

  // CREATION PRODUIT LANDSCAPE***********************************************************
  var article = document.createElement('article')
  article.setAttribute('class', 'landscape')
  var bloc1 = document.createElement('div')
  var figure = document.createElement('figure')
  var img = document.createElement('img')
  var bloc2 = document.createElement('div')
  var titre = document.createElement('h6')
  var prix = document.createElement('h6')
  prix.classList.add('euro')

  if(produit.format){

    landscapeBloc.appendChild(article)
    article.appendChild(bloc1)
    bloc1.appendChild(bloc2)
    bloc1.appendChild(figure)
    bloc2.appendChild(titre)
    bloc2.appendChild(prix)
    figure.appendChild(img)

    img.src = produit.image
    titre.textContent = produit.nom
    prix.textContent = produit.prix //+ "€"
  }

  //GESTION ETOILES PRODUIT LANDSCAPE***********************************************************
  for(var i=0; i<5; i++){
    if(produit.eval<=i){
      var span2 = document.createElement('span')
      span2.classList.add('icon-star-o')
      bloc2.appendChild(span2)
    }else{
      var span1 = document.createElement('span')
      span1.classList.add('icon-star')
      bloc2.appendChild(span1)
    }
  }

  //CREATION LES OPPORTUNITES***********************************************************
  var article = document.createElement('article')
  article.setAttribute('class', 'landscape')
  article.classList.add('hide')
  var bloc1 = document.createElement('div')
  var figure = document.createElement('figure')
  var image = document.createElement('img')
  var bloc2 = document.createElement('div')
  var titre = document.createElement('h6')
  var prix = document.createElement('h6')
  prix.classList.add('euro')

  if(produit.promo){
    promoContainer.appendChild(article)
    article.appendChild(bloc1)
    figure.appendChild(image)
    bloc1.appendChild(bloc2)
    bloc1.appendChild(figure)
    bloc2.appendChild(titre)
    bloc2.appendChild(prix)

    //GESTION ETOILES OPPORTUNITES***********************************************************
    for(var i=0; i<5; i++){
      if(produit.eval<=i){
        var span2 = document.createElement('span')
        span2.classList.add('icon-star-o')
        bloc2.appendChild(span2)
      }else{
        var span1 = document.createElement('span')
        span1.classList.add('icon-star')
        bloc2.appendChild(span1)
      }
    }
    image.src = produit.image
    titre.textContent = produit.nom
    prix.textContent = produit.prix
  }

  // BOUCLE LES NOUVEAUTES***********************************************************
  var articleNew = document.createElement('article')
  var voirNewContainer = document.createElement('div')
  voirNewContainer.id = 'voirNewContainer'
  var newDonneesContainer = document.createElement('div')
  newDonneesContainer.id = 'newDonneesContainer'
  var voirNew = document.createElement('div')
  var voirNewContenu = document.createElement('h6')
  voirNewContenu.textContent = 'Voir Plus'
  var heartButNew = document.createElement('button')
  heartButNew.classList.add('heartButNew')
  heartButNew.classList.add('icon-heart-o')
  var figureNew = document.createElement('figure')
  var imgNew = document.createElement('img')
  var titreNew = document.createElement('h6')
  var prixNew = document.createElement('h6')
  prixNew.classList.add('euro')

  if(produit.new){
    nouveauteContainer.appendChild(articleNew)
    articleNew.appendChild(heartButNew)
    articleNew.appendChild(figureNew)
    articleNew.appendChild(newDonneesContainer)
    newDonneesContainer.appendChild(titreNew)
    newDonneesContainer.appendChild(prixNew)
    figureNew.appendChild(imgNew)
    articleNew.appendChild(voirNewContainer)
    voirNewContainer.appendChild(voirNew)
    voirNew.appendChild(voirNewContenu)

    imgNew.src = produit.image
    titreNew.textContent = produit.nom
    prixNew.textContent = produit.prix //+ "€"

    //GESTION ETOILES NOUVEAUTES***********************************************************
    for(var i=0; i<5; i++){
      if(produit.eval<=i){
        var span2 = document.createElement('span')
        span2.classList.add('icon-star-o')
        newDonneesContainer.appendChild(span2)
      }else{
        var span1 = document.createElement('span')
        span1.classList.add('icon-star')
        newDonneesContainer.appendChild(span1)
      }
    }

  // bouton "Ma WishList" de article***********************************************************

    heartButNew.addEventListener('click', function(e){
      e.stopPropagation()

      if(heartButNew.classList.contains('icon-heart-o')){
        heartButNew.classList.remove('icon-heart-o')
        heartButNew.classList.add('icon-heart')

        wishListCompte.classList.remove('empty')

        var wishArticle = new newWish(produit.nom, Number(produit.prix), produit.image)
        wishTable.push(wishArticle)

        wishTable.forEach(function(chaqueWish, i){
        })

      }else if(heartButNew.classList.contains('icon-heart')){
        heartButNew.classList.add('icon-heart-o')
        heartButNew.classList.remove('icon-heart')

        wishTable.splice(wishTable.indexOf(wishArticle),1);
      }
    })

  // bouton article pour zoom modal / page produit***********************************************************
    articleNew.addEventListener('click', function(){

      var currentImage = produit.image
      var currentTitrePP = produit.nom
      var currentPrixPP = produit.prix
      rideauPP.classList.remove('hide')
      rideauPP.classList.add('mettreForme')

      rideauForm.classList.add('hide')
      grandCatalogue.classList.add('hide')
      modalWarning.classList.add('hide')
      modalCompte.classList.add('hide')
      panier.classList.add('hide')
      panier.classList.remove('mettreForme')
      contactContainer.classList.add('hide')
      contactContainer.classList.remove('mettreForme')
      grandCatalogue.classList.add('hide')
      nav.classList.add('hide')

      imagePP1.src = currentImage

      titrePP.textContent = currentTitrePP
      prixPP.textContent = currentPrixPP
      textDescriPP.textContent =produit.descrip;

      starBloc.innerHTML=""
      for(var i=0; i<5; i++){
        if(produit.eval<=i){
          var spanPP2 = document.createElement('span')
          spanPP2.classList.add('icon-star-o')
          starBloc.appendChild(spanPP2)
        }else{
          var spanPP1 = document.createElement('span') 
          spanPP1.classList.add('icon-star')
          starBloc.appendChild(spanPP1)
        }
      }

    // SLIDE PAGE PRODUIT NOUVEAUTES***********************************************************
      rightButPP.addEventListener("click", nextSlideNew)
      leftButPP.addEventListener("click", previousSlideNew)

      window.addEventListener('keydown', function(e){
        if(e.keyCode == 39){
          nextSlideNew()
        }else if(e.keyCode == 37){
          previousSlideNew()
        }
      })

      function nextSlideNew(){
        if(articleNew == nouveauteContainer.lastElementChild){
          articleNew = nouveauteContainer.firstElementChild

          imagePP1.src = articleNew.childNodes[1].childNodes[0].src
          titrePP.textContent = articleNew.childNodes[2].childNodes[0].textContent
          prixPP.textContent = articleNew.childNodes[2].childNodes[1].textContent
        }else{
          articleNew = articleNew.nextElementSibling
          imagePP1.src = articleNew.childNodes[1].childNodes[0].src
          titrePP.textContent = articleNew.childNodes[2].childNodes[0].textContent
          prixPP.textContent = articleNew.childNodes[2].childNodes[1].textContent
        }
      }

      function previousSlideNew(){
        if(articleNew == nouveauteContainer.firstElementChild){
          articleNew = nouveauteContainer.lastElementChild

          imagePP1.src = articleNew.childNodes[1].childNodes[0].src
          titrePP.textContent = articleNew.childNodes[2].childNodes[0].textContent
          prixPP.textContent = articleNew.childNodes[2].childNodes[1].textContent
        }else{
          articleNew = articleNew.previousElementSibling

          imagePP1.src = articleNew.childNodes[1].childNodes[0].src
          titrePP.textContent = articleNew.childNodes[2].childNodes[0].textContent
          prixPP.textContent = articleNew.childNodes[2].childNodes[1].textContent
        }
      }
      sizeTaille()
    })
  }

// LA GRANDE PAGE CATALOGUE***********************************************************
  var articleCat = document.createElement('article')
  var voirCatContainer = document.createElement('div')
  voirCatContainer.id = 'voirCatContainer'
  var catDonneesContainer = document.createElement('div')
  catDonneesContainer.id = 'catDonneesContainer'
  var voirCat = document.createElement('div')
  var voirCatContenu = document.createElement('h6')
  voirCatContenu.textContent = 'Voir Plus'
  var heartButCat = document.createElement('button')
  heartButCat.classList.add('heartButCat')
  heartButCat.classList.add('icon-heart-o')
  var figureCat = document.createElement('figure')
  var imgCat = document.createElement('img')
  var titreCat = document.createElement('h6')
  var prixCat = document.createElement('h6')
  prixCat.classList.add('euro')

  if(catalogue.length > 6 && produit.catalog){

    containerCat.appendChild(articleCat)
    articleCat.appendChild(heartButCat)
    articleCat.appendChild(figureCat)
    articleCat.appendChild(catDonneesContainer)
    catDonneesContainer.appendChild(titreCat)
    catDonneesContainer.appendChild(prixCat)
    figureCat.appendChild(imgCat)
    articleCat.appendChild(voirCatContainer)
    voirCatContainer.appendChild(voirCat)
    voirCat.appendChild(voirCatContenu)

    imgCat.src = produit.image
    titreCat.textContent = produit.nom
    prixCat.textContent = produit.prix

    sizeTaille()
  }

//GESTION ETOILES CATALOGUE***********************************************************
  for(var i=0; i<5; i++){
    if(produit.eval<=i){
      var span2 = document.createElement('span')
      span2.classList.add('icon-star-o')
      catDonneesContainer.appendChild(span2)
    }else{
     var span1 = document.createElement('span')
     span1.classList.add('icon-star')
     catDonneesContainer.appendChild(span1)
   }
 }

// bouton "Ma WishList" de article***********************************************************
 heartButCat.addEventListener('click', function(e){
  e.stopPropagation()

  if(heartButCat.classList.contains('icon-heart-o')){
    heartButCat.classList.remove('icon-heart-o')
    heartButCat.classList.add('icon-heart')

    wishListCompte.classList.remove('empty')

    var wishArticle = new newWish(produit.nom, Number(produit.prix), produit.image)
    wishTable.push(wishArticle)

    wishTable.forEach(function(chaqueWish, i){
    })

  }else if(heartButCat.classList.contains('icon-heart')){
    heartButCat.classList.add('icon-heart-o')
    heartButCat.classList.remove('icon-heart')

    wishTable.splice(wishTable.indexOf(wishArticle),1);
  }
})

 articleCat.addEventListener('click', function(){

  var currentImage = produit.image
  var currentTitrePP = produit.nom
  var currentPrixPP = produit.prix
  rideauPP.classList.remove('hide')
  rideauPP.classList.add('mettreForme')

  rideauForm.classList.add('hide')
  grandCatalogue.classList.add('hide')
  modalWarning.classList.add('hide')
  modalCompte.classList.add('hide')
  panier.classList.add('hide')
  panier.classList.remove('mettreForme')
  contactContainer.classList.add('hide')
  contactContainer.classList.remove('mettreForme')
  grandCatalogue.classList.add('hide')
  nav.classList.add('hide')

  imagePP1.src = currentImage

  titrePP.textContent = currentTitrePP
  prixPP.textContent = currentPrixPP
  textDescriPP.textContent =produit.descrip;

  starBloc.innerHTML=""
  for(var i=0; i<5; i++){
    if(produit.eval<=i){
      var spanPP2 = document.createElement('span')
      spanPP2.classList.add('icon-star-o')
      starBloc.appendChild(spanPP2)
    }else{
      var spanPP1 = document.createElement('span') 
      spanPP1.classList.add('icon-star')
      starBloc.appendChild(spanPP1)
    }
  }

// SLIDE PAGE PRODUIT GRAND CATALOGUE***********************************************************
  rightButPP.addEventListener("click", nextSlideCat)
  leftButPP.addEventListener("click", previousSlideCat)

  window.addEventListener('keydown', function(e){
    if(e.keyCode == 39){
      nextSlideCat()
    }else if(e.keyCode == 37){
      previousSlideCat()
    }
  })

  function nextSlideCat(){
    if(articleCat == containerCat.lastElementChild){
      articleCat = containerCat.firstElementChild

      imagePP1.src = articleCat.childNodes[1].childNodes[0].src
      titrePP.textContent = articleCat.childNodes[2].childNodes[0].textContent
      prixPP.textContent = articleCat.childNodes[2].childNodes[1].textContent
    }else{
      articleCat = articleCat.nextElementSibling
      imagePP1.src = articleCat.childNodes[1].childNodes[0].src
      titrePP.textContent = articleCat.childNodes[2].childNodes[0].textContent
      prixPP.textContent = articleCat.childNodes[2].childNodes[1].textContent
    }
  }

  function previousSlideCat(){
    if(articleCat == containerCat.firstElementChild){
      articleCat = containerCat.lastElementChild

      imagePP1.src = articleCat.childNodes[1].childNodes[0].src
      titrePP.textContent = articleCat.childNodes[2].childNodes[0].textContent
      prixPP.textContent = articleCat.childNodes[2].childNodes[1].textContent
    }else{
      articleCat = articleCat.previousElementSibling

      imagePP1.src = articleCat.childNodes[1].childNodes[0].src
      titrePP.textContent = articleCat.childNodes[2].childNodes[0].textContent
      prixPP.textContent = articleCat.childNodes[2].childNodes[1].textContent
    }
  }
  sizeTaille()
}) 

//BOUCLE CHAUSSURES
 var articleChaussures = document.createElement('article')
 var chaussDonneesContainer = document.createElement('div')
 chaussDonneesContainer.id = 'chaussDonneesContainer'
 var voirChaussuresContainer = document.createElement('div')
 voirChaussuresContainer.id = 'voirChaussuresContainer'
 var voirChaussures = document.createElement('div')
 var voirChaussuresContenu = document.createElement('h6')
 voirChaussuresContenu.textContent = 'Voir Plus'
 var heartButChaussures = document.createElement('button')
 heartButChaussures.classList.add('heartButChaussures')
 heartButChaussures.classList.add('icon-heart-o')
 var figureChaussures = document.createElement('figure')
 var chaussuresProduitPanier = document.createElement('button')
 chaussuresProduitPanier.id= 'chaussuresProduitPanier'
 chaussuresProduitPanier.setAttribute('class', 'hide')
 chaussuresProduitPanier.textContent = "Ajouter au panier"
 var imgChaussures = document.createElement('img')
 var titreChaussures = document.createElement('h6')
 var prixChaussures = document.createElement('h6')
 prixChaussures.classList.add('euro')

 if(produit.collection == 'chaussures' && produit.catalog ==true ){

  chaussuresSubContainer.appendChild(articleChaussures)
  articleChaussures.appendChild(heartButChaussures)
  articleChaussures.appendChild(figureChaussures)
  articleChaussures.appendChild(chaussDonneesContainer)
  chaussDonneesContainer.appendChild(titreChaussures)
  chaussDonneesContainer.appendChild(prixChaussures)
  figureChaussures.appendChild(imgChaussures)
  figureChaussures.appendChild(chaussuresProduitPanier)
  articleChaussures.appendChild(voirChaussuresContainer)
  voirChaussuresContainer.appendChild(voirChaussures)
  voirChaussures.appendChild(voirChaussuresContenu)
}

// bouton "Ma WishList" de CHAUSSURES***********************************************************
heartButChaussures.addEventListener('click', function(e){
  e.stopPropagation()

  if(heartButChaussures.classList.contains('icon-heart-o')){
    heartButChaussures.classList.remove('icon-heart-o')
    heartButChaussures.classList.add('icon-heart')

    wishListCompte.classList.remove('empty')

    var wishChaussures = new newWish(produit.nom, Number(produit.prix), produit.image)
    wishTable.push(wishChaussures)

  }else if(heartButChaussures.classList.contains('icon-heart')){
    heartButChaussures.classList.add('icon-heart-o')
    heartButChaussures.classList.remove('icon-heart')

    wishTable.splice(wishTable.indexOf(wishChaussures),1);
  }
})

//GESTION ETOILES CHAUSSURES***********************************************************
for(var i=0; i<5; i++){
  if(produit.eval<=i){
    var span2 = document.createElement('span')
    span2.classList.add('icon-star-o')
    chaussDonneesContainer.appendChild(span2)
  }else{
   var span1 = document.createElement('span')
   span1.classList.add('icon-star')
   chaussDonneesContainer.appendChild(span1)
 }
}

imgChaussures.src = produit.image
titreChaussures.textContent = produit.nom
prixChaussures.textContent = produit.prix //+ "€"

//En clickant sur l'image***********************************************************
articleChaussures.addEventListener('click', function(){
  starBloc.innerHTML=""
  for(var i=0; i<5; i++){
    if(produit.eval<=i){
      var spanPP2 = document.createElement('span')
      spanPP2.classList.add('icon-star-o')
      starBloc.appendChild(spanPP2)
    }else{
      var spanPP1 = document.createElement('span') 
      spanPP1.classList.add('icon-star')
      starBloc.appendChild(spanPP1)
    }
  }

  rideauPP.classList.remove('hide')
  rideauPP.classList.add('mettreForme')

  rideauForm.classList.add('hide')
  grandCatalogue.classList.add('hide')
  modalWarning.classList.add('hide')
  modalCompte.classList.add('hide')
  panier.classList.add('hide')
  panier.classList.remove('mettreForme')
  contactContainer.classList.add('hide')
  contactContainer.classList.remove('mettreForme')
  grandCatalogue.classList.add('hide')
  nav.classList.add('hide')

  imagePP1.src = produit.image
  titrePP.textContent = produit.nom
  prixPP.textContent = produit.prix
  textDescriPP.textContent =produit.descrip;

  sizeTaille()

  // SLIDE PAGE PRODUIT CHAUSSURES***********************************************************
  rightButPP.addEventListener("click", nextSlideCh)
  leftButPP.addEventListener("click", previousSlideCh)

  window.addEventListener('keydown', function(e){
    if(e.keyCode == 39){
      nextSlide()
    }else if(e.keyCode == 37){
      previousSlide()
    }
  })

  function nextSlideCh(){
    if(articleChaussures == chaussuresSubContainer.lastElementChild){
      articleChaussures = chaussuresSubContainer.firstElementChild
      imagePP1.src = articleChaussures.childNodes[1].childNodes[0].src
      titrePP.textContent = articleChaussures.childNodes[2].childNodes[0].textContent
      prixPP.textContent = articleChaussures.childNodes[2].childNodes[1].textContent
    }else{
      articleChaussures = articleChaussures.nextElementSibling
      imagePP1.src = articleChaussures.childNodes[1].childNodes[0].src
      titrePP.textContent = articleChaussures.childNodes[2].childNodes[0].textContent
      prixPP.textContent = articleChaussures.childNodes[2].childNodes[1].textContent
    }
  }

  function previousSlideCh(){
    if(articleChaussures == chaussuresSubContainer.firstElementChild){
      articleChaussures = chaussuresSubContainer.lastElementChild
      imagePP1.src = articleChaussures.childNodes[1].childNodes[0].src
      titrePP.textContent = articleChaussures.childNodes[2].childNodes[0].textContent
      prixPP.textContent = articleChaussures.childNodes[2].childNodes[1].textContent
    }else{
      articleChaussures = articleChaussures.previousElementSibling
      imagePP1.src = articleChaussures.childNodes[1].childNodes[0].src
      titrePP.textContent = articleChaussures.childNodes[2].childNodes[0].textContent
      prixPP.textContent = articleChaussures.childNodes[2].childNodes[1].textContent
    }
  }
  sizeTaille()
})

// BOUCLE LES VETEMENTS***********************************************************
var articleVetements = document.createElement('article')
var veteDonneesContainer = document.createElement('div')
veteDonneesContainer.id = 'veteDonneesContainer'
var voirVetementsContainer = document.createElement('div')
voirVetementsContainer.id = 'voirVetementsContainer'
var voirVetements = document.createElement('div')
var voirVetementsContenu = document.createElement('h6')
voirVetementsContenu.textContent = 'Voir Plus'
var heartButVetements = document.createElement('button')
heartButVetements.classList.add('heartButVetements')
heartButVetements.classList.add('icon-heart-o')
var figureVetements = document.createElement('figure')
var imgVetements = document.createElement('img')
var titreVetements = document.createElement('h6')
var prixVetements = document.createElement('h6')
prixVetements.classList.add('euro')

if(produit.collection == 'vetements' && produit.catalog){
  vetementsSubContainer.appendChild(articleVetements)
  articleVetements.appendChild(heartButVetements)
  articleVetements.appendChild(figureVetements)
  articleVetements.appendChild(veteDonneesContainer)
  veteDonneesContainer.appendChild(titreVetements)
  veteDonneesContainer.appendChild(prixVetements)
  figureVetements.appendChild(imgVetements)
  articleVetements.appendChild(voirVetementsContainer)
  voirVetementsContainer.appendChild(voirVetements)
  voirVetements.appendChild(voirVetementsContenu)
}

imgVetements.src = produit.image
titreVetements.textContent = produit.nom
prixVetements.textContent = produit.prix

sizeTaille()

//GESTION ETOILES VETEMENTS***********************************************************
for(var i=0; i<5; i++){
  if(produit.eval<=i){
    var span2 = document.createElement('span')
    span2.classList.add('icon-star-o')
    veteDonneesContainer.appendChild(span2)
  }else{
   var span1 = document.createElement('span')
   span1.classList.add('icon-star')
   veteDonneesContainer.appendChild(span1)
 }
}

// bouton "Ma WishList" de article***********************************************************
heartButVetements.addEventListener('click', function(e){
  e.stopPropagation()

  if(heartButVetements.classList.contains('icon-heart-o')){
    heartButVetements.classList.remove('icon-heart-o')
    heartButVetements.classList.add('icon-heart')

    wishListCompte.classList.remove('empty')

    var wishVetements = new newWish(produit.nom, Number(produit.prix), produit.image)
    wishTable.push(wishVetements)

    //wishTable.forEach(function(chaqueWish, i){})

  }else if(heartButVetements.classList.contains('icon-heart')){
    heartButVetements.classList.add('icon-heart-o')
    heartButVetements.classList.remove('icon-heart')

    wishTable.splice(wishTable.indexOf(wishVetements),1);
  }
})

//En clickant sur l'image***********************************************************
articleVetements.addEventListener('click', function(){
  starBloc.innerHTML=""
  for(var i=0; i<5; i++){
    if(produit.eval<=i){
      var spanPP2 = document.createElement('span')
      spanPP2.classList.add('icon-star-o')
      starBloc.appendChild(spanPP2)
    }else{
      var spanPP1 = document.createElement('span') 
      spanPP1.classList.add('icon-star')
      starBloc.appendChild(spanPP1)
    }
  }

  rideauPP.classList.remove('hide')
  rideauPP.classList.add('mettreForme')

  rideauForm.classList.add('hide')
  grandCatalogue.classList.add('hide')
  modalWarning.classList.add('hide')
  modalCompte.classList.add('hide')
  panier.classList.add('hide')
  panier.classList.remove('mettreForme')
  contactContainer.classList.add('hide')
  contactContainer.classList.remove('mettreForme')
  grandCatalogue.classList.add('hide')
  nav.classList.add('hide')

  imagePP1.src = produit.image
  titrePP.textContent = produit.nom
  prixPP.textContent = produit.prix
  textDescriPP.textContent =produit.descrip;

  sizeTaille()

  // SLIDE PAGE PRODUIT VETEMENTS***********************************************************
  rightButPP.addEventListener("click", nextSlideVet)
  leftButPP.addEventListener("click", previousSlideVet)

  window.addEventListener('keydown', function(e){
    if(e.keyCode == 39){
      nextSlideNew()
    }else if(e.keyCode == 37){
      previousSlideNew()
    }
  })

  function nextSlideVet(){
    if(articleVetements == vetementsSubContainer.lastElementChild){
      articleVetements = vetementsSubContainer.firstElementChild

      imagePP1.src = articleVetements.childNodes[1].childNodes[0].src
      titrePP.textContent = articleVetements.childNodes[2].childNodes[0].textContent
      prixPP.textContent = articleVetements.childNodes[2].childNodes[1].textContent
    }else{
      articleVetements = articleVetements.nextElementSibling
      imagePP1.src = articleVetements.childNodes[1].childNodes[0].src
      titrePP.textContent = articleVetements.childNodes[2].childNodes[0].textContent
      prixPP.textContent = articleVetements.childNodes[2].childNodes[1].textContent
    }
  }

  function previousSlideVet(){
    if(articleVetements == vetementsSubContainer.firstElementChild){
      articleVetements = vetementsSubContainer.lastElementChild

      imagePP1.src = articleVetements.childNodes[1].childNodes[0].src
      titrePP.textContent = articleVetements.childNodes[2].childNodes[0].textContent
      prixPP.textContent = articleVetements.childNodes[2].childNodes[1].textContent
    }else{
      articleVetements = articleVetements.previousElementSibling

      imagePP1.src = articleVetements.childNodes[1].childNodes[0].src
      titrePP.textContent = articleVetements.childNodes[2].childNodes[0].textContent
      prixPP.textContent = articleVetements.childNodes[2].childNodes[1].textContent
    }
  }
  sizeTaille()
})

function sizeTaille(){
  if(produit.collection == 'chaussures'){
    optionPP2.value = '39'
    optionPP2.textContent = '39'
    optionPP3.value = '40'
    optionPP3.textContent = '40'
    optionPP4.value = '41'
    optionPP4.textContent = '41'
    optionPP5.value = '42'
    optionPP5.textContent = '42'
    optionPP6.value = '43'
    optionPP6.textContent = '43'
  }else{
    optionPP2.value = 'XS'
    optionPP2.textContent = 'XS'
    optionPP3.value = 'S'
    optionPP3.textContent = 'S'
    optionPP4.value = 'M'
    optionPP4.textContent = 'M'
    optionPP5.value = 'L'
    optionPP5.textContent = 'L'
    optionPP6.value = 'XL'
    optionPP6.textContent = 'XL'
  }
}
})

//CONSTRUCTION PAGE PANIER***********************************************************
var panier = document.getElementById('panier')
var panierBackup = document.createElement('div')
panierBackup.id = 'panierBackup'
var panierBanner = document.createElement('panierBanner')
panierBanner.id = 'panierBanner'

var prodBarre = document.createElement('p')
prodBarre.textContent = 'Produit'
var quantite = document.createElement('p')
quantite.textContent = 'Taille / Quantité'
var sousTotal = document.createElement('p')
sousTotal.textContent = 'Sous-Total'

var blocPanier = document.createElement('div')
blocPanier.id = 'blocPanier'
blocPanier.classList.add('empty')

var calculsPanier = document.createElement('div')
calculsPanier.id = 'calculsPanier'

var sousTotalPanier = document.createElement('div')
sousTotalPanier.id = 'sousTotalPanier'
var stTitre = document.createElement('h5')
stTitre.textContent = 'Sous-Total: '
var stPrixPanier = document.createElement('p')

var taxesPanier = document.createElement('div')
taxesPanier.id = 'taxesPanier'
var taxesTitre = document.createElement('h5')
taxesTitre.textContent = 'Taxes: '
var taxesPrixPanier = document.createElement('p')

var totalPanier = document.createElement('div')
totalPanier.id = 'totalPanier'
var totalTitre = document.createElement('h5')
totalTitre.textContent = 'Total: '
var ttlPrixPanier = document.createElement('p')

panier.appendChild(panierBackup)
panierBackup.appendChild(panierBanner)
panierBanner.appendChild(prodBarre)
panierBanner.appendChild(quantite)
panierBanner.appendChild(sousTotal)
panierBackup.appendChild(blocPanier)

var quantPanier = ''

selectPP.addEventListener('input', function(){
  if(selectPP.value != 'Taille'){
    selectPP.classList.remove('incorrect')
  }
})

butPP.addEventListener('click', function(){

  if(selectPP.value != 'Taille'){
    panier.classList.remove('hide')
    panier.classList.add('mettreForme')
    body.classList.add('freeze')
    rideauPP.classList.add('hide')
    rideauPP.classList.remove('mettreForme')
    blocPanier.classList.remove('empty')

    rideauForm.classList.add('hide')
    grandCatalogue.classList.add('hide')
    modalWarning.classList.add('hide')
    modalCompte.classList.add('hide')
    contactContainer.classList.add('hide')
    contactContainer.classList.remove('mettreForme')
    grandCatalogue.classList.add('hide')
    nav.classList.add('hide')

    var blocImagePanier = document.createElement('article')
    var donneesPanier = document.createElement('div')
    donneesPanier.id = 'donneesPanier'
    var aPayerPanier = document.createElement('div')
    aPayerPanier.id = 'aPayerPanier'
    var prixPayerPanier = document.createElement('h5')

    var closePanier = document.createElement('button')
    closePanier.id = 'closePanier'
    closePanier.textContent = 'x'

    var figurePanier = document.createElement('figure')
    var imagePanier = document.createElement('img')
    imagePanier.src = imagePP1.src

    var blocProdPanier = document.createElement('div')
    var nomProduitPanier = document.createElement('h5')
    nomProduitPanier.textContent = titrePP.textContent
    var prixProduitPanier = document.createElement('p')
    prixProduitPanier.textContent = prixPP.textContent

    var qtBlocPanier = document.createElement('div')
    qtBlocPanier.id = 'qtBlocPanier'

    var taillePanier = document.createElement('p')
    taillePanier.classList.add('taillePanier')
    
    var taillePanierSpan = document.createElement('span')
    taillePanierSpan.textContent = 'Taille:  '
    taillePanier.textContent = selectPP.value
    selectPP.value = 'Taille'

    var supprimerProduit = document.createElement('button')
    supprimerProduit.textContent = 'supprimer'

    var quantPanier = document.createElement('p')
    quantPanier.classList.add('quantPanier')
    quantPanier.textContent = qtPP.value
    closePanier.addEventListener('click', function(){
      qtPP.value = 1
    })

    var quantPanierSpan = document.createElement('span')
    quantPanierSpan.textContent = 'Qté:  '

    panierBackup.appendChild(closePanier)

    blocPanier.appendChild(blocImagePanier)
    blocImagePanier.appendChild(donneesPanier)
    donneesPanier.appendChild(figurePanier)

    donneesPanier.appendChild(figurePanier)
    figurePanier.appendChild(imagePanier)

    blocImagePanier.appendChild(donneesPanier)
    donneesPanier.appendChild(blocProdPanier)
    blocProdPanier.appendChild(nomProduitPanier)
    blocProdPanier.appendChild(prixProduitPanier)

    blocImagePanier.appendChild(qtBlocPanier)
    taillePanier.appendChild(taillePanierSpan)
    qtBlocPanier.appendChild(taillePanier)

    qtBlocPanier.appendChild(quantPanier)
    quantPanier.appendChild(quantPanierSpan)
    qtBlocPanier.appendChild(supprimerProduit)

    blocImagePanier.appendChild(aPayerPanier)
    aPayerPanier.appendChild(prixPayerPanier)

    supprimerProduit.addEventListener('click', function(){
      blocImagePanier.innerHTML = ''
      donneesPanier.innerHTML = ''
      aPayerPanier.innerHTML = ''

      calculTotal()
    })

    closePanier.addEventListener('click', function(){
      panier.classList.add('hide')
      panier.classList.remove('mettreForme')
      body.classList.remove('freeze')
    })

    var newArticle = new newProduit(nomProduitPanier.textContent, Number(prixProduitPanier.textContent), imagePanier.src, qtPP.value)

    newTable.push(newArticle)

    // CALCULS PAGE PANIER***********************************************************
    newTable.forEach(function(produit){

      prixPayerPanier.textContent = produit.prix * Number(qtPP.value)
      var prixPayerPanierArrondi = Math.round(prixPayerPanier.textContent*100)/100
      prixPayerPanier.textContent = prixPayerPanierArrondi
    })

    panierBackup.appendChild(calculsPanier)
    calculsPanier.appendChild(sousTotalPanier)
    calculsPanier.appendChild(taxesPanier)
    calculsPanier.appendChild(totalPanier)

    sousTotalPanier.appendChild(stTitre)
    taxesPanier.appendChild(taxesTitre)
    totalPanier.appendChild(totalTitre)

    sousTotalPanier.appendChild(stPrixPanier)
    taxesPanier.appendChild(taxesPrixPanier)
    totalPanier.appendChild(ttlPrixPanier)

    quantPanier.addEventListener('input', function(){

      prixPayerPanier.textContent = Number(prixProduitPanier.textContent * Number(quantPanier.value))
      var prixPayerPanierArrondi = Math.round(prixPayerPanier.textContent*100)/100
      prixPayerPanier.textContent = prixPayerPanierArrondi

      taxesPrixPanier.textContent = (Number(stPrixPanier.textContent) * 0.2)
      var taxesPrixPanierArrondi = Math.round(taxesPrixPanier.textContent*100)/100
      taxesPrixPanier.textContent = taxesPrixPanierArrondi

      ttlPrixPanier.textContent = Number(stPrixPanier.textContent) + Number(taxesPrixPanier.textContent)
      var ttlPrixPanierArrondi = Math.round(ttlPrixPanier.textContent*100)/100
      ttlPrixPanier.textContent = ttlPrixPanierArrondi
    })
  }else{
    selectPP.classList.add('incorrect')
  }

  calculTotal()

  function calculTotal(){
    var allPrixPayer = document.querySelectorAll('#aPayerPanier h5')
    var total = 0

    allPrixPayer.forEach(function(chaquePrix, i){
      total += Number(chaquePrix.textContent)
      stPrixPanier.textContent = Number(total)
    })

    var stPrixPanierArrondi = Math.round(stPrixPanier.textContent*100)/100
    stPrixPanier.textContent = stPrixPanierArrondi

    taxesPrixPanier.textContent = (Number(stPrixPanier.textContent) * 0.2)
    var taxesPrixPanierArrondi = Math.round(taxesPrixPanier.textContent*100)/100
    taxesPrixPanier.textContent = taxesPrixPanierArrondi

    ttlPrixPanier.textContent = Number(stPrixPanier.textContent) + Number(taxesPrixPanier.textContent)
    var ttlPrixPanierArrondi = Math.round(ttlPrixPanier.textContent*100)/100
    ttlPrixPanier.textContent = ttlPrixPanierArrondi
  }
})

//CONSTRUCTION - LES AVIS CLIENT***********************************************************
var avisSlide = document.getElementById('avisSlide')

var titreAvis = document.createElement('h3')
var avisTitreSpan1 = document.createElement('span')
avisTitreSpan1.setAttribute('class', 'black')
avisTitreSpan1.textContent = 'LES'
var avisTitreSpan2 = document.createElement('span')
avisTitreSpan2.setAttribute('class', 'white')
avisTitreSpan2.textContent = 'AVIS'

avisSlide.appendChild(titreAvis)
titreAvis.appendChild(avisTitreSpan1)
titreAvis.appendChild(avisTitreSpan2)

var avisSlideContainer = document.createElement('div')
avisSlideContainer.id = 'avisSlideContainer'

avisSlide.appendChild(avisSlideContainer)

acheteurs.forEach(function(client){
  var article = document.createElement('article')
  article.classList.add('hide')
  var container = document.createElement('div')
  container.setAttribute('class', 'avisContainer')
  var blocClient = document.createElement('div')
  blocClient.setAttribute('class', 'avatar')
  var cadre1 = document.createElement('figure')
  var photoPersonne = document.createElement('img')
  var nomPersonne = document.createElement('h6')

  var part2 = document.createElement('div')
  part2.setAttribute('class', 'bloco2')
  var blocProduit = document.createElement('div')
  blocProduit.setAttribute('class', 'evalProd')
  var cadre2 = document.createElement('figure')
  var photoProduit = document.createElement('img')
  var donnees = document.createElement('div')
  donnees.setAttribute('class', 'data')
  var nomProduit = document.createElement('h6')

  var blocAvis = document.createElement('div')
  var titreAvis = document.createElement('h4')
  var texte = document.createElement('p')

  avisSlideContainer.appendChild(article)
  article.appendChild(container)
  container.appendChild(blocClient)
  blocClient.appendChild(cadre1)
  cadre1.appendChild(photoPersonne)
  blocClient.appendChild(nomPersonne)

  container.appendChild(part2)
  part2.appendChild(blocProduit)
  blocProduit.appendChild(cadre2)
  cadre2.appendChild(photoProduit)
  blocProduit.appendChild(donnees)
  donnees.appendChild(nomProduit)

  part2.appendChild(blocAvis)
  blocAvis.appendChild(titreAvis)
  blocAvis.appendChild(texte)

  photoPersonne.src = client.avatar
  nomPersonne.textContent = client.nom
  photoProduit.src = client.image
  nomProduit.textContent = client.Produit
  titreAvis.textContent = 'AVIS'
  texte.textContent = client.avis

  //GESTION ETOILES LES AVIS***********************************************************
  for(var i=0; i<5; i++){
    if(client.eval<=i){
      var span2 = document.createElement('span')
      span2.classList.add('icon-star-o')
      donnees.appendChild(span2)
    }else{
     var span1 = document.createElement('span')
     span1.classList.add('icon-star')
     donnees.appendChild(span1)
   }
 }

 if(article == avisSlideContainer.firstElementChild){
  article.classList.remove('hide')
}
})

//SLIDE AUTO - LES AVIS CLIENT***********************************************************
var slide = avisSlideContainer.firstElementChild

autoRight()

function autoRight(){
  if(slide == avisSlideContainer.lastElementChild){
    slide.classList.add('centerRightCl')
    setTimeout(function(){
      avisSlideContainer.lastElementChild.classList.add('hide')
      avisSlideContainer.lastElementChild.classList.remove('centerRightCl')
      slide = avisSlideContainer.firstElementChild
      slide.classList.remove('hide')
      slide.classList.add('leftCenterCl')
    }, 1000)
    setTimeout(clearActualSlideR, 1500)
  }else{
    slide.classList.add('centerRightCl')
    setTimeout(function(){
      slide.previousElementSibling.classList.add('hide')
      slide.previousElementSibling.classList.remove('centerRightCl')
      slide.classList.remove('hide')
      slide.classList.add('leftCenterCl')
    }, 1000)
    setTimeout(clearActualSlideR, 1500)
    slide = slide.nextElementSibling
  }
  setTimeout(autoRight, 5000)
}
function clearActualSlideR(){
  slide.classList.remove('leftCenterCl')
}

// CREATION INFOBULLE ACHAT CLIENT***********************************************************
var buyers = document.getElementById('buyers')

acheteurs.forEach(function(personne){
  var article = document.createElement('article')
  var closeBubble = document.createElement('button')
  closeBubble.id = 'closeBubble'
  closeBubble.textContent = 'x'
  var container = document.createElement('div')
  var figure = document.createElement('figure')
  var img = document.createElement('img')
  var blocTexte = document.createElement('div')
  var texte = document.createElement('p')
  article.setAttribute('class', 'hide')

  buyers.appendChild(article)
  article.appendChild(container)
  blocTexte.appendChild(closeBubble)
  container.appendChild(figure)
  container.appendChild(blocTexte)
  figure.appendChild(img)
  blocTexte.appendChild(texte)

// CLOSE BUBBLE CLIENT***********************************************************
  closeBubble.addEventListener('click', function(){
    buyers.classList.add('hide')
  })

  if(buyers.firstElementChild.classList.contains('hide')){
    buyers.firstElementChild.classList.remove('hide')
  }

  img.src = personne.image
  texte.textContent = personne.nom + ', de ' + personne.local + ', vient d\'acheter l\'' + personne.Produit;
})

// FONCTIONNEMENT SLIDE AUTO INFOBULLE***********************************************************
var currentSlide = buyers.firstElementChild

buyerSlide()

function buyerSlide(){
  if(currentSlide == buyers.lastElementChild){
    setTimeout(clearFirst, 5000)
    currentSlide.classList.add('animOpacityIn')
    setTimeout (function(){
      currentSlide = buyers.firstElementChild
      currentSlide.classList.remove('hide')
      currentSlide.classList.add('animOpacityOut')
    }, 5000)
    setTimeout(clearLast, 3000)
  }else{
    setTimeout(clearFirst, 5000)
    currentSlide.classList.add('animOpacityIn')
    setTimeout (function(){
      currentSlide = currentSlide.nextElementSibling
      currentSlide.classList.remove('hide')
      currentSlide.classList.add('animOpacityOut')
    }, 5000)
    setTimeout(clearLast, 3000)
  }
  setTimeout(buyerSlide, 10000)

  function clearFirst(){
    currentSlide.classList.add('hide')
    currentSlide.classList.remove('animOpacityIn')
  }
  function clearLast(){
    currentSlide.classList.remove('animOpacityOut')
  }
}

// CREATION RETOUR***********************************************************
var retour = document.getElementById('retour')

var retourA = document.createElement('a')
retourA.setAttribute('class', 'icon-arrow-up:before')
retourA.setAttribute('href', '#')
retour.appendChild(retourA)

// CREATION MODAL REPONSE***********************************************************
var modalEnsemble = document.createElement('div')
modalEnsemble.setAttribute('id', 'modalEnsemble')
var modalContainer = document.createElement('article')
modalContainer.setAttribute('id', 'modalContainer')
var modalClose = document.createElement('button')
modalClose.setAttribute('id', 'modalClose')
modalClose.textContent = 'x'
var modalText = document.createElement('p')

modalWarning.appendChild(modalEnsemble)
modalEnsemble.appendChild(modalContainer)
modalContainer.appendChild(modalClose)
modalContainer.appendChild(modalText)

modalClose.addEventListener('click', function(){
  modalWarning.classList.add('hide')
  body.classList.remove('freeze')
})

// CREATION FORMULAIRES CONTACT***********************************************************
var contactContainer = document.querySelector('#contactContainer')

var contactInfo = document.createElement('article')
contactInfo.classList.add('contactInfo')
var contactBloc = document.createElement('div')
var contactCadre = document.createElement('figure')
var contactImg = document.createElement('img')
contactImg.src = 'assets/images/sailboat.jpg'
var contactTitre = document.createElement('h2')
contactTitre.textContent = 'Coordonnées'
var shopTitle = document.createElement('h3')
shopTitle.textContent = 'E-Shop'
var contactAddress = document.createElement('address')
contactAddress.textContent = '2912 Meadowbrook Road, os Angeles, CA 90017'
contactAddress.classList.add('icon-home')
var contactMail = document.createElement('a')
contactMail.href = 'mailto:lorem@ipsum.com'
contactMail.textContent = 'lorem@ipsum.com'
contactMail.classList.add('icon-envelope-o')
var contactPhone = document.createElement('a')
contactPhone.href = 'callto: 310-386-1623">310-386-1623'
contactPhone.textContent = '310-386-1623'
contactPhone.classList.add('icon-phone')
var infoBut = document.createElement('button')
infoBut.classList.add('icon-arrow-circle-up')
infoBut.textContent = 'Contactez-nous'

var contactBox = document.createElement('article')
contactBox.classList.add('contactBox')
contactBox.classList.add('hide')
var contactForm = document.createElement('form')
contactForm.name = 'contactForm'
var field1 = document.createElement('fieldset')
var field2 = document.createElement('fieldset')
var field3 = document.createElement('fieldset')
var field4 = document.createElement('fieldset')
var field5 = document.createElement('fieldset')
var contactNomInput = document.createElement('input')
contactNomInput.type = 'text'
contactNomInput.name = 'nom'
contactNomInput.placeholder = 'Nom'
var contactPrenomInput = document.createElement('input')
contactPrenomInput.type = 'text'
contactPrenomInput.name = 'Prenom'
contactPrenomInput.placeholder = 'Prénom'
var contactMailInput = document.createElement('input')
contactMailInput.type = 'email'
contactMailInput.name = 'email'
contactMailInput.placeholder = 'Email'
var contactPhoneInput = document.createElement('input')
contactPhoneInput.type = 'tel'
contactPhoneInput.name = 'phone'
contactPhoneInput.placeholder = 'Téléphone'
contactPhoneInput.setAttribute('maxlength', '10')
contactPhoneInput.setAttribute('minlength', '10')
contactPhoneInput.pattern = '/\d/'
var contactMessageInput = document.createElement('textarea')
contactMessageInput.placeholder = 'Votre Message'
var sendMessage = document.createElement('input')
sendMessage.type = 'submit'
sendMessage.id = 'sendMessage'
sendMessage.value = 'ENVOYER'

contactContainer.appendChild(contactInfo)
contactInfo.appendChild(contactCadre)
contactCadre.appendChild(contactImg)
contactInfo.appendChild(contactBloc)
contactBloc.appendChild(contactTitre)
contactBloc.appendChild(shopTitle)
contactBloc.appendChild(contactAddress)
contactBloc.appendChild(contactMail)
contactBloc.appendChild(contactPhone)
contactInfo.appendChild(infoBut)

contactContainer.appendChild(contactBox)
contactBox.appendChild(contactForm)
contactForm.appendChild(field1)
field1.appendChild(contactNomInput)
contactForm.appendChild(field2)
field2.appendChild(contactPrenomInput)
contactForm.appendChild(field3)
field3.appendChild(contactMailInput)
contactForm.appendChild(field4)
field4.appendChild(contactPhoneInput)
contactForm.appendChild(field5)
field5.appendChild(contactMessageInput)
contactForm.appendChild(sendMessage)

var contactBox = document.querySelector('.contactBox')

infoBut.addEventListener('click', function(){
  if(contactBox.classList.contains('hide')){
    contactBox.classList.add('contactLiftUpNormalCl')
    contactCadre.classList.add('opacityUpCl')
    contactBloc.classList.add('contactLiftUpCl')
    infoBut.classList.add('contactLiftUpPresqueCl')

    contactBox.classList.remove('hide')
    infoBut.classList.remove('icon-arrow-circle-up')
    infoBut.classList.add('icon-arrow-circle-down')
    infoBut.textContent = 'Nos Coordonnées'

  }else{
    contactBox.classList.remove('contactLiftUpNormalCl')
    contactCadre.classList.remove('opacityUpCl')
    contactBloc.classList.remove('contactLiftUpCl')
    infoBut.classList.remove('contactLiftUpPresqueCl')

    contactBox.classList.add('contactLiftDownNormalCl')
    contactCadre.classList.add('opacityDownCl')
    contactBloc.classList.add('contactLiftDownCl')
    infoBut.classList.add('contactLiftDownPresqueCl')

    infoBut.classList.add('icon-arrow-circle-up')
    infoBut.classList.remove('icon-arrow-circle-down')
    infoBut.textContent = 'Contactez-nous'

    setTimeout(function(){
      contactBox.classList.add('hide')
      contactBox.classList.remove('contactLiftDownNormalCl')
      contactCadre.classList.remove('opacityDownCl')
      contactBloc.classList.remove('contactLiftDownCl')
      infoBut.classList.remove('contactLiftDownPresqueCl')
    },3000)
  }
})

// CREATION FORMULAIRES CONNEXION / INSCRIPTION***********************************************************
var rideauForm = document.getElementById('rideauForm')

//bloc boutons connexion / inscription / fermer***********************************************************
var formEnsenble = document.createElement('div')
formEnsenble.setAttribute('id', 'formEnsenble')
var formButtonBloc = document.createElement('div')
formButtonBloc.setAttribute('id', 'formButtonBloc')
var conChoice = document.createElement('button')
var underline = document.createElement('span')
var underline1 = document.createElement('span')
conChoice.setAttribute('id', 'conChoice')
conChoice.setAttribute('class', 'active')
underline.textContent = 'CONNEXION'
var insChoice = document.createElement('button')
insChoice.setAttribute('id', 'insChoice')
underline1.textContent = 'INSCRIPTION'
var closeForm = document.createElement('button')
closeForm.setAttribute('id', 'closeForm')
closeForm.textContent = 'x'

//bloc formulaire connexion***********************************************************
var connexionForm = document.createElement('section')
connexionForm.setAttribute('id', 'connexionForm')
var connexionFormulaire = document.createElement('form')
connexionFormulaire.setAttribute('name', 'connexionFormulaire')
var fieldset1 = document.createElement('fieldset')
var fieldset2 = document.createElement('fieldset')
var pseudoConInput = document.createElement('input')
pseudoConInput.setAttribute('type', 'text')
pseudoConInput.setAttribute('name', 'conPseudo')
pseudoConInput.setAttribute('placeholder', 'PSEUDO')

var passwordConInput = document.createElement('input')
passwordConInput.setAttribute('type', 'password')
passwordConInput.setAttribute('name', 'conMDP')
passwordConInput.setAttribute('placeholder', 'MOT DE PASSE')

var conSubmit = document.createElement('input')
conSubmit.setAttribute('type', 'submit')
conSubmit.setAttribute('name', 'Envoyer')
conSubmit.setAttribute('id', 'consend')
conSubmit.setAttribute('value', 'CONFIRMER')

var forgotPwd = document.createElement('a')
forgotPwd.setAttribute('href', '')
forgotPwd.textContent = 'Avez-vous oublié votre mot de passe?'

rideauForm.appendChild(formEnsenble)
formEnsenble.appendChild(formButtonBloc)
formButtonBloc.appendChild(conChoice)
conChoice.appendChild(underline)
formButtonBloc.appendChild(insChoice)
insChoice.appendChild(underline1)
formButtonBloc.appendChild(closeForm)

formEnsenble.appendChild(connexionForm)
connexionForm.appendChild(connexionFormulaire)
connexionFormulaire.appendChild(fieldset1)
fieldset1.appendChild(pseudoConInput)
connexionFormulaire.appendChild(fieldset2)
fieldset2.appendChild(passwordConInput)
connexionFormulaire.appendChild(conSubmit)
connexionFormulaire.appendChild(forgotPwd)

//bloc formulaire inscription***********************************************************
var inscriptionForm = document.createElement('section')
inscriptionForm.setAttribute('class', 'hide')
var inscriptionFormulaire = document.createElement('form')
inscriptionFormulaire.id = 'inscriptionFormulaire'
inscriptionFormulaire.setAttribute('name', 'inscriptionFormulaire')
var fieldset3 = document.createElement('fieldset')
var fieldset4 = document.createElement('fieldset')
var fieldset5 = document.createElement('fieldset')
var fieldset6 = document.createElement('fieldset')
var fieldset7 = document.createElement('fieldset')
fieldset7.setAttribute('id', 'checkboxBloc')
var nomInsInput = document.createElement('input')
nomInsInput.setAttribute('type', 'text')
nomInsInput.setAttribute('name', 'nomIns')
nomInsInput.setAttribute('placeholder', 'NOM')
var prenomInsInput = document.createElement('input')
prenomInsInput.setAttribute('type', 'text')
prenomInsInput.setAttribute('name', 'prenomIns')
prenomInsInput.setAttribute('placeholder', 'PRENOM')
var pseudoInsInput = document.createElement('input')
pseudoInsInput.setAttribute('type', 'text')
pseudoInsInput.setAttribute('name', 'pseudoIns')
pseudoInsInput.setAttribute('placeholder', 'PSEUDO')
var passwordInsInput = document.createElement('input')
passwordInsInput.setAttribute('type', 'password')
passwordInsInput.setAttribute('name', 'passwordIns')
passwordInsInput.setAttribute('placeholder', 'MOT DE PASSE')
var sendIns = document.createElement('input')
sendIns.setAttribute('type', 'submit')
sendIns.setAttribute('name', 'sendIns')
sendIns.setAttribute('id', 'sendIns')
sendIns.setAttribute('value', 'CONFIRMER')
var labelCheck = document.createElement('label')
labelCheck.setAttribute('for', 'check')
labelCheck.classList.add('icon-square-o')
var checkbox = document.createElement('input')
checkbox.setAttribute('type', 'checkbox')
checkbox.setAttribute('name', 'checkIns')
checkbox.id = 'check'
var terms = document.createElement('p')
terms.textContent = 'J\'ai lu et j\'accepte les conditions generales'

formEnsenble.appendChild(inscriptionForm)
inscriptionForm.appendChild(inscriptionFormulaire)
inscriptionFormulaire.appendChild(fieldset3)
fieldset3.appendChild(nomInsInput)
inscriptionFormulaire.appendChild(fieldset4)
fieldset4.appendChild(prenomInsInput)
inscriptionFormulaire.appendChild(fieldset5)
fieldset5.appendChild(pseudoInsInput)
inscriptionFormulaire.appendChild(fieldset6)
fieldset6.appendChild(passwordInsInput)
inscriptionFormulaire.appendChild(sendIns)
inscriptionFormulaire.appendChild(fieldset7)
fieldset7.appendChild(checkbox)

fieldset7.appendChild(labelCheck)
labelCheck.appendChild(terms)

checkbox.addEventListener('input', function(){
  if(checkbox.checked){
    labelCheck.classList.replace('icon-square-o', 'icon-check')
  }else{
    labelCheck.classList.replace('icon-check', 'icon-square-o')
  }
})

// VERIF FORMULAIRES***********************************************************

// INSCRIPTION***********************************************************
nomInsInput.addEventListener('blur', controlNomIns)
prenomInsInput.addEventListener('blur', controlPrenomIns)
pseudoInsInput.addEventListener('blur', controlPseudoIns)
passwordInsInput.addEventListener('blur', controlPasswordIns)

function controlNomIns(){
  if (!regexNom.test(nomInsInput.value)){
    nomInsInput.classList.add('incorrect')
    return false
  }else{
    nomInsInput.classList.remove('incorrect')
    return true
  }
}
function controlPrenomIns(){
  if (!regexPrenom.test(prenomInsInput.value)){
    prenomInsInput.classList.add('incorrect')
    return false
  }else{
    prenomInsInput.classList.remove('incorrect')
    return true
  }
}
function controlPseudoIns(){
  if (!regexPseudo.test(pseudoInsInput.value)){
    pseudoInsInput.classList.add('incorrect')
    return false
  }else{
    pseudoInsInput.classList.remove('incorrect')
    return true
  }
}
function controlPasswordIns(){
  if (!regexPassword.test(passwordInsInput.value)){
    passwordInsInput.classList.add('incorrect')
    return false
  }else{
    passwordInsInput.classList.remove('incorrect')
    return true
  }
}
function controlCheckboxIns(){
  if (!checkbox.checked){
    terms.classList.add('incorrect')
    return false
  }else{
    terms.classList.remove('incorrect')
    return true
  }
}

// CONNEXION***********************************************************
pseudoConInput.addEventListener('blur', controlPseudoCon)
passwordConInput.addEventListener('blur', controlPasswordCon)

function controlPseudoCon(){
  if (!regexPseudo.test(pseudoConInput.value)){
    pseudoConInput.classList.add('incorrect')
    return false
  }else{
    pseudoConInput.classList.remove('incorrect')
    return true
  }
}
function controlPasswordCon(){
  if (!regexPassword.test(passwordConInput.value)){
    passwordConInput.classList.add('incorrect')
    return false
  }else{
    passwordConInput.classList.remove('incorrect')
    return true
  }
}

// VALIDATION FORMULAIRES***********************************************************

// iNSCRIPTION***********************************************************
sendIns.addEventListener('click', validerIns)

function validerIns(e){
  e.preventDefault();
  if(controlNomIns() && controlPrenomIns() && controlPseudoIns() && controlPasswordIns() && controlCheckboxIns()){

    var nouveauClient = new login(nomInsInput.value, prenomInsInput.value, pseudoInsInput.value, passwordInsInput.value)
    client.push(nouveauClient)

    connexionForm.classList.remove('hide')
    inscriptionForm.classList.add('hide')
    conChoice.classList.add('active')
    insChoice.classList.remove('active')
    modalWarning.classList.remove('hide')
    modalText.textContent = 'Inscription Validée!!'

    nomInsInput.value = ''
    prenomInsInput.value = ''
    pseudoInsInput.value = ''
    passwordInsInput.value = ''
    labelCheck.classList.remove('icon-square')
    labelCheck.classList.add('icon-square-o')

    return true
  }else{
    return false
  }
}

// CONTACT***********************************************************
sendMessage.addEventListener('click', validerContact)

function validerContact(e){
  e.preventDefault();
  if(controlNomContact() && controlPrenomContact() && controlEmail() && controlNumero()){
    modalWarning.classList.remove('hide')
    modalText.textContent = 'Merci de votre message!!!'
    contactNomInput.value = ''
    contactPrenomInput.value = ''
    contactPhoneInput.value = ''
    contactMailInput.value = ''
    contactMessageInput.value = ''
    return true
  }else{
    modalWarning.classList.remove('hide')
    modalText.textContent = 'Votre message n\'a pas été envoyé!!!'
    return false
  }
}

contactNomInput.addEventListener('blur', controlNomContact)
contactPrenomInput.addEventListener('blur', controlPrenomContact)
contactPhoneInput.addEventListener('blur', controlNumero)
contactMailInput.addEventListener('blur', controlEmail)

function controlNomContact(){
  if (!regexNom.test(contactNomInput.value)){
    contactNomInput.classList.add('incorrect')
    return false
  }else{
    contactNomInput.classList.remove('incorrect')
    return true
  }
}
function controlPrenomContact(){
  if (!regexPrenom.test(contactPrenomInput.value)){
    contactPrenomInput.classList.add('incorrect')
    return false
  }else{
    contactPrenomInput.classList.remove('incorrect')
    return true
  }
}
function controlNumero(){
  if (!regexNumber.test(contactPhoneInput.value)){
    contactPhoneInput.classList.add('incorrect')
    return false
  }else{
    contactPhoneInput.classList.remove('incorrect')
    return true
  }
}
function controlEmail(){
  if (!regexEmail.test(contactMailInput.value)){
    contactMailInput.classList.add('incorrect')
    return false
  }else{
    contactMailInput.classList.remove('incorrect')
    return true
  }
}

// CREATION FOOTER***********************************************************
var footerGrandBloc = document.createElement('div')
footerGrandBloc.id = 'footerGrandBloc'

var footerBloc1 = document.createElement('div')
var footerTitre1 = document.createElement('h4')
footerTitre1.textContent = 'MON COMPTE'
var footerList1 = document.createElement('ul')
var footerLi1 = document.createElement('li')
var footerLi2 = document.createElement('li')
var footerLi3 = document.createElement('li')
var footerLi4 = document.createElement('li')
var footerLi5But = document.createElement('li')
var li1But = document.createElement('button')
li1But.textContent = 'Mon compte'
li1But.id = 'footerCompte'
li1But.classList.add('hide')
var li2But = document.createElement('button')
li2But.textContent = 'Panier'
li2But.id = 'footerPanier'
var li3But = document.createElement('button')
li3But.textContent = 'Wishlist'
li3But.id = 'footerWishlist'
li3But.classList.add('hide')
var li4But = document.createElement('button')
li4But.textContent = 'Contact'
li4But.id = 'footerContact'
var li5But = document.createElement('button')
li5But.textContent = 'Déconnexion'
li5But.id = 'footerDeconnect'
li5But.classList.add('hide')

var footerBloc2 = document.createElement('div')
var footerTitre2 = document.createElement('h4')
footerTitre2.textContent = 'INFORMATION'
var footerList2 = document.createElement('ul')
var footerLi5 = document.createElement('li')
var footerLi6 = document.createElement('li')
var footerLi7 = document.createElement('li')
var footerLi8 = document.createElement('li')
var li5Lien = document.createElement('a')
li5Lien.textContent = 'Privacy Page'
li5Lien.href = ''
var li6Lien = document.createElement('a')
li6Lien.textContent = 'A Propos'
li6Lien.href = ''
var li7Lien = document.createElement('a')
li7Lien.textContent = 'Careers'
li7Lien.href = ''
var li8Lien = document.createElement('a')
li8Lien.textContent = 'Livraison'
li8Lien.href = ''

var footerBloc3 = document.createElement('div')
var footerTitre3 = document.createElement('h4')
footerTitre3.textContent = 'SERVICE CLIENT'
var footerList3 = document.createElement('ul')
var footerLi9 = document.createElement('li')
var footerLi10 = document.createElement('li')
var footerLi11 = document.createElement('li')
var footerLi12 = document.createElement('li')
var li9Lien = document.createElement('a')
li9Lien.textContent = 'Aide & Contact'
li9Lien.href = ''
var li10Lien = document.createElement('a')
li10Lien.textContent = 'SAV'
li10Lien.href = ''
var li11Lien = document.createElement('a')
li11Lien.textContent = 'Politique de Livraison'
li11Lien.href = ''
var li12Lien = document.createElement('a')
li12Lien.textContent = 'Terms & Conditions'
li12Lien.href = ''

var reseauxFooter = document.createElement('div')
reseauxFooter.id = 'reseauxFooter'
var footerTitre4 = document.createElement('h4')
footerTitre4.textContent = 'SUIVEZ-NOUS'
var footerList4 = document.createElement('ul')
var footerLi13 = document.createElement('li')
var footerLi14 = document.createElement('li')
var footerLi15 = document.createElement('li')
var li13Lien = document.createElement('a')
li13Lien.setAttribute('class', 'icon-facebook')
li13Lien.setAttribute('href', 'www.facebook.com')
var li14Lien = document.createElement('a')
li14Lien.setAttribute('class', 'icon-instagram')
li14Lien.setAttribute('href', 'www.instagram.com')
var li15Lien = document.createElement('a')
li15Lien.setAttribute('class', 'icon-twitter')
li15Lien.setAttribute('href', 'www.twitter.com')

var footerLogo = document.createElement('div')
footerLogo.id = 'footerLogo'
var logoFooter = document.createElement('h2')
logoFooter.id = 'logoFooter'
var logoFooterSpan1 = document.createElement('span')
logoFooterSpan1.setAttribute('class', 'black1')
logoFooterSpan1.textContent = 'E'
var logoFooterSpan2 = document.createElement('span')
logoFooterSpan2.setAttribute('class', 'white1')
logoFooterSpan2.textContent = 'SHOP'

var rights = document.createElement('p')
rights.textContent = '© Poetta 2023 PoettaTech WDS All rights reserved'

footer.appendChild(footerGrandBloc)
footerGrandBloc.appendChild(footerBloc1)
footerGrandBloc.appendChild(footerBloc2)
footerGrandBloc.appendChild(footerBloc3)
footerGrandBloc.appendChild(reseauxFooter)

footerBloc1.appendChild(footerTitre1)
footerBloc1.appendChild(footerList1)
footerList1.appendChild(footerLi2)
footerList1.appendChild(footerLi4)
footerList1.appendChild(footerLi1)
footerList1.appendChild(footerLi3)
footerList1.appendChild(footerLi5But)
footerLi1.appendChild(li1But)
footerLi2.appendChild(li2But)
footerLi3.appendChild(li3But)
footerLi4.appendChild(li4But)
footerLi5But.appendChild(li5But)

footerBloc2.appendChild(footerTitre2)
footerBloc2.appendChild(footerList2)
footerList2.appendChild(footerLi5)
footerList2.appendChild(footerLi6)
footerList2.appendChild(footerLi7)
footerList2.appendChild(footerLi8)
footerLi5.appendChild(li5Lien)
footerLi6.appendChild(li6Lien)
footerLi7.appendChild(li7Lien)
footerLi8.appendChild(li8Lien)

footerBloc3.appendChild(footerTitre3)
footerBloc3.appendChild(footerList3)
footerList3.appendChild(footerLi9)
footerList3.appendChild(footerLi10)
footerList3.appendChild(footerLi11)
footerList3.appendChild(footerLi12)
footerLi9.appendChild(li9Lien)
footerLi10.appendChild(li10Lien)
footerLi11.appendChild(li11Lien)
footerLi12.appendChild(li12Lien)

reseauxFooter.appendChild(footerTitre4)
reseauxFooter.appendChild(footerList4)
reseauxFooter.appendChild(footerLogo)
footerLogo.appendChild(logoFooter)
logoFooter.appendChild(logoFooterSpan1)
logoFooter.appendChild(logoFooterSpan2)
footerList4.appendChild(footerLi13)
footerList4.appendChild(footerLi14)
footerList4.appendChild(footerLi15)
footerLi13.appendChild(li13Lien)
footerLi14.appendChild(li14Lien)
footerLi15.appendChild(li15Lien)

footer.appendChild(rights)

//SLIDE OPPORTUNITES ***********************************************************
var actualSlide = promoContainer.firstElementChild

if(promoContainer.firstElementChild.classList.contains('hide')){
  promoContainer.firstElementChild.classList.remove('hide')
}

rightBut.addEventListener('click', function(){
  if(actualSlide == promoContainer.lastElementChild){
    actualSlide.classList.add('centerRightCl')
    setTimeout(function(){
      promoContainer.lastElementChild.classList.add('hide')
      promoContainer.lastElementChild.classList.remove('centerRightCl')
      actualSlide.classList.remove('leftCenterCl')
      actualSlide = promoContainer.firstElementChild
      actualSlide.classList.add('leftCenterCl')
      actualSlide.classList.remove('hide')
    }, 1000)
    setTimeout(clearCurrentSlideR, 1500)
  }else{
    actualSlide.classList.add('centerRightCl')
    setTimeout(function(){
      actualSlide.previousElementSibling.classList.add('hide')
      actualSlide.previousElementSibling.classList.remove('centerRightCl')
      actualSlide.classList.remove('hide')
    }, 1000)
    actualSlide.nextElementSibling.classList.add('leftCenterCl')
    setTimeout(clearCurrentSlideR, 1500)
    actualSlide = actualSlide.nextElementSibling
  }
})

leftBut.addEventListener('click', function(){
 if(actualSlide == promoContainer.firstElementChild){
  actualSlide.classList.add('rightCenterCl')
  setTimeout(function(){
    promoContainer.firstElementChild.classList.add('hide')
    promoContainer.firstElementChild.classList.remove('rightCenterCl')
    actualSlide = promoContainer.lastElementChild
    actualSlide.classList.add('centerLeftCl')
    actualSlide.classList.remove('hide')
  }, 1000)

  setTimeout(clearCurrentSlideL, 1500)
}else{
  actualSlide.classList.add('rightCenterCl')
  setTimeout(function(){
    actualSlide.nextElementSibling.classList.add('hide')
    actualSlide.nextElementSibling.classList.remove('rightCenterCl')
    actualSlide.classList.remove('hide')
  }, 1000)

  actualSlide.previousElementSibling.classList.add('centerLeftCl')
  setTimeout(clearCurrentSlideL, 1500)
  actualSlide = actualSlide.previousElementSibling
}
})

function clearCurrentSlideR(){
  actualSlide.classList.remove('leftCenterCl')
}

function clearCurrentSlideL(){
  actualSlide.classList.remove('centerLeftCl')
}

// EVENT LISTENER***********************************************************
//COLLECTIONS EVENT LISTENER
collArticle1.addEventListener('click', function(){
  if(chaussures.classList.contains('hide')){
    chaussures.classList.remove('hide')
    body.classList.add('freeze')
  }
})

collArticle2.addEventListener('click', function(){
  if(vetements.classList.contains('hide')){
    vetements.classList.remove('hide')
    body.classList.add('freeze')
  }
})

//DECONNEXION BUTTON
var decContainer = document.createElement('div')
var decOui = document.createElement('button')
var decNon = document.createElement('button')

deconnexionMenu.addEventListener('click', function(){

  nav.classList.add('hide')

  modalWarning.classList.remove('hide')
  modalText.textContent = 'Voulez-vous vous déconnecter ?'

  decOui.id = 'decOui'
  decOui.textContent = 'OUI'
  decNon.id = 'decNon'
  decNon.textContent = 'NON'

  modalContainer.appendChild(decContainer)
  decContainer.appendChild(decOui)
  decContainer.appendChild(decNon)
})

footerDeconnect.addEventListener('click', function(){

  modalWarning.classList.remove('hide')
  modalText.textContent = 'Voulez-vous vous déconnecter!!'

  decOui.id = 'decOui'
  decOui.textContent = 'OUI'
  decNon.id = 'decNon'
  decNon.textContent = 'NON'

  modalContainer.appendChild(decContainer)
  decContainer.appendChild(decOui)
  decContainer.appendChild(decNon)
})

decOui.addEventListener('click', function(){
  utilisateurDeconnexion()
  removeDecModal()
  modalWarning.classList.add('hide')
})

decNon.addEventListener('click', function(){
  removeDecModal()
  modalWarning.classList.add('hide')
})

// bouton LOGO header***********************************************************
blocLogo.addEventListener('click', function(){
  rideauForm.classList.add('hide')
  grandCatalogue.classList.add('hide')
  modalWarning.classList.add('hide')
  modalCompte.classList.add('hide')
  rideauPP.classList.add('hide')
  vetements.classList.add('hide')
  chaussures.classList.add('hide')
  rideauPP.classList.remove('mettreForme')
  panier.classList.add('hide')
  panier.classList.remove('mettreForme')
  blocPanier.textContent = ''
  contactContainer.classList.add('hide')
  contactContainer.classList.remove('mettreForme')
  nav.classList.add('hide')
  body.classList.remove('freeze')
})

// bouton MENU header***********************************************************
navBut.addEventListener('click', function(){
  if(nav.classList.contains('hide')){
    nav.classList.add('.lightSpeedIn')
    nav.classList.remove('hide')
    rideauForm.classList.add('hide')
    grandCatalogue.classList.add('hide')
    modalWarning.classList.add('hide')
    modalCompte.classList.add('hide')
    vetements.classList.add('hide')
    chaussures.classList.add('hide')
    rideauPP.classList.add('hide')
    rideauPP.classList.remove('mettreForme')
    panier.classList.add('hide')
    panier.classList.remove('mettreForme')
    contactContainer.classList.add('hide')
    contactContainer.classList.remove('mettreForme')
    body.classList.add('freeze')

    setTimeout(function(){
      nav.classList.remove('.lightSpeedIn')
    },2000)
  }else{

    nav.classList.add('hide')
    body.classList.remove('freeze')
  }
})

compteIcon.addEventListener('click', function(){
  if(modalCompte.classList.contains('hide')){
    monCompte()
    nav.classList.add('hide')
    rideauForm.classList.add('hide')
    grandCatalogue.classList.add('hide')
    modalWarning.classList.add('hide')
    rideauPP.classList.add('hide')
    rideauPP.classList.remove('mettreForme')
    panier.classList.add('hide')
    panier.classList.remove('mettreForme')
    contactContainer.classList.add('hide')
    contactContainer.classList.remove('mettreForme')
    body.classList.add('freeze')
  }else{
    modalCompte.classList.add('hide')
    body.classList.remove('freeze')
  }  
})

//bouton MON COMPTE dans le menu***********************************************************
compteMenu.addEventListener('click', function(){
  if(modalCompte.classList.contains('hide')){
    monCompte()

    nav.classList.add('hide')
    rideauForm.classList.add('hide')
    grandCatalogue.classList.add('hide')
    modalWarning.classList.add('hide')
    rideauPP.classList.add('hide')
    rideauPP.classList.remove('mettreForme')
    panier.classList.add('hide')
    panier.classList.remove('mettreForme')
    contactContainer.classList.add('hide')
    contactContainer.classList.remove('mettreForme')
    body.classList.add('freeze')
  }else{
    modalCompte.classList.add('hide')
    body.classList.remove('freeze')
  }
})

//bouton EXPLOREZ catalogue landingPage***********************************************************
exploreBut.addEventListener('click', function(){
  grandCatalogue.classList.remove('hide')
  rideauForm.classList.add('hide')
  modalWarning.classList.add('hide')
  modalCompte.classList.add('hide')
  rideauPP.classList.add('hide')
  rideauPP.classList.remove('mettreForme')
  panier.classList.add('hide')
  panier.classList.remove('mettreForme')
  contactContainer.classList.add('hide')
  contactContainer.classList.remove('mettreForme')
  nav.classList.add('hide')
  body.classList.add('freeze')
})

//bouton MON COMPTE dans le FOOTER***********************************************************
li1But.addEventListener('click', function(){
  if(modalCompte.classList.contains('hide')){
    monCompte()
    nav.classList.add('hide')
  }else{
    modalCompte.classList.add('hide')
    body.classList.remove('freeze')
  }
})

//bouton CONNEXION dans le menu***********************************************************
connexionMenu.addEventListener('click', function(){
  if(rideauForm.classList.contains('hide')){
    rideauForm.classList.remove('hide')
    grandCatalogue.classList.add('hide')
    modalWarning.classList.add('hide')
    modalCompte.classList.add('hide')
    vetements.classList.add('hide')
    chaussures.classList.add('hide')
    rideauPP.classList.add('hide')
    rideauPP.classList.remove('mettreForme')
    panier.classList.add('hide')
    panier.classList.remove('mettreForme')
    contactContainer.classList.add('hide')
    contactContainer.classList.remove('mettreForme')
    nav.classList.add('hide')
    body.classList.add('freeze')
    nav.classList.add('hide')
  }
})

// bouton CONNEXION du formulaire client***********************************************************
conChoice.addEventListener('click', function(){
  if(connexionForm.classList.contains('hide')){
    connexionForm.classList.remove('hide')
    inscriptionForm.classList.add('hide')
    conChoice.classList.add('active')
    insChoice.classList.remove('active')
  }
})

// bouton INSCRIPTION du formulaire client***********************************************************
insChoice.addEventListener('click', function(){
  if(inscriptionForm.classList.contains('hide')){
    inscriptionForm.classList.remove('hide')
    connexionForm.classList.add('hide')
    conChoice.classList.remove('active')
    insChoice.classList.add('active')
  }
})

// bouton FERMER du formulaire client***********************************************************
closeForm.addEventListener('click', function(){
  rideauForm.classList.add('hide')
  body.classList.remove('freeze')
})

// bouton SUBMIT du formulaire CONNEXION***********************************************************
conSubmit.addEventListener('click', function(e){
  e.preventDefault()
  if(controlPseudoCon() && controlPasswordCon()){
    utilisateurConnexion()
    return true
  }else{
    modalWarning.classList.remove('hide')
    modalText.textContent = 'Veilleuz corriger les erreurs!!!'
    return false
  }
})

// bouton "Mes Mouvements" de MON COMPTE***********************************************************
mouvBut.addEventListener('click', function(){
  if(mouvements.classList.contains('hide')){
    mouvements.classList.remove('hide')
    wishListCompte.classList.add('hide')
    wishListCompte.classList.remove('mettreForme')
    monId.classList.add('hide')
    mouvBut.classList.add('active')
    wishBut.classList.remove('active')
  }else{
    mouvements.classList.add('hide')
    monId.classList.remove('hide')
    mouvBut.classList.remove('active')
  }
})

// bouton "Ma WishList" de MON COMPTE***********************************************************
wishBut.addEventListener('click', function(){
  wishListCompte.innerHTML = ''
  if(wishListCompte.classList.contains('hide')){
    wishListCompte.classList.remove('hide')
    wishListCompte.classList.add('mettreForme')

    var wishBloc1 = document.createElement('div')

    wishTable.forEach(function(chaqueWish){

      var wishBloc2 = document.createElement('div')
      wishBloc2.classList.add('wishBloc2')
      var figureWish = document.createElement('figure')
      var imageWish = document.createElement('img')
      var wishBloc3 = document.createElement('div')
      var nomProduitWish = document.createElement('h5')
      var prixProduitWish = document.createElement('h5')

      wishListCompte.appendChild(wishBloc1)

      wishBloc1.appendChild(wishBloc2)

      wishBloc2.appendChild(figureWish)
      figureWish.appendChild(imageWish)
      wishBloc2.appendChild(wishBloc3)
      wishBloc3.appendChild(nomProduitWish)
      wishBloc3.appendChild(prixProduitWish)
      nomProduitWish.textContent = chaqueWish.nom
      prixProduitWish.textContent = chaqueWish.prix
      imageWish.src = chaqueWish.image
    })

    mouvements.classList.add('hide')
    monId.classList.add('hide')
    wishBut.classList.add('active')
    mouvBut.classList.remove('active')
    if(wishListCompte.classList.contains('empty')){
      var wishListVide1 = document.createElement('h4')
      wishListVide1.id = 'wishListVide1'
      wishListCompte.appendChild(wishListVide1)
      wishListVide1.textContent = 'Votre WishList est vide!'
    }
  }else{
    wishListCompte.classList.add('hide')
    wishListCompte.classList.remove('mettreForme')
    monId.classList.remove('hide')
    wishBut.classList.remove('active')
  }
})

// bouton "CONTACT" de HEADER***********************************************************
headContact.addEventListener('click', function(){
  if(contactContainer.classList.contains('hide')){
    contactActions()
  }else{
    contactContainer.classList.add('hide')
    contactContainer.classList.remove('mettreForme')
    body.classList.remove('freeze')
  }
})

li4But.addEventListener('click', function(){
  if(contactContainer.classList.contains('hide')){
    contactActions()
  }else{
    contactContainer.classList.add('hide')
    contactContainer.classList.remove('mettreForme')
    body.classList.remove('freeze')
  }
})

function contactActions(){
  contactContainer.classList.remove('hide')
    contactContainer.classList.add('mettreForme')
    rideauForm.classList.add('hide')
    grandCatalogue.classList.add('hide')
    modalWarning.classList.add('hide')
    modalCompte.classList.add('hide')
    vetements.classList.add('hide')
    chaussures.classList.add('hide')
    rideauPP.classList.add('hide')
    rideauPP.classList.remove('mettreForme')
    panier.classList.add('hide')
    panier.classList.remove('mettreForme')
    nav.classList.add('hide')
    body.classList.add('freeze')
}

// bouton "Ma WishList" de HEADER***********************************************************
wishHeartBut.addEventListener('click', function(){

  wishListCompte.innerHTML = ''

  var wishBloc1 = document.createElement('div')

  wishTable.forEach(function(chaqueWish){

    var wishBloc2 = document.createElement('div')
    wishBloc2.classList.add('wishBloc2')
    var figureWish = document.createElement('figure')
    var imageWish = document.createElement('img')
    var wishBloc3 = document.createElement('div')
    var nomProduitWish = document.createElement('h5')
    var prixProduitWish = document.createElement('h5')

    wishListCompte.appendChild(wishBloc1)

    wishBloc1.appendChild(wishBloc2)

    wishBloc2.appendChild(figureWish)
    figureWish.appendChild(imageWish)
    wishBloc2.appendChild(wishBloc3)
    wishBloc3.appendChild(nomProduitWish)
    wishBloc3.appendChild(prixProduitWish)
    nomProduitWish.textContent = chaqueWish.nom
    prixProduitWish.textContent = chaqueWish.prix
    imageWish.src = chaqueWish.image
  })

  if (modalCompte.classList.contains('hide')){
    monCompte()
    wishListCompte.classList.remove('hide')
    wishListCompte.classList.add('mettreForme')
    mouvements.classList.add('hide')
    monId.classList.add('hide')
    wishBut.classList.add('active')
    mouvBut.classList.remove('active')

    rideauForm.classList.add('hide')
    grandCatalogue.classList.add('hide')
    modalWarning.classList.add('hide')
    rideauPP.classList.add('hide')
    rideauPP.classList.remove('mettreForme')
    panier.classList.add('hide')
    panier.classList.remove('mettreForme')
    contactContainer.classList.add('hide')
    contactContainer.classList.remove('mettreForme')
    nav.classList.add('hide')

    if(wishListCompte.classList.contains('empty')){
      var wishListVide = document.createElement('h4')
      wishListVide.id = 'wishListVide'
      wishListCompte.appendChild(wishListVide)
      wishListVide.textContent = 'Votre WishList est vide!'
    }
  }else{
    wishListCompte.classList.add('hide')
    wishListCompte.classList.remove('mettreForme')
    wishBut.classList.remove('active')
    modalCompte.classList.add('hide')
    body.classList.remove('freeze')
  }
})

// bouton "Ma WishList" de FOOTER***********************************************************
li3But.addEventListener('click', function(){

  wishListCompte.innerHTML = ''

  var wishBloc1 = document.createElement('div')

  wishTable.forEach(function(chaqueWish){

    var wishBloc2 = document.createElement('div')
    wishBloc2.classList.add('wishBloc2')
    var figureWish = document.createElement('figure')
    var imageWish = document.createElement('img')
    var wishBloc3 = document.createElement('div')
    var nomProduitWish = document.createElement('h5')
    var prixProduitWish = document.createElement('h5')

    wishListCompte.appendChild(wishBloc1)

    wishBloc1.appendChild(wishBloc2)

    wishBloc2.appendChild(figureWish)
    figureWish.appendChild(imageWish)
    wishBloc2.appendChild(wishBloc3)
    wishBloc3.appendChild(nomProduitWish)
    wishBloc3.appendChild(prixProduitWish)
    nomProduitWish.textContent = chaqueWish.nom
    prixProduitWish.textContent = chaqueWish.prix
    imageWish.src = chaqueWish.image
  })

  if (modalCompte.classList.contains('hide')){
    monCompte()
    wishListCompte.classList.remove('hide')
    wishListCompte.classList.add('mettreForme')
    modalCompte.classList.remove('hide')
    monId.classList.add('hide')
    wishBut.classList.add('active')
    mouvBut.classList.remove('active')

    rideauForm.classList.add('hide')
    grandCatalogue.classList.add('hide')
    modalWarning.classList.add('hide')
    rideauPP.classList.add('hide')
    rideauPP.classList.remove('mettreForme')
    panier.classList.add('hide')
    panier.classList.remove('mettreForme')
    contactContainer.classList.add('hide')
    contactContainer.classList.remove('mettreForme')
    nav.classList.add('hide')

    if(wishListCompte.classList.contains('empty')){
      var wishListVide = document.createElement('h4')
      wishListVide.id = 'wishListVide'
      wishListCompte.appendChild(wishListVide)
      wishListVide.textContent = 'Votre WishList est vide!'
    }
  }else{
    wishListCompte.classList.add('hide')
    wishListCompte.classList.remove('mettreForme')
    modalCompte.classList.add('hide')
    body.classList.remove('freeze')
    wishBut.classList.remove('active')
  }
})

// bouton "PANIER" de HEADER*************************************closePP**********************
var panierVide = document.createElement('h4') 
panierVide.id = 'panierVide'

bagBut.addEventListener('click', function(){
  if(panier.classList.contains('hide')){
    panier.classList.remove('hide')
    panier.classList.add('mettreForme')
    body.classList.add('freeze')

    rideauForm.classList.add('hide')
    grandCatalogue.classList.add('hide')
    modalWarning.classList.add('hide')
    modalCompte.classList.add('hide')
    vetements.classList.add('hide')
    chaussures.classList.add('hide')
    rideauPP.classList.add('hide')
    rideauPP.classList.remove('mettreForme')
    contactContainer.classList.add('hide')
    contactContainer.classList.remove('mettreForme')
    nav.classList.add('hide')

    if(blocPanier.classList.contains('empty')){
      blocPanier.innerHTML = ''
      blocPanier.appendChild(panierVide)
      panierVide.textContent = 'Votre panier est vide!'
    }
  }else{
    panierVide.textContent = ''
    panier.classList.add('hide')
    panier.classList.remove('mettreForme')
    body.classList.remove('freeze')
  }
})

// bouton "PANIER" de FOOTER***********************************************************
li2But.addEventListener('click', function(){
  if(panier.classList.contains('hide')){
    panier.classList.remove('hide')
    panier.classList.add('mettreForme')

    rideauForm.classList.add('hide')
    grandCatalogue.classList.add('hide')
    modalWarning.classList.add('hide')
    modalCompte.classList.add('hide')
    rideauPP.classList.add('hide')
    rideauPP.classList.remove('mettreForme')
    contactContainer.classList.add('hide')
    contactContainer.classList.remove('mettreForme')
    nav.classList.add('hide')

    if(blocPanier.classList.contains('empty')){
      var panierVide = document.createElement('h4')
      panierVide.id = 'panierVide'
      blocPanier.appendChild(panierVide)
      panierVide.textContent = 'Votre panier est vide!'
    }
  }else{
    panier.classList.add('hide')
    panier.classList.remove('mettreForme')
  }
})

// FUNCTIONNEMENT BUTTON CLOSE PAGE PRODUIT***********************************************************
closePP.addEventListener('click', function(){
  rideauPP.classList.add('hide')
  rideauPP.classList.remove('mettreForme')
  body.classList.remove('freeze')
})

// function pour boutons concernant MON COMPTE
function monCompte(){
  modalCompte.classList.remove('hide')
  monId.classList.remove('hide')
  wishListCompte.classList.add('hide')
  mouvements.classList.add('hide')
  body.classList.add('freeze')
}

// function pour bouton connexion***********************************************************
function utilisateurConnexion(){

  client.forEach(function(client){

    var currentClient = ''

    if(pseudoConInput.value == client.pseudo && passwordConInput.value == client.password ){
      currentClient = pseudoConInput.value

      if(currentClient == client.pseudo){
        navLi4.classList.add('hide')
        rideauForm.classList.add('hide')
        modalWarning.classList.remove('hide')
        wishHeart.classList.remove('hide')
        navLi5.classList.remove('hide')
        navLi6.classList.remove('hide')
        li5But.classList.remove('hide')
        li5But.classList.remove('hide')
        li1But.classList.remove('hide')
        li3But.classList.remove('hide')
        compteIcon.classList.remove('hide')
        modalText.textContent = 'Connexion Validée!!'

        navLi0.appendChild(navLi0Contenu)
        navLi0Contenu.textContent = 'Bonjour ' + client.monPseudo
        personnalCompte.textContent = 'Bonjour ' + client.monPseudo
        nomInfo.textContent = client.lastName
        prenomInfo.textContent = client.firstName
        pseudoInfo.textContent = client.monPseudo
      }else{
        rideauForm.classList.add('hide')
        modalWarning.classList.remove('hide')
        modalText.textContent = 'Veuillez re-essayer!!'
      }
    }
  })
}

function utilisateurDeconnexion(){
  if (navLi4.classList.contains('hide')) {

    navLi0.textContent = ''
    navLi4.classList.remove('hide')
    wishHeart.classList.add('hide')
    navLi5.classList.add('hide')
    navLi6.classList.add('hide')
    li5But.classList.add('hide')
    li5But.classList.add('hide')
    li1But.classList.add('hide')
    li3But.classList.add('hide')
    compteIcon.classList.add('hide')
    modalWarning.classList.remove('hide')
    modalText.textContent = 'Vous vous êtes déconnecté!!'
  }
}

function removeDecModal(){
  modalContainer.removeChild(decContainer)
  decContainer.removeChild(decOui)
  decContainer.removeChild(decNon)
}
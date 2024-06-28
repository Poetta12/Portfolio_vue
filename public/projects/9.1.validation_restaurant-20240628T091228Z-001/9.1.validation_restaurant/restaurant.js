/*
************VAR REGEX
*/

var filtreNom = /^[A-Z].*[a-z]$/;
var filtreGroup = /\d/


/*
************VAR CONTACT FORM
*/

var formBox = document.querySelector("#contactForm")
var openForm = document.querySelector("#contactOpen")
var closeForm = document.querySelector("#closeForm")

var contactForm = document.contact
var nom = document.contact.nom
var group = document.contact.group
var calendrier = document.contact.calendrier

var envoyer = document.getElementById('sendForm')
var aujourdhui = new Date()

/*
************VAR CONFIRMATION FORM
*/

var boxConfirmation = document.querySelector('#confirmation')
var aBientot = document.querySelector("#confirmation button")

/*
************VAR MENU FOOD
*/

var foodBox = document.querySelector('#menu')
var openMenu = document.querySelector('#menuOpen')
var closeMenu = document.querySelector('#menuClose')

/*
************OUVERTURE/FERMETURE CONTACT FORM
*/
openForm.addEventListener('click', function(){
	formBox.classList.remove('hide')
})

closeForm.addEventListener('click', function(){
	formBox.classList.add('hide')
})

/*
************OUVERTURE/FERMETURE MENU FOOD
*/

openMenu.addEventListener('click', function(){
	foodBox.classList.remove('hide')
})

closeMenu.addEventListener('click', function(){
	foodBox.classList.add('hide')
})

/*
************VERIFICATION CONTACT FORM
*/

nom.addEventListener("blur", function(){
	nomF()
})

group.addEventListener("blur", function(){
	groupF()
})

calendrier.addEventListener("blur", function(){
	calendrierF()
})

function nomF(){
	if(nom.validity.valueMissing){
		nom.nextElementSibling.textContent = 'Veuillez renseigner votre nom'
		nom.nextElementSibling.classList.add('incorrect')
		nom.nextElementSibling.classList.remove('correct')
		return false
	}else if(!filtreNom.test(nom.value)){
		nom.nextElementSibling.textContent = 'Votre saisie est incorrecte'
		nom.nextElementSibling.classList.add('incorrect')
		nom.nextElementSibling.classList.remove('correct')
		return false
	}else{
		nom.nextElementSibling.textContent = 'Votre saisie est correcte'
		nom.nextElementSibling.classList.remove('incorrect')
		nom.nextElementSibling.classList.add('correct')
		return true
	}
}

function groupF(){
	if(group.validity.valueMissing){
		group.nextElementSibling.textContent = 'Veuillez renseigner le nombre de places'
		group.nextElementSibling.classList.add('incorrect')
		group.nextElementSibling.classList.remove('correct')
		return false
	}else if(!filtreGroup.test(group.value)){
		group.nextElementSibling.textContent = 'La saisie doit être un nombre'
		group.nextElementSibling.classList.add('incorrect')
		group.nextElementSibling.classList.remove('correct')
		return false
	}else if(group.value < 1 || group.value > 10){
		group.nextElementSibling.textContent = 'Le nombre de places doit être compris entre 1 et 10'
		group.nextElementSibling.classList.add('incorrect')
		group.nextElementSibling.classList.remove('correct')
		return false
	}else{
		group.nextElementSibling.textContent = 'Votre saisie est correcte'
		group.nextElementSibling.classList.remove('incorrect')
		group.nextElementSibling.classList.add('correct')
		return true
	}
}

function calendrierF(){
	var dateValue = document.contact.calendrier.value
	var reservation = new Date(dateValue)
	var now = new Date()
	console.log('Today: ' + now.toUTCString())
	let next30days = new Date(now.setDate(now.getDate() + 30))
	console.log('Next 30th day: ' + next30days.toUTCString())
	calendrier.min = aujourdhui

	// SI pour champ vide
	if(calendrier.validity.valueMissing){
		calendrier.nextElementSibling.textContent = 'Veuillez renseigner la date de reservation'
		calendrier.nextElementSibling.classList.add('incorrect')
		calendrier.nextElementSibling.classList.remove('correct')
		return false

	// SI pour reservation au-delà de 30 jours
	}else if(reservation > next30days){
		calendrier.nextElementSibling.textContent = 'Pas de reservation disponible'
		calendrier.nextElementSibling.classList.add('incorrect')
		calendrier.nextElementSibling.classList.remove('correct')
		return false

		// SI pour reservation date passée
	}else if(reservation < aujourdhui){
		calendrier.nextElementSibling.textContent = 'Votre reservation n\'est plus possible'
		calendrier.nextElementSibling.classList.add('incorrect')
		calendrier.nextElementSibling.classList.remove('correct')
		return false
	}

	else{
		calendrier.nextElementSibling.textContent = 'Votre saisie est correcte'
		calendrier.nextElementSibling.classList.remove('incorrect')
		calendrier.nextElementSibling.classList.add('correct')
		return true
	}
}

/*
************VALIDATION CONTACT FORM
*/

envoyer.addEventListener('click', function(e){
	e.preventDefault()
	verification()
})

function verification(){
	if(nomF() && groupF() && calendrierF()){
		boxConfirmation.classList.remove('hide')
		return true
	}else{
		boxConfirmation.classList.add('hide')
		return false
	}
}

/*
************BOX CONFIRMATION FORM
*/

aBientot.addEventListener('click', function(){
	boxConfirmation.classList.add('hide')
	formBox.classList.add('hide')
})
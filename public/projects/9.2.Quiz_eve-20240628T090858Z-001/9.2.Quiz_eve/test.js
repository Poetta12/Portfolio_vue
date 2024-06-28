//VAR ANIMATION PAGES & MENU
var header = document.querySelector('#header')
var boxNav = document.querySelector('nav div')
var section_1 = document.querySelector('#section1')
var section_2 = document.querySelector('#section2')
var section_3 = document.querySelector('#section3')
var section_4 = document.querySelector('#section4')
var slides = document.querySelectorAll('#slides section')

//VAR BUTTONS ACTIFS
var openMenu = document.querySelector('#openMenu')
var demarrer = document.querySelector('#demarrer')
var demarrerMenu = document.querySelector('#demarrerMenu')
var suivant = document.querySelector('#suivant')
var theEnd = document.querySelector('#theEnd')
var precedent = document.querySelector("#precedent")
var precedent3 = document.querySelector("#precedent3")

// VAR CALCUL RESULTAT QUIZ
var allQuestions = document.querySelectorAll("fieldset")
var question = document.querySelectorAll('input[type=radio]');
var allForm = document.querySelectorAll('form')
var form_1 = document.questionnaireUn
var form_2 = document.questionnaireDeux
var form_3 = document.questionnaireTrois
var allQuestions_1 = form_1.querySelectorAll("fieldset")
var allQuestions_2 = form_2.querySelectorAll("fieldset")
var allQuestions_3 = form_3.querySelectorAll("fieldset")
var question_1 = form_1.querySelectorAll('input[type=radio]')
var question_2 = form_2.querySelectorAll('input[type=radio]')
var question_3 = form_3.querySelectorAll('input[type=radio]')
var allCompteur= document.querySelectorAll('input[type=range]')

var result = document.querySelector('#resultG span')

var cadreResult1 = document.querySelector('#descripUn')
var cadreResult2 = document.querySelector('#descripDeux')
var cadreResult3 = document.querySelector('#descripTrois')

var evalSolo_1_3 = document.querySelector('#res_3 div:nth-of-type(1)')
var evalSolo_2_3 = document.querySelector('#res_3 div:nth-of-type(2)')
var evalSolo_3_3 = document.querySelector('#res_3 div:nth-of-type(3)')

// EVENT LISTENERS
demarrerMenu.addEventListener('click',debutForm)
demarrer.addEventListener('click', debutForm)
openMenu.addEventListener('click', MenuNav)
suivant.addEventListener('click', veriForm_1)
precedent.addEventListener('click', prec_1)
precedent3.addEventListener('click', prec_3)
theEnd.addEventListener('click', veriForm_3)

//FUNCTION ANIMATION PAGES & MENUS
function MenuNav(){
	if(boxNav.classList.contains('hide')){
		boxNav.classList.remove('hide')
		boxNav.classList.add('opacityOut')
		boxNav.classList.remove('opacityIn')
	}else{
		//boxNav.classList.add('hide')
		boxNav.classList.remove('opacityOut')
		boxNav.classList.add('opacityIn')
		setTimeout(cleanMenu, 1500)
	}
}

function final(){
	if(section_4.classList.contains('hide')){
		section_4.classList.remove('hide')
		section_4.classList.add('rightIn')
		section_3.classList.add('opacityIn')
		theEnd.classList.add('active')
		setTimeout(cleanStart, 2000)
		setTimeout(cleanHideS3, 2000)
	}
}

function suiv_1(){
	suivant1.classList.add('active')
	
	if(section_2.classList.contains('hide')){
		slides.classList.add("opacityIn");
		slides.nextElementSibling.classList.add("rightIn")
		slides.nextElementSibling.classList.remove("hide")
		slides = slides.nextElementSibling;
		calcul_1()
		setTimeout(cleanStart, 2000)
		setTimeout(cleanHideS1, 2000)
	}
}

function suiv_2(){
	suivant2.classList.add('active')
	if(section_3.classList.contains('hide')){
		section_3.classList.remove('hide')
		section_3.classList.add('rightIn')
		section_2.classList.add('opacityIn')
		setTimeout(cleanStart, 2000)
		setTimeout(cleanHideS2, 2000)
	}
}

function prec_1(){
	section_1.classList.add('opacityIn')
	header.classList.remove('hide')
	header.classList.add('leftIn')
	setTimeout(cleanEnd, 2000)
	setTimeout(cleanHideS1, 2000)
}

function prec_2(){
	section_2.classList.add('opacityIn')
	section_1.classList.remove('hide')
	section_1.classList.add('leftIn')
	setTimeout(cleanEnd, 2000)
	setTimeout(cleanHideS2, 2000)
}

function prec_3(){
	section_3.classList.add('opacityIn')
	section_2.classList.remove('hide')
	section_2.classList.add('leftIn')
	setTimeout(cleanEnd, 2000)
	setTimeout(cleanHideS3, 2000)
}

function debutForm(){
	demarrer.classList.add('active')
	demarrerMenu.classList.add('active')
	section_1.classList.remove('hide')
	section_1.classList.add('rightIn')
	header.classList.add('opacityIn')
	boxNav.classList.remove('opacityOut')
	boxNav.classList.add('opacityIn')
	setTimeout(cleanStart, 2000)
}

function cleanStart(){
	header.classList.remove('opacityIn')
	header.classList.add('hide')
	section_1.classList.remove('rightIn')
	section_1.classList.remove('opacityIn')
	section_2.classList.remove('rightIn')
	section_2.classList.remove('opacityIn')
	section_3.classList.remove('rightIn')
	section_3.classList.remove('opacityIn')
}

function cleanEnd(){
	section_1.classList.remove('opacityIn')
	section_1.classList.remove('leftIn')
	section_2.classList.remove('opacityIn')
	section_2.classList.remove('leftIn')
	section_3.classList.remove('opacityIn')
	section_3.classList.remove('leftIn')
	header.classList.remove('leftIn')
}

function cleanHideS1(){
	section_1.classList.add('hide')
}

function cleanHideS2(){
	section_2.classList.add('hide')
}

function cleanHideS3(){
	section_3.classList.add('hide')
}

function cleanMenu(){
	boxNav.classList.add('hide')
	boxNav.classList.remove('opacityIn')
	boxNav.classList.remove('opacityOut')
}

//FUNCTION DE CALCUL RESULTAT QUIZ

var score_1 = 0;
var scoreTotal_1 = 0

function calcul_1(){
	var result_1_1 = document.getElementById('result_1_1')
	var result_1_2 = document.getElementById('result_1_2')
	var result_1_3 = document.getElementById('result_1_3')

	for (var i = 0; i < question_1.length; i++){
		if(question_1[i].checked){
			score_1 += Number(question_1[i].value)
		}
	}
	scoreTotal_1 = score_1 / allQuestions_1.length;

	if(scoreTotal_1 >= 0 && scoreTotal_1 <= 2.49){
		result_1_1.classList.add('redBorder')
	}else if(scoreTotal_1 >= 2.50 && scoreTotal_1 <= 4.49){
		result_1_2.classList.add('orangeBorder')
	}else if(scoreTotal_1 >= 4.50 && scoreTotal_1 <= 5){
		result_1_3.classList.add('greenBorder')
	}
}

var score_2 = 0;
var scoreTotal_2 = 0;

function calcul_2(){
	var result_2_1 = document.getElementById('result_2_1')
	var result_2_2 = document.getElementById('result_2_2')
	var result_2_3 = document.getElementById('result_2_3')

	for (var i = 0; i < question_2.length; i++){
		if(question_2[i].checked){
			score_2 += Number(question_2[i].value)
		}
	}
	scoreTotal_2 = score_2 / allQuestions_2.length;

	if(scoreTotal_2 >= 0 && scoreTotal_2 <= 2.49){
		result_2_1.classList.add('redBorder')
	}else if(scoreTotal_2 >= 2.50 && scoreTotal_2 <= 4.49){
		result_2_2.classList.add('orangeBorder')
	}else if(scoreTotal_2 >= 4.50 && scoreTotal_2 <= 5){
		result_2_3.classList.add('greenBorder')
	}
}

var score_3 = 0;
var scoreTotal_3 = 0;

function calcul_3(){
	var result_3_1 = document.getElementById('result_3_1')
	var result_3_2 = document.getElementById('result_3_2')
	var result_3_3 = document.getElementById('result_3_3')

	for (var i = 0; i < question_3.length; i++){
		if(question_3[i].checked){
			score_3 += Number(question_3[i].value)
		}
	}
	scoreTotal_3 = score_3 / allQuestions_3.length;

	if(scoreTotal_3 >= 0 && scoreTotal_3 <= 2.49){
		result_3_1.classList.add('redBorder')
	}else if(scoreTotal_3 >= 2.50 && scoreTotal_3 <= 4.49){
		result_3_2.classList.add('orangeBorder')
	}else if(scoreTotal_3 >= 4.50 && scoreTotal_3 <= 5){
		result_3_3.classList.add('greenBorder')
	}
}

function calculer(){

	calcul_2()
	calcul_3()

	var scoreFinal = score_1 + score_2 + score_3;
	var scoreTotalFinal = scoreFinal / allQuestions.length;

	if(scoreTotalFinal >= 0 && scoreTotalFinal <= 2.49){
		result.textContent = '1 à 2'
		cadreResult1.classList.add('actif')
	}else if(scoreTotalFinal >= 2.50 && scoreTotalFinal <= 4.49){
		result.textContent = '3 à 4'
		cadreResult2.classList.add('actif')
	}else if(scoreTotalFinal >= 4.50 && scoreTotalFinal <= 5){
		result.textContent = '5'
		cadreResult3.classList.add('actif')
	}
}

//FUNCTION VERIFICATION RADIO:CHECKED
var counter_1 = 0
var counter_2 = 0
var counter_3 = 0

function veriForm_1(){
	counter_1 = 0	
	
	var allQuestForm_1 = form_1.querySelectorAll('fieldset')
	var allInputs_1 = form_1.querySelectorAll('input[type=radio')

	allQuestForm_1.forEach(function(group, g){
		allInputs_1.forEach(function(input, i){
			if(input.checked){
				counter_1 ++
				console.log(counter)
			}
		})

		if(counter_1 === allQuestForm_1.length){
			suiv_1()
			return true
		}else{
			return false
		}
	})
}

function veriForm_2(){
	counter_2 = 0
	
	var allQuestForm_2 = form_2.querySelectorAll('fieldset')
	var allInputs_2 = form_2.querySelectorAll('input[type=radio')

	allQuestForm_2.forEach(function(group, g){
		allInputs_2.forEach(function(input, i){
			if(input.checked){
				counter_2 ++
			}
		})

		if(counter_2 === allQuestForm_2.length){
			suiv_2()
			return true
		}else{
			return false
		}
	})
}

function veriForm_3(){
	counter_3 = 0
	
	var allQuestForm_3 = form_3.querySelectorAll('fieldset')
	var allInputs_3 = form_3.querySelectorAll('input[type=radio')

	allQuestForm_3.forEach(function(group, g){
		allInputs_3.forEach(function(input, i){
			if(input.checked){
				counter_3 ++
			}
		})

		if(counter_3 === allQuestForm_3.length){
			calculer()
			final()
			return true
		}else{
			return false
		}
	})
}

//FUNCTION BARRE DE PROGRESSION

barre()

function barre(){
	var barreProg = document.querySelectorAll('input[type=range]')
	question.forEach(function(input, i){
		input.addEventListener('input', function(){

			if(input.checked && !input.parentNode.classList.contains('checked')){
				barreProg.forEach(function(barra, b){
					barreProg[b].value ++
					input.parentElement.classList.add('checked')
				})
			}
		})
	})
}
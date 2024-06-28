// Déclaration de variable
let radiobox = document.querySelectorAll('input[type="radio"]');
let resultat = document.querySelector('.result-appear');
let container_result = document.querySelector('.quiz-result-container');
let progress_quiz = document.querySelector('.progress-quiz');
let progress_quiz_span = document.querySelectorAll('.progress-quiz span');
let all_checks = document.querySelectorAll('.container-input-quiz');
let next = document.querySelectorAll('.next-progress');
let global_quiz = document.querySelector('.carousel');
let	carousel_slides = document.querySelectorAll('.carousel-item');
let previous_button = document.querySelector('.carousel-control-prev');
let next_button = document.querySelector('.carousel-control-next');
let return_quiz = document.querySelector('.return-quiz');
let copyPhenix = document.querySelector('.code-by');
let quizLength = 0;
let left_start = 0;
let left_slide = (progress_quiz.offsetWidth / 34);
let q1_list_value = [];
let q2_list_value = [];
let q3_list_value = [];
let moy_quiz_all = [];
let numberQuiz = 10;
let appearButtonResp = numberQuiz -1;

// Attribution d'attribut 
for (let i = 0 ; i < carousel_slides.length ; i++) {
	carousel_slides[i].setAttribute("data-slide-number", `${i}`);
}
// Assignation de valeurs CSS à la bulle de progression
progress_quiz_span.forEach(progress => {
	Object.assign(progress.style, {
			'height': '1.5em',
			'width': '1.5em',
	    'border-radius': '50%',
	    'border': '3px solid var(--app-color-violetblue)',
	    'background': 'var(--app-color-pink)',
	    'position': 'absolute',
	    'top': '-12px',
	    'left': '-1%'
		}
	)
})
// Objet de stockage des réponses
let responses = {
	// name:  -- > value
	firstname: '',
	name: '',
	rs: '',
	fonction: '',
	country: '',
	phone: '',
	courriel: '',
	freeText: ''
};
// Détection de la valeur des inputs checked
for (var i = 0; i < radiobox.length; i++) {
	radiobox[i].addEventListener('input', function() {
		if (this.checked) {
			responses[this.name] = Number(this.value);
		}
	})
}
// Gestion d'apparition des boutons
function previously() {	
	if (carousel_slides[numberQuiz].classList.contains('active')) {
		next_button.style.display = "inline-flex"	
		resultat.style.display = "none"
	}
	if (carousel_slides[1].classList.contains('active')) {
		previous_button.style.display = 'none';		
	}	
}
function progress(e) {
	if (window.getComputedStyle(previous_button).display =='none' && carousel_slides[0].classList.contains('active')) {
		previous_button.style.display = 'inline-flex';
	}
	if (carousel_slides[appearButtonResp].classList.contains('active') && quizLength == 34) {
		next_button.style.display = "none"	
		resultat.style.display = "inline-flex"
	}
	for (const carousel_slide of carousel_slides) {
		all_checks.forEach(all_check => {
			let papaCheck = all_check.parentNode.parentNode;
			if (!all_check.classList.contains('checkers') 
				&& carousel_slide.classList.contains('active') && 
				carousel_slide.dataset.slideNumber == papaCheck.dataset.carouselNumber) {
				
				next_button.href = ""
				all_check.classList.add('not-check');
				carousel_slides[Number(carousel_slide.dataset.slideNumber)].classList.add('active')

			}	
		})
	}	
	$('.carousel').on('touchmove', function(e) {$('.carousel').off('touchmove')})
}
// Gestion de l'état d'avancement de la bulle de progression selon l'input radio checked
for (const radio_check of radiobox) {	
	radio_check.addEventListener('input', _ => {
		left_start += left_slide;
		let checks = radio_check.parentNode.parentNode;
		if (!this.checked) {
			if (!checks.classList.contains('checkers')) {
				progress_quiz_span.forEach(progress => {
					progress.style.left = `${left_start}px`
				})
				checks.classList.add('checkers');
				next_button.href = ""			
				quizLength += 1;
				
				if (checks.classList.contains('not-check')) {
					checks.classList.remove('not-check');		
				}

			}
			let checked = document.querySelectorAll('.checkers')
			for (const carousel_slide of carousel_slides) {
					all_checks.forEach(all_check => {
						let papaCheck = all_check.parentNode.parentNode;
						if (!all_check.classList.contains('not-check') &&
								carousel_slide.classList.contains('active') && 
							carousel_slide.dataset.slideNumber == papaCheck.dataset.carouselNumber) {
							if (checked.length >= quizLength) {
								next_button.href = "#global-quiz"
								papaCheck.dataset.full = 'ok'
							}	
						}
					})
				}
		}
	})
}

function result_q1() {
	let q1_input = document.querySelectorAll('.result-quiz-lutte .q1-div');
	let q1_p = document.querySelectorAll('p[data-answer^=q1]');
	// déclaration d'une maximale
	let max = 0;
	// Calcul de la moyenne du quiz
	let sum_1 = q1_list_value.reduce( (acc, curr) => acc + curr);
	let moy_sum_1 = sum_1 / q1_list_value.length;
	responses['moy1'] = moy_sum_1
	// Conditionnement de l'affiche des checks
	if (moy_sum_1 <= 2.5) {
		q1_input[0].classList.add('maximum', 'icon-check');
		if (q1_p[0].dataset.answer == q1_input[0].dataset.name) q1_p[0].style.display = 'block';
		moy_quiz_all.push(moy_sum_1);
	}
	else if (moy_sum_1 > 2.5 && moy_sum_1 < 4.5) {
		q1_input[1].classList.add('maximum', 'icon-check');
		if (q1_p[1].dataset.answer == q1_input[1].dataset.name) q1_p[1].style.display = 'block';
		moy_quiz_all.push(moy_sum_1);
	}
	else {
		q1_input[2].classList.add('maximum', 'icon-check');		
		if (q1_p[2].dataset.answer == q1_input[2].dataset.name) q1_p[2].style.display = 'block';
		moy_quiz_all.push(moy_sum_1);
	}
}
function result_q2() {
	let q2_input = document.querySelectorAll('.result-quiz-partage .q2-div');
	let q2_p = document.querySelectorAll('p[data-answer^=q2]');
	// déclaration d'une maximale
	let max = 0;
	// Calcul de la moyenne du quiz
	let sum_2 = q2_list_value.reduce( (acc, curr) => acc + curr);
	let moy_sum_2 = sum_2 / q2_list_value.length;
	responses['moy2'] = moy_sum_2
	// Conditionnement de l'affiche des checks
	if (moy_sum_2 <= 2.5) {
		q2_input[0].classList.add('maximum', 'icon-check');
		if (q2_p[0].dataset.answer == q2_input[0].dataset.name) q2_p[0].style.display = 'block';
		moy_quiz_all.push(moy_sum_2)
	}
	else if (moy_sum_2 > 2.5 && moy_sum_2 < 4.5) {
		q2_input[1].classList.add('maximum', 'icon-check');
		if (q2_p[1].dataset.answer == q2_input[1].dataset.name) q2_p[1].style.display = 'block';
		moy_quiz_all.push(moy_sum_2)
	}
	else {
		q2_input[2].classList.add('maximum', 'icon-check');
		if (q2_p[2].dataset.answer == q2_input[2].dataset.name) q2_p[2].style.display = 'block';
		moy_quiz_all.push(moy_sum_2)
	}
}
function result_q3() {
	let q3_input = document.querySelectorAll('.result-quiz-ecologie .q3-div');
	let q3_p = document.querySelectorAll('p[data-answer^=q3]');	
	// déclaration d'une maximale
	let max = 0;
	// Calcul de la moyenne du quiz
	let sum_3 = q3_list_value.reduce( (acc, curr) => acc + curr);
	let moy_sum_3 = sum_3 / q3_list_value.length;
	responses['moy3'] = moy_sum_3
	// Conditionnement de l'affiche des checks
	if (moy_sum_3 <= 2.5) {
		q3_input[0].classList.add('maximum', 'icon-check');
		if (q3_p[0].dataset.answer == q3_input[0].dataset.name) q3_p[0].style.display = 'block';
		moy_quiz_all.push(moy_sum_3);
	}
	else if (moy_sum_3 > 2.5 && moy_sum_3 < 4.5) {
		q3_input[1].classList.add('maximum', 'icon-check');
		if (q3_p[1].dataset.answer == q3_input[1].dataset.name) q3_p[1].style.display = 'block';
		moy_quiz_all.push(moy_sum_3);
	}
	else {
		q3_input[2].classList.add('maximum', 'icon-check');
		if (q3_p[2].dataset.answer == q3_input[2].dataset.name) q3_p[2].style.display = 'block';
		moy_quiz_all.push(moy_sum_3);
	}
}
function result_all() {
	let final_result = document.querySelector('input[name=result-global]');
	let rectangle_result = document.querySelectorAll('.result-global-container');
	let rectangle_result_img = document.querySelectorAll('.result-global-container .container-img img');
	// Calcul de la moyenne général
	let calc_moy_globale = moy_quiz_all.reduce( (acc, curr) => acc + curr,);
	let moy_globale = calc_moy_globale / moy_quiz_all.length;
	responses["moy_tot"] = moy_globale
	// Conditionnement de la mise en évidence du résultat
	if (moy_globale <= 2.5) {
		final_result.value = "1 à 2";
		final_result.dataset.value = "1à2";
		final_result.classList.add('result-appaerred-pink');
	}
	if (moy_globale > 2.5 && moy_globale < 4.5) {
		final_result.value = "3 à 4";
		final_result.dataset.value = "3à4";
		final_result.classList.add('result-appaerred-orange');
	}
	if (moy_globale >= 4.5) {
		final_result.value = "5";
		final_result.dataset.value = "5";
		final_result.classList.add('result-appaerred-green');
	}
	for (const rect of rectangle_result) {
		if (final_result.dataset.value === rect.dataset.result) {
			rect.classList.add('coloration')
		}
	}
	// Changement des images pour la mise en évidence du résultat
	for (const rect_img of rectangle_result_img) {
		if (final_result.value === "1 à 2" &&
				final_result.dataset.value === rect_img.dataset.result) {
			rect_img.src = 'static/assets/pics/pictos/hand-hesitating_red.svg';
		}
		if (final_result.value === "3 à 4" &&
				final_result.dataset.value === rect_img.dataset.result) {
			rect_img.src = 'static/assets/pics/pictos/hand-liking_orange.svg';
		}
		if (final_result.value === "5" &&
				final_result.dataset.value === rect_img.dataset.result) {
			rect_img.src = 'static/assets/pics/pictos/hands-clapping_green.svg';
		}
	}
}
// Retour au quiz
return_quiz.addEventListener('click', _ => {
	// Changement d'état du style
	Object.assign(global_quiz.style, {
			'display': 'block'
		}
	)
	Object.assign(container_result.style, {
			'z-index': '-1',
			'opacity': '0',
			'display': 'none',
			'height': '0'
		}
	)
	previous_button.style.display = "none";
	resultat.style.display = "none";
	next_button.style.display = "inline-block";
	// Toggle des class des carousel-item
	carousel_slides[numberQuiz].classList.remove('active');
	carousel_slides[0].classList.add('active');	
})

// Zone formu-quiz //
let inputs = document.querySelectorAll('input:not([type=radio])');
let submit = document.querySelector('.formu-quiz');
let textarea = document.querySelector('textarea');
inputs.forEach(input => {
  input.addEventListener('input', function() {
  	// Toggle des classes de styles
    this.value !== "" ? this.nextElementSibling.classList.add('full') : this.nextElementSibling.classList.remove('full');
    if (this.value !== "") {
    	responses[this.name] = this.value;
    }
  })
})
textarea.addEventListener('input', function() {
	// Toggle des classes de styles
	 this.value !== "" ? this.nextElementSibling.classList.add('full') : this.nextElementSibling.classList.remove('full');
	 if (this.value !== "") {
	 	responses[this.name] = this.value;
	 }
})
// submit.addEventListener('click', function(e) {
// 	e.preventDefault();
// 	// Appel des fonctions de mise en évidence de le moyenne la plus haute pour chaque quiz
// 	functionResult();
// })



// function sendResponse() {
// 	console.log('yoooo')
//     var post_url = "{{ url_for('admin.addReponse') }}"; //get form action url
//     var request_method = "POST"; //get form GET/POST method
//     // var form_data = $(this).serialize(); //Encode form elements for submission
//     //Ajax post data to server
//     var form_data = responses
   

//     $.ajax({
//       url: post_url,
//       type: request_method,
//       dataType: 'json',
//       data: form_data,
//       processData: false,
//       contentType: false,
//       success: function(data) {
//       	console.log(data);
//       },
//       error: function(code_html, status, error) {
//       	console.log(code_html)
//       	console.log(status)
//       	console.log(error)
//       }
//     });	
// }

// resultat.addEventListener('click', sendResponse); 
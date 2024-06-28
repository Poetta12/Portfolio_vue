<template>
  <div>
    <h2>Contact</h2>
    <p>Contactez-moi via le formulaire ci-dessous :</p>
    <form @submit.prevent="handleSubmit" id="contact_form">
      <div class="name">
        <label for="name"></label>
        <input
          v-model="name"
          type="text"
          placeholder="Je m'appelle ..."
          name="name"
          id="name_input"
          required
        />
      </div>
      <div class="email">
        <label for="email"></label>
        <input
          v-model="email"
          type="email"
          placeholder="Mon adresse e-mail est ..."
          name="email"
          id="email_input"
          required
        />
      </div>
      <div class="telephone">
        <label for="telephone"></label>
        <input
          v-model="telephone"
          type="text"
          placeholder="Mon numéro est ..."
          name="telephone"
          id="telephone_input"
          required
        />
      </div>
      <div class="subject">
        <label for="subject"></label>
        <select v-model="subject" name="subject" id="subject_input" required>
          <option disabled hidden value="">J'écris à propos de :</option>
          <option>J'aimerais démarrer un projet.</option>
          <option>J'aimerais poser une question.</option>
          <option>J'aimerais faire une proposition.</option>
        </select>
      </div>
      <div class="message">
        <label for="message"></label>
        <textarea
          v-model="message"
          name="message"
          placeholder="J'aimerais parler de ..."
          id="message_input"
          cols="30"
          rows="5"
          required
        ></textarea>
      </div>

      <div id="recaptcha">
        <div  class="g-recaptcha" :data-sitekey="'6LfcPQMqAAAAAB5-L1sVv4dmQEZoh7fLM6HTh4co'" data-callback="onReCAPTCHASuccess"></div>

        <div class="submit">
          <input type="submit" value="Envoyer le message" id="form_button" />
        </div>
      </div>

    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const name = ref('');
const email = ref('');
const telephone = ref('');
const subject = ref('');
const message = ref('');
let recaptchaResponse = ref('');

const siteKey = '6LepFwMqAAAAANgtDc_gjxqNSUULLIhT8Y94ivlc'; // Remplacez par votre propre clé de site

const handleSubmit = async () => {
  if (!recaptchaResponse.value) {
    alert('Veuillez compléter le reCAPTCHA.');
    return;
  }

  const formData = {
    name: name.value,
    email: email.value,
    telephone: telephone.value,
    subject: subject.value,
    message: message.value,
    'g-recaptcha-response': recaptchaResponse.value,
  };

  try {
    const response = await axios.post('https://formspree.io/f/mjkbbqko', formData);
    if (response.status === 200) {
      alert('Votre message a été envoyé avec succès!');
      clearForm();
    } else {
      alert('Une erreur est survenue. Veuillez réessayer plus tard.');
    }
  } catch (error) {
    alert('Une erreur est survenue. Veuillez réessayer plus tard.');
    console.error(error);
  }
};

const clearForm = () => {
  name.value = '';
  email.value = '';
  telephone.value = '';
  subject.value = '';
  message.value = '';
  recaptchaResponse.value = '';
  if (window.grecaptcha) {
    window.grecaptcha.reset();
  }
};

onMounted(() => {
  const script = document.createElement('script');
  script.src = 'https://www.google.com/recaptcha/api.js';
  script.async = true;
  script.defer = true;
  script.onload = () => {
    console.log("reCAPTCHA script loaded");
    window.onReCAPTCHASuccess = (response) => {
      console.log("reCAPTCHA response:", response);
      recaptchaResponse.value = response;
    };
  };
  document.head.appendChild(script);
});
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);

html {
  font-family: 'Montserrat', Arial, sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

h2,
p {
  color: #f2f3eb;
}

body {
  background: #f2f3eb;
}

h2,
p button {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

button,
input,
select,
textarea {
  color: #fdc17b;
  font: inherit;
  margin: 0;
}

input {
  line-height: normal;
}

textarea {
  overflow: auto;
}

#container {
  border: solid 3px #fdc17b;
  max-width: 768px;
  margin: 60px auto;
  position: relative;
}

form {
  padding: 37.5px;
  margin: 50px 0;
}

h1 {
  color: #fdc17b;
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 7px;
  text-align: center;
  text-transform: uppercase;
}

.underline {
  border-bottom: solid 2px #fdc17b;
  margin: -0.512em auto;
  width: 80px;
}

.icon_wrapper {
  margin: 50px auto 0;
  width: 100%;
}

.icon {
  display: block;
  fill: #fdc17b;
  height: 50px;
  margin: 0 auto;
  width: 50px;
}

.email {
  float: right;
  width: 45%;
}

input[type='text'],
[type='email'],
select,
textarea {
  background: none;
  border: none;
  border-bottom: solid 2px #fdc17b;
  color: #fdc17b;
  font-size: 1em;
  font-weight: 400;
  letter-spacing: 1px;
  margin: 0em 0 1.875em 0;
  padding: 0 0 0.875em 0;
  text-transform: uppercase;
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -o-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

input[type='text']:focus,
[type='email']:focus,
textarea:focus {
  outline: none;
  padding: 0 0 0.875em 0;
}

.message {
  float: none;
}

.name {
  float: left;
  width: 45%;
}

select {
  outline: none;
  -moz-appearance: button;
  -webkit-appearance: button;
}

option {
  color: #333;
}

select::-ms-expand {
  display: none;
}

.subject {
  width: 100%;
}

.telephone {
  width: 100%;
}

textarea {
  line-height: 150%;
  height: 150px;
  resize: none;
  width: 100%;
}

::-webkit-input-placeholder {
  color: #fdc17b;
}

:-moz-placeholder {
  color: #fdc17b;
  opacity: 1;
}

::-moz-placeholder {
  color: #fdc17b;
  opacity: 1;
}

:-ms-input-placeholder {
  color: #fdc17b;
}

#form_button {
  background: none;
  border: solid 2px #fdc17b;
  color: #fdc17b;
  cursor: pointer;
  display: inline-block;
  font-family: 'Helvetica', Arial, sans-serif;
  font-size: 0.875em;
  font-weight: bold;
  outline: none;
  padding: 20px 35px;
  text-transform: uppercase;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}

#form_button:hover {
  background: #474544;
  color: #f2f3eb;
}

#recaptcha{
  display: flex;
  align-items: center;
  place-content: space-evenly;
  }

@media screen and (max-width: 768px) {
  #container {
    margin: 20px auto;
    width: 95%;
  }

  #recaptcha{
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: space-evenly;
  }

}

@media screen and (max-width: 480px) {
  h1 {
    font-size: 26px;
  }

  .underline {
    width: 68px;
  }

  #form_button {
    padding: 15px 25px;
  }
}

@media screen and (max-width: 420px) {
  h1 {
    font-size: 18px;
  }


  .icon {
    height: 35px;
    width: 35px;
  }

  .underline {
    width: 53px;
  }

  input[type='text'],
  [type='email'],
  select,
  textarea {
    font-size: 0.875em;
  }
}
</style>

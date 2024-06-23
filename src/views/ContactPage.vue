<template>
  <div>
    <h2>Contact</h2>
    <p>Contactez-moi via le formulaire ci-dessous :</p>
    <form @submit.prevent="submitForm">
      <label for="name">Nom:</label>
      <input type="text" id="name" v-model="name" required />

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required />

      <label for="message">Message:</label>
      <textarea id="message" v-model="message" required></textarea>

      <button type="submit">Envoyer</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

const submitForm = () => {
  alert(`Nom: ${name.value}\nEmail: ${email.value}\nMessage: ${message.value}`)
}
</script>

<style scoped>
h2 {
  color: #333;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 10px;
}

input,
textarea {
  margin-top: 5px;
  padding: 10px;
  border: 1px solid #ccc;
}

button {
  margin-top: 10px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>

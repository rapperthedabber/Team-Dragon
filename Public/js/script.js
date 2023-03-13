//const { response } = require("express");

const form = document.querySelector('.form')
const login = document.getElementById('login');

const submit = document.getElementById('signup')

async function newUser(event){
//username.trim()
//password.trim()
event.preventDefault();
console.log('you signed up')
const usernameValue = document.getElementById('username').value.trim();
const passwordValue = document.getElementById('password').value.trim();
if (username && password) {
    // Send the e-mail and password to the server
    console.log({usernameValue, passwordValue})

    const signUpData = {
        user_name: usernameValue,
        password: passwordValue
    }

    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify(signUpData),
      headers: { 'Content-Type': 'application/json' },
    });

if (response.ok) {
    //document.location.replace('/');
    alert('sign up successful')
  } else {
    alert('Failed to sign up');
   }
}
form.reset()
}


form.addEventListener("submit", newUser);
// const { response } = require("express");
// const form = document.querySelector('.form');
const login = document.getElementById('login');
const userLoginSignup = document.querySelector('.login-signup');
// const createUser = document.getElementById('signup');

async function goToForm(event) {
  //   if (usernameValue && passwordValue) {
  //     // Send the e-mail and password to the server
  //     console.log({ usernameValue, passwordValue });

  //     const signUpData = {
  //       user_name: usernameValue,
  //       password: passwordValue,
  //     };
  event.preventDefault();
  const response = await fetch('/login', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/login');
    alert('sign up successful');
  } else {
    alert('Failed to sign up');
  }
}

login.addEventListener('click', loginUser);
// createUser.addEventListener('click', newUser);
userLoginSignup.addEventListener('click', goToForm);

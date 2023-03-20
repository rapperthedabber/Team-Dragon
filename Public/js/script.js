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

async function seeProfiles() {
  const url = 'https://animechan.vercel.app/api/random';
  fetch(url)
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      const { anime } = data;
      const { quote } = data;
      animeText.textContent = JSON.stringify(anime);
      quoteText.textContent = JSON.stringify(quote);
    //   description2.textContent = JSON.stringify(anime);
    //   description2Half.textContent = JSON.stringify(quote);
    });
}

seeProfiles();

login.addEventListener('click', goToForm);
// createUser.addEventListener('click', newUser);
userLoginSignup.addEventListener('click', goToForm);


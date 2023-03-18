const card1 = document.querySelector('.card1');
const card2 = document.querySelector('card2');
const profile1 = document.getElementById('profile1');
const profile2 = document.getElementById('profile2');
const description1 = document.getElementById('description1');
const description2 = document.getElementById('description2');
const description1Half = document.getElementById('description1.5');
const description2Half = document.getElementById('description2.5');

<<<<<<< HEAD
function seeProfiles() {
=======
async function seeProfiles() {
>>>>>>> 9658d37cf848787f034fd7d2e883eb76a1cb65ec
  const url = 'https://animechan.vercel.app/api/random';
  fetch(url)
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      const { anime } = data;
      const { quote } = data;
      description1.textContent = JSON.stringify(anime);
      description1Half.textContent = JSON.stringify(quote);
      description2.textContent = JSON.stringify(anime);
      description2Half.textContent = JSON.stringify(quote);
    });
}

<<<<<<< HEAD
seeProfiles();
=======
async function seeName() {
  const usernameValue = document.getElementById('username').value.trim();
  const passwordValue = document.getElementById('password').value.trim();
  const signUpData = {
    user_name: usernameValue,
  };
  const response = await fetch('/api/users/', {
    method: 'GET',
    body: JSON.stringify(signUpData),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    profile1.textContent = JSON.stringify(response);
  }
}
seeProfiles();
seeName();
>>>>>>> 9658d37cf848787f034fd7d2e883eb76a1cb65ec

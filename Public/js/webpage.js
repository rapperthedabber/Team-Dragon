const card1 = document.querySelector('.card1');
const card2 = document.querySelector('card2');
const profile1 = document.getElementById('profile1');
const profile2 = document.getElementById('profile2');
const description1 = document.getElementById('description1');
const description2 = document.getElementById('description2');

function seeProfiles() {
  const url = 'https://animechan.vercel.app/api/random';
  fetch(url)
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
    });
    fetch 
}

seeProfiles();

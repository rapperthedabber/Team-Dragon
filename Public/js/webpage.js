const card1 = document.querySelector('.card1');
const card2 = document.querySelector('card2');
const profile1 = document.getElementById('profile1');
const profile2 = document.getElementById('profile2');
const description1 = document.getElementById('description1');
const description2 = document.getElementById('description2');
const description1Half = document.getElementById('description1.5')
const description2Half = document.getElementById('description2.5')

function seeProfiles() {
  const url = 'https://animechan.vercel.app/api/random';
  fetch(url)
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      const anime = data.anime
      const quote = data.quote
      description1.textContent = JSON.stringify(anime);
      description1Half.textContent = JSON.stringify(quote);
      description2.textContent = JSON.stringify(anime);
      description2Half.textContent = JSON.stringify(quote)
      
    
      
    });
}

seeProfiles();

const profile1 = document.getElementById('profile1');
const animeText = document.getElementById('animeShow');
const quoteText = document.getElementById('quote');

async function seeProfiles() {
  const url = 'https://animechan.vercel.app/api/random';
  await fetch(url)
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      if (data.anime && data.quote) {
        // const { anime } = data;
        // animeText.innerHTML = JSON.stringify(anime);
        const { quote } = data;
        const { anime } = data;
        quoteText.textContent = JSON.stringify(quote);
        animeText.textContent = JSON.stringify(anime)
      }
      //   description2.textContent = JSON.stringify(anime);
      //   description2Half.textContent = JSON.stringify(quote);
    });
}

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

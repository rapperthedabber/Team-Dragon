const createBtn = document.querySelector('.Create-btn');

async function makeUser(event) {
  event.preventDefault();
  console.log('you signed up');
  const nameValue = document.getElementById('name').value.trim();
  const descriptionValue = document.getElementById('description').value.trim();
  if (nameValue && descriptionValue) {
    // Send the e-mail and password to the server
    console.log({ nameValue, descriptionValue });

    const signUpData = {
      user_name: nameValue,
      password: descriptionValue,
    };

    const response = await fetch('/api/users/', {
      method: 'POST',
      body: JSON.stringify(signUpData),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
      alert('created user successfully');
      console.log(signUpData);
      const url = 'https://random-d.uk/api/v2/random';
      fetch(url)
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
        });
    }
  } else {
    alert('Failed to create user');
  }
}

createBtn.addEventListener('click', makeUser);

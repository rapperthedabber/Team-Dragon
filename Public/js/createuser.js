const createBtn = document.querySelector('.Create-btn');

async function createUser(event) {
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
      document.location.replace('/test');
      alert('created user successfully');
      console.log(signUpData);
    } else {
      alert('Failed to create user');
    }
  }
  form.reset();
}

createBtn.addEventListener('click', createUser);

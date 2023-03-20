const createForm = document.querySelector('.createUser');

async function makeDescription(event) {
  event.preventDefault();
  console.log('you signed up');
  // const nameValue = document.getElementById('name').value.trim();
  const descriptionValue = document.getElementById('description').value.trim();
  if (descriptionValue) {
    // Send the e-mail and password to the server
    console.log({ descriptionValue });

    const signUpData = {
      description: descriptionValue,
    };
    const response = await fetch('/api/users/', {
      method: 'POST',
      body: JSON.stringify(signUpData),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/webpage');
      // alert('created user successfully');
      console.log(signUpData);
    }
  } else {
    alert('Failed to create description!');
  }
}

createForm.addEventListener('submit', makeDescription);

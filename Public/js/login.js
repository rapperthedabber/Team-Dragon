const createUser = document.getElementById('signup');
const form = document.querySelector('.form');
const login = document.getElementById('login');

async function newUser(event) {
  event.preventDefault();
  console.log('you signed up');
  const usernameValue = document.getElementById('username').value.trim();
  const passwordValue = document.getElementById('password').value.trim();
  if (usernameValue && passwordValue) {
    // Send the e-mail and password to the server
    console.log({ usernameValue, passwordValue });

    const signUpData = {
      user_name: usernameValue,
      password: passwordValue,
    };

    const response = await fetch('/api/users/', {
      method: 'POST',
      body: JSON.stringify(signUpData),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/test');
      alert('sign up successful');
      console.log(signUpData)
    } else {
      alert('Failed to sign up');
    }
  }
  form.reset();
}

async function loginUser(event) {
  // username.trim()
  // password.trim()
  event.preventDefault();
  console.log('you signed up');
  const usernameValue = document.getElementById('username').value.trim();
  const passwordValue = document.getElementById('password').value.trim();
  if (usernameValue && passwordValue) {
    // Send the e-mail and password to the server
    console.log({ usernameValue, passwordValue });

    const signUpData = {
      user_name: usernameValue,
      password: passwordValue,
    };

    const response = await fetch('/api/users/login', {
      method: 'GET',
      body: JSON.stringify(signUpData),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/webpage');
      alert('login successful');
    } else {
      alert('Failed to login');
    }
  }
}

login.addEventListener('click', loginUser);
createUser.addEventListener('click', newUser);
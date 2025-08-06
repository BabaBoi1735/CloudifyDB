const profileBtn = document.getElementById('profile-btn');
const profileButton = document.getElementById('profile-button');

function handleCredentialResponse(response) {
  const user = jwt_decode(response.credential);
  console.log(user);
  profileBtn.style.display = 'block';
  profileButton.textContent = `Profiel: ${user.name}`;
}

google.accounts.id.initialize({
  client_id: '900146880227-4rum9cvi3u6tb85a3sha66c6qsg4htin.apps.googleusercontent.com',
  callback: handleCredentialResponse
});

google.accounts.id.renderButton(
  document.getElementById('g_id_signin'),
  { theme: 'outline', size: 'large' }
);

google.accounts.id.prompt();

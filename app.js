const profileBtn = document.getElementById('profile-btn');
const profileButton = document.getElementById('profile-button');

function jwt_decode(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}

function handleCredentialResponse(response) {
  const user = jwt_decode(response.credential);
  console.log(user);
  profileBtn.style.display = 'block';
  profileButton.textContent = `Profiel: ${user.name}`;
  window.location.href = 'https://cloudifydb.netlify.app/';
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

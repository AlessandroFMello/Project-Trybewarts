function validateLogin() {
  const email = document.getElementById('input-email');
  const password = document.getElementById('input-password');
  const button = document.getElementById('login-button');

  button.addEventListener('click', () => {
    if (email.value === 'tryber@teste.com' && password.value === '123456') {
      window.alert('Olá, Tryber!');
    } else {
      window.alert('Email ou senha inválidos.');
    }
  });
}
validateLogin();

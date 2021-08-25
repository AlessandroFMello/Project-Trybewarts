window.onload = function () {
  enableSubmitButton();
}

function validateLogin() {
  const email = document.getElementById('login-email');
  const password = document.getElementById('login-password');
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

function enableSubmitButton () {
  const elementCheckbox = document.getElementById('agreement');
  const buttonToBeEnabled = document.getElementById('submit-btn');
  buttonToBeEnabled.disabled = true;

  elementCheckbox.addEventListener('change', (receivedEvent) => {
    const checkboxToEnable = receivedEvent.target;
    (checkboxToEnable.checked) ? buttonToBeEnabled.disabled = false : buttonToBeEnabled.disabled = true;
  });  
}

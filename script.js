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

function enableSubmitButton() {
  const elementCheckbox = document.getElementById('agreement');
  const buttonToBeEnabled = document.getElementById('submit-btn');
  buttonToBeEnabled.disabled = true;

  elementCheckbox.addEventListener('change', (receivedEvent) => {
    const checkboxToEnable = receivedEvent.target;
    if (checkboxToEnable.checked) {
      buttonToBeEnabled.disabled = false;
    } else {
      buttonToBeEnabled.disabled = true;
    }
  });
}
enableSubmitButton();

function textareaCounter() {
  const textCounter = document.getElementById('counter');
  const textArea = document.getElementById('textarea');

  textArea.addEventListener('keyup', () => {
    const counter = (textArea.maxLength - (textArea.value.length));
    textCounter.innerText = `${counter} caracteres restantes.`;
  });
}
textareaCounter();

function clearMainSection (receivedEvent) {
  receivedEvent.preventDefault();
  console.log(receivedEvent.target);
  const sectionToClear = document.getElementById('evaluation-form');
  sectionToClear.innerHTML = 'Teste.';
}

const btnSubmit = document.getElementById('submit-btn');
btnSubmit.addEventListener('click', clearMainSection);

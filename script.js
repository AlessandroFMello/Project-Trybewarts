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

function returnForm() {
  const formInfo = {
    Nome: '',
    Email: '',
    Casa: '',
    Família: '',
    Matérias: '',
    Avaliação: '',
    Observações: '',
  }
  const form = document.getElementById('evaluation-form')
  for (let index = 0; index < form.length; index++) {  
    if (form[index].type === 'text') {
      if (form[index].name === 'nome') {
        formInfo['Nome'] = form[index].value;
      } else if (form[index].name === 'sobrenome') {
        formInfo['Nome'] += ' ' + form[index].value;
      } else if (form[index].name === 'email') {
        formInfo['Email'] = form[index].value;
      }
    }
    if (form[index].id === 'house') {
      formInfo['Casa'] = form[index].value;
    }
    if (form[index].type === 'checkbox' && form[index].checked === true) {
      formInfo['Matérias'] += ', ' + form[index].value;;
    }
    if (form[index].name === 'family' && form[index].checked === true) {
      formInfo['Família'] = form[index].value;
    }
    if (form[index].name === 'rate' && form[index].checked === true) {
      formInfo['Avaliação'] = form[index].value;
    }
    if (form[index].type === 'textarea') {
      formInfo['Observações'] = form[index].value;
    }
  }
  return formInfo;
}

function clearMainSection(receivedEvent) {
  receivedEvent.preventDefault();
  console.log(receivedEvent.target);
  const sectionToClear = document.getElementsByTagName('main')[0];
  sectionToClear.innerHTML = 'Teste.';
}

const btnSubmit = document.getElementById('submit-btn');
btnSubmit.addEventListener('click', clearMainSection);

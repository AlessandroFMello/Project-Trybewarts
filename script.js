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

const formInfo = {
  Nome: '',
  Email: '',
  Casa: '',
  Família: '',
  Matérias: '',
  Avaliação: '',
  Observações: '',
};

const form = document.getElementById('evaluation-form');

function casaInfo() {
  for (let index = 0; index < form.length; index += 1) {
    if (form[index].id === 'house') {
      formInfo.Casa = form[index].value;
    }
  }
  return formInfo;
}

function familiaInfo() {
  for (let index = 0; index < form.length; index += 1) {
    if (form[index].name === 'family' && form[index].checked === true) {
      formInfo.Família = form[index].value;
    }
  }
}

function rateInfo() {
  for (let index = 0; index < form.length; index += 1) {
    if (form[index].name === 'rate' && form[index].checked === true) {
      formInfo.Avaliação = form[index].value;
    }
  }
}

function materiaInfo() {
  for (let index = 0; index < form.length; index += 1) {
    if (form[index].name === 'materia' && form[index].checked === true) {
      formInfo.Matérias += `${form[index].value}, `;
    }
  }
}

function nomeInfo() {
  for (let index = 0; index < form.length; index += 1) {
    if (form[index].name === 'nome') {
      formInfo.Nome = form[index].value;
    } else if (form[index].name === 'sobrenome') {
      formInfo.Nome += ` ${form[index].value}`;
    }
  }
}

function emailInfo() {
  for (let index = 0; index < form.length; index += 1) {
    if (form[index].name === 'email') {
      formInfo.Email = form[index].value;
    }
  }
}

function textAreaInfo() {
  for (let index = 0; index < form.length; index += 1) {
    if (form[index].type === 'textarea') {
      formInfo.Observações = form[index].value;
    }
  }
}

function runAllInfos() {
  nomeInfo();
  textAreaInfo();
  materiaInfo();
  casaInfo();
  rateInfo();
  familiaInfo();
  emailInfo();
}

function createText() {
  runAllInfos();
  const infos = formInfo;
  const infoText = document.getElementById('evaluation-form');
  const paragraph = document.createElement('p');
  paragraph.innerText = ` Nome: ${infos.Nome}
                            Email: ${infos.Email}
                            Casa: ${infos.Casa}
                            Família: ${infos.Família}
                            Matérias: ${infos.Matérias}
                            Avaliação: ${infos.Avaliação}
                            Observaçãoes: ${infos.Observações}`;
  infoText.appendChild(paragraph);
  return infoText;
}

function clearMainSection(receivedEvent) {
  receivedEvent.preventDefault();
  const sectionToClear = document.getElementById('evaluation-form');
  const myText = createText();
  sectionToClear.innerHTML = '';
  return myText;
}

const btnSubmit = document.getElementById('submit-btn');
btnSubmit.addEventListener('click', clearMainSection);

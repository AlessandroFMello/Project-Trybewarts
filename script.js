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

function formInfosSubjects() {
  const subjects = document.getElementsByClassName('subject');
  let selectedSubjects = '';
  const arrayOfSubjects = [];
  for (let index = 0; index < subjects.length; index += 1) {
    if (subjects[index].checked) arrayOfSubjects.push(subjects[index].value);
  }
  selectedSubjects = arrayOfSubjects.join(', ');
  return selectedSubjects;
}

function formInfosRate() {
  const rateContainer = document.querySelectorAll('#rate-container input');
  let selectedRate = '';
  for (let index = 0; index < rateContainer.length; index += 1) {
    if (rateContainer[index].checked) selectedRate = rateContainer[index].value;
  }
  return selectedRate;
}

function formInfosFamily() {
  const familyContainer = document.querySelectorAll('#family-container input');
  let selectedFamily = '';
  for (let index = 0; index < familyContainer.length; index += 1) {
    if (familyContainer[index].checked) selectedFamily = familyContainer[index].value;
  }
  return selectedFamily;
}

function formInfosHouse() {
  const formInfoCasa = document.getElementById('house').value;
  return formInfoCasa;
}

function formInfosEmail() {
  const formInfoEmail = document.getElementById('input-email').value;
  return formInfoEmail;
}

function formInfosObservations() {
  const formInfoObservations = document.getElementById('textarea').value;
  return formInfoObservations;
}

function formInfosName() {
  let fullName = document.getElementById('input-name').value;
  fullName += ' ';
  fullName += document.getElementById('input-lastname').value;
  return fullName;
}

function formInfo() {
  // const formInfo = {};
  formInfo.Nome = formInfosName();
  formInfo.Email = formInfosEmail();
  formInfo.Casa = formInfosHouse();
  formInfo.Família = formInfosFamily();
  formInfo.Matérias = formInfosSubjects();
  formInfo.Avaliação = formInfosRate();
  formInfo.Observações = formInfosObservations();
  return formInfo;
}

function createText() {
  const infos = formInfo();
  const infoText = document.getElementById('form-container');
  const formToHide = document.getElementById('evaluation-form');
  if (infos) {
    formToHide.style.display = 'none';
    const paragraph = document.createElement('p');
    paragraph.innerText = ` Nome: ${infos.Nome}
                            Email: ${infos.Email}
                            Casa: ${infos.Casa}
                            Família: ${infos.Família}
                            Matérias: ${infos.Matérias}
                            Avaliação: ${infos.Avaliação}
                            Observaçãoes: ${infos.Observações}`;
    infoText.appendChild(paragraph);
  }
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

const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const loginBtn = document.getElementById('login-btn');

function login() {
  if (emailInput.value === 'tryber@teste.com' && senhaInput.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
}

loginBtn.addEventListener('click', login);

const getAgreement = document.getElementById('agreement');
const getSumbitBtn = document.getElementById('submit-btn');

getAgreement.onchange = function swap() {
  getSumbitBtn.disabled = !this.checked;
};

const inputTextArea = document.getElementById('textarea');

function counter() {
  const valor = inputTextArea.value;
  const max = 500;
  const total = valor.length;
  if (total <= max) {
    const resto = max - total;
    document.getElementById('counter').innerHTML = resto;
  }
}

inputTextArea.addEventListener('keyup', counter);

// const form = document.getElementById('evaluation-form');
const main = document.querySelector('main');

function createObject() {
  const select = document.getElementById('house');
  const { text } = select.options[select.selectedIndex];
  const families = document.querySelectorAll('.subject:checked');
  const nameValue = document.getElementById('input-name').value;
  const lastNameValue = document.getElementById('input-lastname').value;
  const formFinal = {
    Nome: `${nameValue} ${lastNameValue}`,
    Email: `${document.getElementById('input-email').value}`,
    Casa: text,
    Família: `${document.querySelector('input[name="family"]:checked').value}`,
    Matérias: [],
    Avaliação: `${document.querySelector('input[name="rate"]:checked').value}`,
    Observações: `${document.getElementById('textarea').value}`,
  };
  for (let index = 0; index < families.length; index += 1) {
    formFinal.Matérias.push(families[index].value);
  }
  return formFinal;
}

function createText() {
  createObject();
  const infos = createObject();
  const newForm = document.createElement('form');
  newForm.classList.add('new-form');
  newForm.id = 'evaluation-form';
  main.insertBefore(newForm, document.getElementById('trybewarts-forms-logo'));
  const infosProps = Object.keys(infos);
  for (let index = 0; index < infosProps.length; index += 1) {
    const item = document.createElement('label');
    if (infosProps[index] !== 'Matérias') {
      item.innerText = `${infosProps[index]}: ${infos[infosProps[index]]}`;
    } else {
      item.innerText = `Matérias: ${infos['Matérias'].join(', ')}`;
    }
    newForm.appendChild(item);
  }
}

function submitForm(event) {
  event.preventDefault();
  createText();
  const oldForm = document.querySelector('.original-form');
  oldForm.remove();
}

getSumbitBtn.addEventListener('click', submitForm);

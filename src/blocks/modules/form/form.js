import Swal from 'sweetalert2';
import Inputmask from 'inputmask';
import capitalize from '../../../js/utils/capitalize';

const inputName = document.getElementById('name');
const inputPhone = document.getElementById('phone');
Inputmask({ mask: '+7 (\\999)-999-99-99' }).mask(inputPhone);
Inputmask({ regex: '[а-яА-ЯёЁ]{1,}' }).mask(inputName);

const form = document.querySelector('.form');
const modal = form.closest('.modal');
const preloader = modal.querySelector('.modal-preloader');
const btnClose = modal.querySelector('.modal-close');

form.addEventListener('submit', handleFormSubmit);
form.addEventListener('input', checkValidity);

async function handleFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);
  formData.set('name', capitalize(formData.get('name')));
  formData.set('phone', formData.get('phone').replace(/[^0-9+]/g, ''));

  toggleLoader();
  const response = await sendData(formData);
  toggleLoader();
  const error = await response.text();

  if (error === '') {
    onSuccess();
  } else {
    onError(error);
  }
}

async function sendData(data) {
  return await fetch('php/index.php', {
    method: 'POST',
    body: data,
  });
}

function toggleLoader() {
  [...form.elements].forEach((input) => {
    input.toggleAttribute('disabled');
  });
  preloader.classList.toggle('show');
}

function onSuccess() {
  form.reset();
  btnClose.click();

  Swal.fire('Ваша заявка отправлена', 'Мы свяжемся с Вами в ближайшее время');
}

function onError(error) {
  Swal.fire('Возникла ошибка', error);
}

function checkValidity(event) {
  const formNode = event.target.form;
  const isValid = formNode.checkValidity();

  formNode.querySelector('button').disabled = !isValid;
}

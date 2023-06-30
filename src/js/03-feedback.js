import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = form[(name = 'email')];
const message = form[(name = 'message')];
const LOCALSTORAGE_KEY = 'feedback-form-state';

email.required = 'true';
message.required = 'true';

// console.log(email);
// console.log(message);

form.addEventListener('input', throttle(inputFormValue, 500));
form.addEventListener('submit', submitForm);

function inputFormValue() {
  const formValue = { email: email.value, message: message.value };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formValue));
}

function submitForm(event) {
  event.preventDefault();

  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
  form.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
storageFormValue();
function storageFormValue() {
  const uploadValue = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  if (uploadValue) {
    email.value = uploadValue.email;
    message.value = uploadValue.message;
  } else {
    email.value = '';
    message.value = '';
  }
}

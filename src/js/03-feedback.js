import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const localStorageKey = 'feedback-form-state';

form.addEventListener(
  'input',
  throttle(e => {
    const objectSave = { email: email.value, message: message.value };
    localStorage.setItem(localStorageKey, JSON.stringify(objectSave));
  }, 500)
);

form.addEventListener('submit', event => {
  event.preventDefault();

  if (email.value === '' || message.value === '') {
    return alert('Заповніть всі поля!');
  }

  console.log({ email: email.value, message: message.value });
  form.reset();
  localStorage.removeItem(localStorageKey);
});

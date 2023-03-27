const form = document.querySelector('.form');
const submitButton = document.querySelector('#submit');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const error = document.querySelector('.error');

form.addEventListener('submit', errorMessage);

function errorMessage(e) {
  e.preventDefault();
  if (emailInput.value === '' || passwordInput.value === '') {
    error.textContent = 'Please Fill Out The Form';
    setTimeout(function () {
      error.remove();
    }, 2500);
  }
}

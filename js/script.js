let map = document.querySelector('.map');
let howGetToButton = document.querySelector('.js-howgetto');
let overlay = document.querySelector('.overlay');
let mapClose = map.querySelector('.button-close');
let modalLogin = document.querySelector('.cabinet');
let loginForm = modalLogin.querySelector('form');
let modalLoginClose = modalLogin.querySelector('.button-close');
let loginBtn = document.querySelector('.login-button');
let login = modalLogin.querySelector('input[name=login]');
let password = modalLogin.querySelector('input[name=password]');

loginForm.addEventListener('submit', (evt) => {
  if (login.value == '' || password.value == '') {
    evt.preventDefault();
    modalLogin.classList.add('modal-shake');
  }
})

howGetToButton.addEventListener('click', evt => {
  evt.preventDefault();
  map.classList.add('modal-show');
  overlay.classList.add('overlay-show');
});

loginBtn.addEventListener('click', evt => {
  evt.preventDefault();
  modalLogin.classList.add('modal-show');
  overlay.classList.add('overlay-show');
});

modalLoginClose.addEventListener('click', evt => {
  evt.preventDefault();
  modalLogin.classList.remove('modal-shake');
  modalLogin.classList.remove('modal-show');
  overlay.classList.remove('overlay-show');
})

mapClose.addEventListener('click', evt => {
  evt.preventDefault();
  map.classList.remove('modal-show');
  overlay.classList.remove('overlay-show');
})

overlay.addEventListener('click', evt => {
  evt.preventDefault();
  modalLogin.classList.remove('modal-shake');
  modalLogin.classList.remove('modal-show');
  map.classList.remove('modal-show');
  overlay.classList.remove('overlay-show');
})
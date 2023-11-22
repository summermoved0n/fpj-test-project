const aboutText = document.querySelector('.popap-link');
const showModal = document.getElementById('popap');
const backDrop = document.querySelector('.popap-body')
const hideModal = document.querySelector('.popap-close-btn');

aboutText.addEventListener('click', e => {
  e.preventDefault();
  // showModal.classList.add('open')
  showModal.classList.remove('is-hidden');
});

hideModal.addEventListener('click', e => {
  e.preventDefault();
  showModal.classList.add('is-hidden');
});

document.addEventListener('keyup', e => {
  e.preventDefault();
  if (e.key === 'Escape') {
    console.log('esc');
    showModal.classList.add('is-hidden');
  }return
});

document.addEventListener('click', e => {
  e.preventDefault();
  if (e.target === backDrop) {
    showModal.classList.add('is-hidden');
  }
})
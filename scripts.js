var modal = document.querySelector('.modal');
var toptrigger = document.querySelector('#navCONTACT')
var bottomtrigger = document.querySelector('#CONTACT')
var closeButton = document.querySelector('.close-button')

function toggleModal(e) {
  e.preventDefault()
  modal.classList.toggle('show-modal')
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal()
  }
}

toptrigger.addEventListener('click', toggleModal);
bottomtrigger.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);

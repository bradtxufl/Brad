var modal = document.querySelector('.modal');
var toptrigger = document.querySelector('#navCONTACT')
var bottomtrigger = document.querySelector('#CONTACT')
var closeButton = document.querySelector('.close-button')

function addModal(e) {
  e.preventDefault()
  modal.classList.add('show-modal')
}

function removeModal(e) {
  e.preventDefault()
  modal.className ='modal'
}

function windowOnClick(event) {
  if (event.target === modal) {
    removeModal()
  }
}

toptrigger.addEventListener('click', addModal);
bottomtrigger.addEventListener('click', addModal);
window.addEventListener('click', windowOnClick);
closeButton.addEventListener('click', removeModal);

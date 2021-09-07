'use strict';

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnOpenModal = document.querySelectorAll('.show-modal')
console.log(btnOpenModal)

const openModal = function() {
    console.log('Button Clicked')
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
const closeModal = function() {
    console.log('clicked')
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

for ( let i = 0; i < btnOpenModal.length; i ++) {
    btnOpenModal[i].addEventListener('click', openModal)
}

btnCloseModal.addEventListener('click', closeModal) 
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function(e) {
    console.log(e.key)
    if(e.key === 'Escape') {
        // had to invoke it because the event listener is connected to the keydown event, the if block connects the Escape keydown and calls closeModal once its pressed
        closeModal()
    }
})
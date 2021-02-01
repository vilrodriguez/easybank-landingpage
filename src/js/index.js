const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElement = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', (event)=>{
  console.log('open hamburger');
  event.preventDefault();
  if(header.classList.contains('open')){ // Close ham menu
    body.classList.remove('noscroll');
    header.classList.remove('open');
    fadeElement.forEach(function(element){
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    })
  } else { // Open ham menu
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElement.forEach(function(element){
      element.classList.add('fade-in');
      element.classList.remove('fade-out');
    })
  }
});
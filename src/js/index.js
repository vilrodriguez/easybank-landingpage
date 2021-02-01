const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');

btnHamburger.addEventListener('click', (event)=>{
  console.log('open hamburger');
  event.preventDefault();
  if(header.classList.contains('open')){
    header.classList.remove('open');
  } else {
    header.classList.add('open');
  }
});
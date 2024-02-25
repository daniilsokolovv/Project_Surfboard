///bugreg-menu

const burger = document.querySelector('.burger');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');

const links = document.querySelectorAll('.overlay .menu__link');

links.forEach(function(element){
	element.addEventListener('click' , toggleMenu);
})

function toggleMenu(){
	burger.classList.toggle('burger--active');
	overlay.classList.toggle('overlay--active');
	body.classList.toggle('body--active-menu');
}

burger.addEventListener('click' , toggleMenu);

////



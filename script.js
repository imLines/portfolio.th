/* MENU HAMBURGER  */ 

const toggle = document.querySelector('#nav-toggle');
const buttonOfHamburger = document.querySelector('#button-hamburger');
const menu = document.querySelector('header');
const main = document.querySelector('main');


toggle.addEventListener('click', ()=>{
    menu.className = toggle.checked ? 'block w-4/5 bg-black h-screen flex flex-col items-center fixed max-h-screen' : 'hidden';
    if(toggle.checked){
        buttonOfHamburger.src = '../images/icon/cross-white.png';
    }else{
        buttonOfHamburger.src = '../images/icon/menu-hamburger.png';
    }
})




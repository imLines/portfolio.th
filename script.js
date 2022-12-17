/* MENU HAMBURGER  */ 
/* for header :  w-3/5 bg-black h-screen flex flex-col items-center  */

const toggle = document.querySelector('#nav-toggle');
const buttonOfHamburger = document.querySelector('#button-hamburger');
const menu = document.querySelector('header');
const main = document.querySelector('main');


toggle.addEventListener('click', ()=>{
    menu.className = toggle.checked ? 'block w-3/5 bg-black h-screen flex flex-col items-center fixed' : 'hidden';
    if(toggle.checked){
        buttonOfHamburger.src = '../images/icon/cross-white.png'
    }else{
        buttonOfHamburger.src = '../images/icon/menu-hamburger.png'
    }
})




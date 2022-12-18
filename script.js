/* MENU HAMBURGER  */ 

const toggle = document.querySelector('#nav-toggle');
const buttonOfHamburger = document.querySelector('#button-hamburger');
const menu = document.querySelector('header');
const main = document.querySelector('main');
const navLink = document.getElementsByClassName('nav-link');

console.log(navLink)


function closeOrOpenNavbar(){
    menu.className = toggle.checked ? 'block w-4/5 bg-black h-screen flex flex-col items-center  fixed max-h-screen' : 'hidden';
    if(toggle.checked){
        buttonOfHamburger.src = '../images/icon/cross-white.png';
    }else{
        buttonOfHamburger.src = '../images/icon/menu-hamburger.png';
    }
}

toggle.addEventListener('click', closeOrOpenNavbar)

for (var i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', ()=>{
        menu.className = 'hidden';
        buttonOfHamburger.src = '../images/icon/menu-hamburger.png';
        toggle.checked = false;
    });
  }


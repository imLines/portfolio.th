/* MENU HAMBURGER  */ 

const toggle = document.querySelector('#nav-toggle');
const html = document.querySelector('html');
const buttonOfHamburger = document.querySelector('#button-hamburger');
const menu = document.querySelector('header');
const main = document.querySelector('main');
const navLink = document.getElementsByClassName('nav-link');

/* max-h-screen h-screen */

function closeOrOpenNavbar(){
    menu.className = toggle.checked ? ' w-4/5  flex flex-col items-center  fixed h-full min-h-screen overflow-y-scroll' : 'hidden';
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

/* POPUP WWIDEV BACKEND*/
const buttonPopupWwidevBackend = document.getElementById('button-popup-wwiDEV-backend');
const popupWwidevBackend = document.getElementById('popup-wwiDEV-backend');

buttonPopupWwidevBackend.addEventListener('click', ()=>{
    if(buttonPopupWwidevBackend.value == 'off'){
        buttonPopupWwidevBackend.innerHTML = " - de détails"
        popupWwidevBackend.className = 'dialog-open'
        buttonPopupWwidevBackend.value = 'on'
    }else if (buttonPopupWwidevBackend.value == 'on'){
        buttonPopupWwidevBackend.innerHTML = " + de détails"
        popupWwidevBackend.className = 'dialog-close'
        buttonPopupWwidevBackend.value = 'off';
    }
})

/* POPUP WWIDEV FRONTEND */
const buttonPopupWwidevFrontend = document.getElementById('button-popup-wwiDEV-frontend');
const popupWwidevFrontend = document.getElementById('popup-wwiDEV-frontend');

buttonPopupWwidevFrontend.addEventListener('click', ()=>{
    if(buttonPopupWwidevFrontend.value == 'off'){
        buttonPopupWwidevFrontend.innerHTML = " - de détails"
        popupWwidevFrontend.className = 'dialog-open'
        buttonPopupWwidevFrontend.value = 'on'
    }else if (buttonPopupWwidevFrontend.value == 'on'){
        buttonPopupWwidevFrontend.innerHTML = " + de détails"
        popupWwidevFrontend.className = 'dialog-close'
        buttonPopupWwidevFrontend.value = 'off';
    }
})

/* POPUP PYJAM'ZZ */
const buttonPopupPyjamzz = document.getElementById('button-popup-pyjamzz');
const popupPyjamzz = document.getElementById('popup-pyjamzz');

buttonPopupPyjamzz.addEventListener('click', ()=>{
    if(buttonPopupPyjamzz.value == 'off'){
        buttonPopupPyjamzz.innerHTML = " - de détails"
        popupPyjamzz.className = 'dialog-open'
        buttonPopupPyjamzz.value = 'on'
    }else if (buttonPopupPyjamzz.value == 'on'){
        buttonPopupPyjamzz.innerHTML = " + de détails"
        popupPyjamzz.className = 'dialog-close'
        buttonPopupPyjamzz.value = 'off';
    }
})

/* FORM SUBMIT */
const form = document.querySelector('form');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'contact.php', true)
    // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function () {
        //récuperer infos dans la propriété responseText de l'objet xhr
        
    };
    xhr.send(new FormData(form));
  return false;

})

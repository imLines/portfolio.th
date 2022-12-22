/* MENU HAMBURGER  */ 

const toggle = document.querySelector('#nav-toggle');
const html = document.querySelector('html');
const buttonOfHamburger = document.querySelector('#button-hamburger');
const menu = document.querySelector('header');
const main = document.querySelector('main');
const navLink = document.getElementsByClassName('nav-link');

function closeOrOpenNavbar(){
    menu.className = toggle.checked ? ' fixed h-screen header-width flex flex-col items-center justify-start overflow-y-scroll' : 'hidden';
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

function showSuccessMessage(successMessage){
    const successMessageContainer = document.getElementById('success-message-container');
    const paragrapheSuccessMessage = document.getElementById('p-for-success-message');
    successMessageContainer.classList.replace('hidden', 'block')
    paragrapheSuccessMessage.innerHTML = successMessage
    form.style.display = 'none'
}

function badRequest(errorMessage){
    const errorMessageContainer = document.getElementById('error-message-container');
    const paragrapheErrorMessage = document.getElementById('p-for-error-message');
    errorMessageContainer.classList.replace('hidden', 'block')
    paragrapheErrorMessage.innerText = errorMessage
}

function showServerErrorMessage(errorMessage, messageForSend){
    const urMessage = document.getElementById('ur-message');
    const errorMessageContainer = document.getElementById('error-message-container');
    const paragrapheErrorMessage = document.getElementById('p-for-error-message');
    errorMessageContainer.classList.replace('hidden', 'block');
    form.style.display = 'none';
    paragrapheErrorMessage.innerText = errorMessage+'\nVous pouvez copier coller votre message pour éviter de le réécrire.\n';
    urMessage.innerText = 'Votre message:\n'+messageForSend;
}


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const userMessage = document.getElementsByTagName('textarea');
    const messageForSend = userMessage.message.value;
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'contact.php', true)
    // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function () {
        if(xhr.status == 200){
            return showSuccessMessage(xhr.responseText)
        }else if(xhr.status == 400){
            return badRequest(xhr.responseText)
        }else{
            return showServerErrorMessage(xhr.responseText, messageForSend)
        }
    };
    xhr.send(new FormData(form));
  return false;

})

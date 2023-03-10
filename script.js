/* MENU HAMBURGER  */ 

const toggle = document.querySelector('#nav-toggle');
const html = document.querySelector('html');
const buttonOfHamburger = document.querySelector('#button-hamburger');
const menu = document.querySelector('header');
const main = document.querySelector('main');
const navLink = document.getElementsByClassName('nav-link');

function closeOrOpenNavbar(){
    menu.className = toggle.checked ? 'fixed h-screen w-min p-8 header-width flex flex-col items-center justify-start overflow-y-scroll overflow-x-hidden lg:fixed lg:h-screen lg:p-8 lg:w-80 lg:flex lg:flex-col lg:items-center lg:justify-start lg:overflow-y-auto lg:overflow-x-hidden z-50' : 'hidden lg:fixed lg:h-screen lg:p-8 lg:w-80 lg:flex lg:flex-col lg:items-center lg:justify-start lg:overflow-y-auto lg:overflow-x-hidden z-50';
    if(toggle.checked){
        buttonOfHamburger.src = '../images/icon/cross-white.png';
    }else{
        buttonOfHamburger.src = '../images/icon/menu-hamburger.png';
    }
}

toggle.addEventListener('click', closeOrOpenNavbar)


/* AUTO_CLOSE WHEN WIDTH ACCEPT*/
addEventListener('resize', ()=>{
    let windowWidth = window.innerWidth;
    if(windowWidth > 1024){
        menu.className = 'fixed h-screen w-min p-8 header-width flex flex-col items-center justify-start overflow-y-scroll overflow-x-hidden lg:fixed lg:h-screen lg:p-8 lg:w-80 lg:flex lg:flex-col lg:items-center lg:justify-start lg:overflow-y-auto lg:overflow-x-hidden';
    }else{
        menu.className = 'hidden';
        buttonOfHamburger.src = '../images/icon/menu-hamburger.png';
        toggle.checked = false;
    }
})


/* AUTOCLOSE */
for (let i = 0; i < navLink.length; i++){
    navLink[i].addEventListener('click', event=>{
        let windowWidth = window.innerWidth;       
        if(windowWidth > 1024){
            menu.className = 'fixed h-screen w-min p-8 header-width flex flex-col items-center justify-start overflow-y-scroll overflow-x-hidden lg:fixed lg:h-screen lg:p-8 lg:w-80 lg:flex lg:flex-col lg:items-center lg:justify-start lg:overflow-y-auto lg:overflow-x-hidden';
        }else{
            menu.className = 'hidden';
            buttonOfHamburger.src = '../images/icon/menu-hamburger.png';
            toggle.checked = false;
        }
    }, true);
}

/* SCROLL SMOOTH NAVLINK */
const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();  // Emp??che le rechargement de la page
    const targetId = event.target.getAttribute('href');
    const target = document.querySelector(targetId);
    target.scrollIntoView({ behavior: 'smooth' });
  });
});




/* POPUP */
const overlay = document.getElementById('overlay');

overlay.addEventListener('click', ()=>{
    popupWwidevBackend.className = 'dialog-close'
    popupWwidevFrontend.className = 'dialog-close'
    popupPyjamzz.className = 'dialog-close'
    popupGekalories.className = 'dialog-close'
    html.style.overflow = 'scroll';
    overlay.style.display = 'none';
})

/* POPUP WWIDEV BACKEND*/
const buttonPopupWwidevBackend = document.getElementById('button-popup-wwiDEV-backend');
const popupWwidevBackend = document.getElementById('popup-wwiDEV-backend');
const buttonClosePopupWwidevBackend = document.getElementById('button-close-popup-wwidev-backend');

buttonPopupWwidevBackend.addEventListener('click', ()=>{
    popupWwidevBackend.className = 'dialog-open'
    html.style.overflow = 'hidden';
    overlay.style.display = 'block';
})
buttonClosePopupWwidevBackend.addEventListener('click', ()=>{
    popupWwidevBackend.className = 'dialog-close'
    html.style.overflow = 'scroll';
    overlay.style.display = 'none';

})


/* POPUP WWIDEV FRONTEND */
const buttonPopupWwidevFrontend = document.getElementById('button-popup-wwiDEV-frontend');
const popupWwidevFrontend = document.getElementById('popup-wwiDEV-frontend');
const buttonClosePopupWwidevFrontend = document.getElementById('button-close-popup-wwidev-frontend');

buttonPopupWwidevFrontend.addEventListener('click', ()=>{
    popupWwidevFrontend.className = 'dialog-open'
    html.style.overflow = 'hidden';
    overlay.style.display = 'block';
})
buttonClosePopupWwidevFrontend.addEventListener('click', ()=>{
    popupWwidevFrontend.className = 'dialog-close'
    html.style.overflow = 'scroll';
    overlay.style.display = 'none';
    
})


/* POPUP PYJAM'ZZ */
const buttonPopupPyjamzz = document.getElementById('button-popup-pyjamzz');
const popupPyjamzz = document.getElementById('popup-pyjamzz');
const buttonClosePopupFontend = document.getElementById('button-close-popup-pyjamzz');

buttonPopupPyjamzz.addEventListener('click', ()=>{
    popupPyjamzz.className = 'dialog-open'
    html.style.overflow = 'hidden';
    overlay.style.display = 'block';
})
buttonClosePopupFontend.addEventListener('click', ()=>{
    popupPyjamzz.className = 'dialog-close'
    html.style.overflow = 'scroll';
    overlay.style.display = 'none';
    
})

/* POPUP GEKALORIES */
const buttonPopupGekalories = document.getElementById('button-popup-gekalories');
const popupGekalories = document.getElementById('popup-gekalories');
const buttonClosePopupGekalories = document.getElementById('button-close-popup-gekalories');

buttonPopupGekalories.addEventListener('click', ()=>{
    popupGekalories.className = 'dialog-open'
    html.style.overflow = 'hidden';
    overlay.style.display = 'block';
})
buttonClosePopupGekalories.addEventListener('click', ()=>{
    popupGekalories.className = 'dialog-close'
    html.style.overflow = 'scroll';
    overlay.style.display = 'none';
    
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
function showServerErrorMessage(messageForSend){
    const urMessage = document.getElementById('ur-message');
    const errorMessageContainer = document.getElementById('error-message-container');
    const paragrapheErrorMessage = document.getElementById('p-for-error-message');
    errorMessageContainer.classList.replace('hidden', 'block');
    form.style.display = 'none';
    paragrapheErrorMessage.innerText = 'D??sol?? ce serveur a rencontr?? un probl??me. Veuillez utiliser un autre moyen de contact.\nVous pouvez copier coller votre message pour ??viter de le r????crire.\n';
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
            return showServerErrorMessage(messageForSend)
        }
    };
    xhr.send(new FormData(form));
  return false;

})


/**
 * Animations
 */

/* FadIn */

const callback = function (entries) {
    entries.forEach((entry) => {  
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fadeIn");
      } else {
        //If unset comment in bottom, remove the animation for re add after
        // entry.target.classList.remove("animate-fadeIn");
      }
    });
  };
  
  const observer = new IntersectionObserver(callback);
  
  const targets = document.querySelectorAll(".animation-fadIn");
  targets.forEach(function (target) {
    target.classList.add("opacity-0");
    observer.observe(target);
  });

  /* Spin for button to up top */
const buttonToGoTop = document.getElementById('button-to-scroll-top');
  
const scrollToTop = () => {
    buttonToGoTop.addEventListener("click", () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      }); 
    });
  };
  scrollToTop();
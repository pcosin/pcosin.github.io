// Nav Menu 

const mainMenu = document.querySelector('.nav-menu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '8rem';
    mainMenu.style.transition = '2s';
   

}
function close(){
    mainMenu.style.top = '-100%';
}
     
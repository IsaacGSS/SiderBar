const menu = document.querySelector('.navIcon');
const navBar = document.querySelector('#nav');
const logo = document.querySelector('.logo');
const quest = document.querySelector('input');
const perfil = document.querySelector('#perfil')

menu.addEventListener('click', function() {

  if (navBar.style.width === '70px') {
    navBar.style.width = '325px';
    logo.style.display= 'block';
    quest.value = 'Buscar';    
    perfil.style.display= 'flex';
    
  } else {
    navBar.style.width = '70px';
    logo.style.display= 'none';
    quest.value = ''
    perfil.style.display= 'none';
  }

})

quest.addEventListener('focus', function() {
  quest.value = ''

  if (navBar.style.width = '70px') {
    navBar.style.width = '325px';
    logo.style.display= 'block';  
    perfil.style.display= 'flex';
  }
})

quest.addEventListener('blur', function() {
  quest.value = 'buscar'
})
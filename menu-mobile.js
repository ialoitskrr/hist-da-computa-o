const menulista = document.querySelector('.menu-list');
const menuicon = document.querySelector('.menu-icon');

menuicon.addEventListener('click', () =>{
    menulista.classList.toggle('ativo')
    menuicon.classList.toggle('ativo')
})

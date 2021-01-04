//selectors
let header = document.querySelector('.header');
let hamburgerMenu = document.querySelector('.hamburger-menu');


window.addEventListener('scroll',function() {
    let windowPosition = window.scrollY > 300; 
    header.classList.toggle('active', window.scrollY > 300)
})

hamburgerMenu.addEventListener('click', function () {
    header.classList.toggle('menu-open');
})
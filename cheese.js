// hamburger 

let hamburger = document.querySelector('.fa-bars');

// ul to animate 

const ulNav = document.querySelector('.nav-ul');



hamburger.addEventListener('click', () => {
    ulNav.classList.toggle('open');
    
})
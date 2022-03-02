// NAV 

// hamburger 

let hamburger = document.querySelector('.fa-bars');

// ul to animate 

const ulNav = document.querySelector('.nav-ul');



hamburger.addEventListener('click', () => {
    ulNav.classList.toggle('open');
    
})

// first img

const firstImg = document.querySelector('.img5');



// images in order of animation 

const secondImg = document.querySelector('.img4');


const thirdImg = document.querySelector('.img3');


// image on the background with no animation 

const backImg = document.querySelector('.img1');

// event listener that starts in the first image and 
// first, second and third image have animation
// and last image (background) stays still.


firstImg.addEventListener('mouseover', () => {

    if (firstImg.classList.contains('number10')){

        // add new class
        thirdImg.classList.toggle("number6");
        secondImg.classList.toggle("number8");
        firstImg.classList.toggle("number10");
    }
        
    firstImg.classList.toggle("number5");
    secondImg.classList.toggle("number4");
    thirdImg.classList.toggle("number3");   
})

backImg.addEventListener('mouseout', () => {
    // remove previous class 
    thirdImg.classList.toggle("number3");
    secondImg.classList.toggle("number4");
    firstImg.classList.toggle("number5");
    

    // add new class
    thirdImg.classList.toggle("number6");
    secondImg.classList.toggle("number8");
    firstImg.classList.toggle("number10");
})


// NUMMER
// NUMMER
// NUMMER
// NUMMER

// first img

const firstN = document.querySelector('.n5');



// images in order of animation 

const secondN = document.querySelector('.n4');


const thirdN = document.querySelector('.n3');

// image on the background with no animation 

const backN = document.querySelector('.n1');


// event listener for the outer pic

firstN.addEventListener('mouseover', () => {

    if (firstN.classList.contains('number10')){

        // add new class
        thirdN.classList.toggle("number6");
        secondN.classList.toggle("number8");
        firstN.classList.toggle("number10");
    }
        
    firstN.classList.toggle("number5");
    secondN.classList.toggle("number4");
    thirdN.classList.toggle("number3");   
})


// event listener that starts with the img on the back

backN.addEventListener('mouseout', () => {
    // remove previous class 
    thirdN.classList.toggle("number3");
    secondN.classList.toggle("number4");
    firstN.classList.toggle("number5");
    

    // add new class
    thirdN.classList.toggle("number6");
    secondN.classList.toggle("number8");
    firstN.classList.toggle("number10");
})
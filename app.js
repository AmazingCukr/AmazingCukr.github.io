//SLIDER
const slideshowImages = document.querySelectorAll(".slideshow");

const nextImageDelay = 5000; 
let currentImageCounter = 0;

slideshowImages[currentImageCounter].style.opacity = "1"; 


setInterval(nextImage, nextImageDelay);

function nextImage(){
        
    slideshowImages[currentImageCounter].style.zIndex = "-2";
    const tempCounter = currentImageCounter;

    setTimeout(() =>{

    slideshowImages[tempCounter].style.opacity = "0";

    },1000);

    currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
    slideshowImages[currentImageCounter].style.opacity = "1";
    slideshowImages[currentImageCounter].style.zIndex = "-1";
}



//LIGHTBOX
/* const modal = document.querySelector('.modal')
const image = document.querySelectorAll('.photos')
const original = document.querySelector('.full-img')


    w


image.forEach(preview => {
    preview.addEventListener('click', () => {
        modal.classList.add('open');
        original.classList.add('open');

        const originalSrc = preview.getAttribute('data-original');
        original.src = originalSrc;
        
        
    });
});

modal.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal')){
        modal.classList.remove('open')
        original.classList.remove('open');
    }
});  */

//NAVBAR

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-link li');

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
    
        navLinks.forEach((link, index) =>{
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation='';
            } else {
                link.style.animation =`navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
            });
        });

        burger.classList.toggle('toggle');

    });


}

navSlide();

/* document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelectorAll(this.getAttribute("href")).scrollIntoView({
                behaviour: "smooth "
        })
    })
}) */
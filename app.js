
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


const modal = document.querySelector('.modal')
const previews = document.querySelectorAll('.photos')
const original = document.querySelector('.full-img')



previews.forEach(preview => {
    preview.addEventListener('click', () => {
        modal.classList.add('open');
        original.classList.add('open');

        const originalSrc = preview.getAttribute("data-original");
        //original.src = originalSrc;
        console.log(originalSrc)
        
    });
});

modal.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal')){
        modal.classList.remove('open')
        original.classList.remove('open');
    }
});
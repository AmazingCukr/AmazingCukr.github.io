
const slideshowImages = document.querySelectorAll(".slideshow");

const nextImageDelay = 5000; 
let currentImageCounter = 0;

slideshowImages[currentImageCounter].style.opacity = "1"; 


setInterval(nextImage, nextImageDelay);

function nextImage(){
    //slideshowImages[currentImageCounter].style.opacity = "0";
    
    slideshowImages[currentImageCounter].style.zIndex = "-2";
    const tempCounter = currentImageCounter;

    setTimeout(() =>{

    slideshowImages[tempCounter].style.opacity = "0";

    },1000);

    currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
    slideshowImages[currentImageCounter].style.opacity = "1";
    slideshowImages[currentImageCounter].style.zIndex = "-1";
}
//
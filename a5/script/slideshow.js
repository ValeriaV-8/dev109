// Select all images
const images = document.querySelectorAll(".images img");

// For list
let slideIndex = 0;

// For description
let captionText = document.getElementById("caption");

// First slide
firstSlide();

// First slide
function firstSlide(){
    if(images.length > 0){
        images[slideIndex].classList.add("displaySlide");
    }
    captionText.innerHTML = images[slideIndex].alt;
}

// Show slides
function showSlide(index){
    // Resets to first image
    if(index >= images.length){
        slideIndex = 0;
    }
    // Pass
    else if(index < 0){
        slideIndex = images.length - 1;
    }
    images.forEach(show => {
        // Removes class from current image
        show.classList.remove("displaySlide");
    });
    // Adds class to next image
    images[slideIndex].classList.add("displaySlide");

    // Addes text to images
    captionText.innerHTML = images[slideIndex].alt;
}

// For prev button
function prevImage(){
    slideIndex--;
    showSlide(slideIndex)
}

// For next button
function nextImage(){
    slideIndex++;
    showSlide(slideIndex);
}

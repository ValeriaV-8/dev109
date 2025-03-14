// Select all images
const images = document.querySelectorAll(".images img");

// For list
let slideIndex = 0;
let intervalId = null;

// For description
let captionText = document.getElementById("caption");

// Timer
function timer(){
    var sec = 4;
    var timer = setInterval(function(){
        document.getElementById('timer').innerHTML = sec + " secs";
        sec--;
        if (sec < 1) {
            clearInterval(timer);
        }
    }, 1000);
}


// First slide
firstSlide();

// First slide
function firstSlide(){
    if(images.length > 0){
        images[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextImage, 5000);
        timer();
    }
    captionText.innerHTML = images[slideIndex].alt;
}

// Show slides
function showSlide(index){
    // Resets to first image
    if(index >= images.length){
        slideIndex = 0;
        timer();
    }
    // Pass
    else if(index < 0){
        slideIndex = images.length - 1;
        timer();
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
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex)
    intervalId = setInterval(nextImage, 5000);
    timer();
}

// For next button
function nextImage(){
    clearInterval(intervalId);
    slideIndex++;
    showSlide(slideIndex);
    intervalId = setInterval(nextImage, 5000);
    timer();
}

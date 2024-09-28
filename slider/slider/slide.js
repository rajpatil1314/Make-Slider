// let slideIndex = 0;
// showSlides(); 

// function showSlides() {
//     let i;

   
//     let slides = document.getElementsByClassName("image-sliderfade");

//     /
//     let dots = document.getElementsByClassName("dot");

//     for (i = 0; i < slides.length; i++) {
      
//         slides[i].style.display = "none";
//     }


//     slideIndex++;

  
//     if (slideIndex > slides.length) {
//         slideIndex = 1;
//     }

//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }

//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";

//     setTimeout(showSlides, 2000);
// }


let slideIndex = 0;
showSlides(slideIndex);

function showSlides(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        slideIndex = 0;
    }
    if (index < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach((slide, i) => {
        slide.style.display = (i === slideIndex) ? 'block' : 'none';
    });
}

function nextSlide() {
    slideIndex++;
    showSlides(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlides(slideIndex);
}


setInterval(() => {
    nextSlide();
}, 5000); 
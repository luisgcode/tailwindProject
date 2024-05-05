"use strict";

const testimonialSlider = document.getElementById("testimonialSlider");
const testimonialDots = document.querySelectorAll(".dot");
const slides = document.querySelectorAll(".testimonial-slide");

let currentSlide = 0;
let touchStartX = 0;
let touchEndX = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.remove("hidden");
    } else {
      slide.classList.add("hidden");
    }
  });

  testimonialDots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("bg-orange-300");
    } else {
      dot.classList.remove("bg-orange-300");
    }
  });
}

function goToSlide(slideIndex) {
  currentSlide = slideIndex;
  showSlide(currentSlide);
}

function handleSwipe() {
  const diff = touchEndX - touchStartX;
  if (diff > 0) {
    // Swipe right
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1); // Go to the previous slide
    } else {
      goToSlide(slides.length - 1); // Go to the last slide (circular effect)
    }
  } else if (diff < 0) {
    // Swipe left
    if (currentSlide < slides.length - 1) {
      goToSlide(currentSlide + 1); // Go to the next slide
    } else {
      goToSlide(0); // Go to the first slide (circular effect)
    }
  }
}

testimonialSlider.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
});

testimonialSlider.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].clientX;
  handleSwipe();
});

// Show initial slide and active dot (add bg-orange-300 class to first dot)
testimonialDots[0].classList.add("bg-orange-300");
showSlide(currentSlide);

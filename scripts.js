let currentSlide = 0;
const sliderTrack = document.getElementById("sliderTrack");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function updateSlidePosition() {
  const slideWidth = slides[0].offsetWidth;
  sliderTrack.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

nextButton.onclick = () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlidePosition();
};

prevButton.onclick = () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlidePosition();
};


let autoSlideInterval = setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlidePosition();
}, 5000);

sliderTrack.onmouseenter = () => clearInterval(autoSlideInterval);
sliderTrack.onmouseleave = () => {
  autoSlideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlidePosition();
  }, 5000);
};

window.addEventListener("resize", updateSlidePosition);

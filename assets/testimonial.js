// document.addEventListener('DOMContentLoaded', function () {
//   const slides = document.querySelectorAll('.slide');
//   const totalSlides = slides.length;
//   let currentIndex = 0;

//   const updateSlidePosition = () => {
//     const sliderContainer = document.querySelector('.slider-container');
//     sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
//   };

//   // Next Button
//   const nextButton = document.querySelector('.next-btn');
//   nextButton.addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % totalSlides;
//     updateSlidePosition();
//   });

//   // Previous Button
//   const prevButton = document.querySelector('.prev-btn');
//   prevButton.addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
//     updateSlidePosition();
//   });

//   // Optional: Auto-slide every 3 seconds
//   setInterval(() => {
//     currentIndex = (currentIndex + 1) % totalSlides;
//     updateSlidePosition();
//   }, 3000); // Slide duration in milliseconds
// });
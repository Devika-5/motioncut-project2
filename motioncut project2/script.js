document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const slideElements = document.querySelectorAll('.slide');
    const totalSlides = slideElements.length;
    let currentIndex = 0;

    function showSlide(index) {
        const offset = -index * 100;
        slides.style.transform = `translateX(${offset}%)`;
    }

    document.querySelector('.prev').addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
        showSlide(currentIndex);
    });

    document.querySelector('.next').addEventListener('click', function() {
        currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
        showSlide(currentIndex);
    });
});

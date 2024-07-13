document.addEventListener('DOMContentLoaded', () => {
    const scroller = document.querySelector('.scroller');
    const items = document.querySelectorAll('.slide');
    const dotsWrapper = document.querySelector('.dots-container');
    const itemsPerSlide = 3;
    const totalSlides = Math.ceil(items.length / itemsPerSlide);
    let index = 0;

    // Create dots
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dotsWrapper.appendChild(dot);
    }
    const dots = document.querySelectorAll('.dot');

    function updateScroller() {
        scroller.style.transform = `translateX(-${index * 100 / itemsPerSlide}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index % totalSlides].classList.add('active');
    }

    function scrollNext() {
        index++;
        if (index >= totalSlides) {
            index = 0;
        }
        updateScroller();
        setTimeout(scrollNext, 2000);
    }

    // Add click event listener to dots
    dots.forEach((dot, dotIndex) => {
        dot.addEventListener('click', () => {
            index = dotIndex;
            updateScroller();
        });
    });

    scrollNext();
});

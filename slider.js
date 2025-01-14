function scrollSlider(sliderId, amount) {
    const slider = document.getElementById(sliderId);
    slider.scrollBy({
        left: amount,
        behavior: 'smooth',
    });
}

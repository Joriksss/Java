let swiper = new Swiper(".swiper", {
    grabCursor: true,
    direction: 'vertical',
    speed: 500,
    effect: "slide",
    loop: true,
    mousewheel: {
        invert: false,
        sensitivivty: 1,
    },
    autoplay: {
        delay: 2000,
    }
});

swiper.enabel();
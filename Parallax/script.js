gsap.to('#bg', {
    scrollTrigger : {
        scrub: 1
    },
    scale: 1.5
})

gsap.to('#man', {
    scrollTrigger : {
        scrub: 1
    },
    scale: 0.5
})

gsap.to('#mountain_left', {
    scrollTrigger : {
        scrub: 1
    },
    x: -500
})

gsap.to('#mountain_right', {
    scrollTrigger : {
        scrub: 1
    },
    x: +500
})

gsap.to('#text', {
    scrollTrigger : {
        scrub: 1
    },
    y: 500
})

gsap.to("#text2", {
    scrollTrigger:{
        trigger: "#text2",
        start: "top 80%",
        end: "top 50%",
        markers: false,
    },
    x: 700
})


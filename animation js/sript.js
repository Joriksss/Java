// let controll = gsap.to(".block", {
//     x: 1200,
//     y: 0,
//     duration: 11,
//     rotation: 360,
//     stagger: .5, 
//     ease: "bounce.out"   
// })


// document.querySelector('#play').onclick = () => controll.play();
// document.querySelector('#pause').onclick = () => controll.pause();
// document.querySelector('#resume').onclick = () => controll.resume();
// document.querySelector('#reverse').onclick = () => controll.reverse();
// document.querySelector('#restart').onclick = () => controll.restart();
// document.querySelector('#repeat').onclick = () => controll.repeat();


let tween = gsap.timeline({repeat: 0, repeatDelay: 1});

tween.to('h1', {
    x: 0,
    ease: "bounce.out",
    duration: 2,
})

tween.to('h2', {
    x: 0,
    ease: "bounce.out",
    duration: 2,
}, "-=1")

tween.to('h1', {
    fontSize: '6rem',
    color: 'red',
    rotation: 4,
}, "+=1")

tween.to('h2', {
   fontSize: '6rem',
   color: 'green',
   rotation: -10,
}, "-=1")


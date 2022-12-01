// gsap.to(".mb-0", {x: 50, duration: 1});

const namefl = new SplitType('.namefl')

gsap.to('.char', {
    y: 0,
    stagger: 0.05,
    delay:0.2,
    duration: .1
})

gsap.fromTo( ".flow-right",{ x: -600 }, { duration: 1.2, x:0,});

gsap.fromTo( ".flow-left",{ x: 1600 }, { duration: 1.2, x:0,});
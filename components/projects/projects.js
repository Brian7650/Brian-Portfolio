// const namefl = new SplitType('.namefl')

// gsap.to('.char', {
//     y: 0,
//     stagger: 0.05,
//     delay:0.2,
//     
// })

gsap.fromTo( ".flow-right",{ x: -600 }, { duration: 1.2, x:0,});

gsap.fromTo( ".flow-left",{ x: 1200 }, { duration:1.2, x:0,});

gsap.from( ".card",{ y: 250 }, { duration:7, x:0,});
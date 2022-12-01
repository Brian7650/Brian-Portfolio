

gsap.fromTo( ".flow-right",{ x: -600 }, { duration: 1.2, x:0,});

gsap.fromTo( ".flow-left",{ x: 1200 }, { duration:1.2, x:0,});

// gsap.to("h3", {scaleX: 2, scaleY: 2, duration: 1});

gsap.from( ".card", { y: 250, ease: "bounce.out", duration:2}, {x:0,});

// gsap.to('h3', { scale: 1.1, eaae })

$("h3").mouseenter(function(){
    TweenLite.to(this, 1, {scale:1.1})
  })
  
  $("h3").mouseleave(function(){
    TweenLite.to(this, 1, {scale:1})
  })

  $(".card").mouseenter(function(){
    TweenLite.to(this, 1, {scale:1.05})
  })
  
  $(".card").mouseleave(function(){
    TweenLite.to(this, 1, {scale:1})
  })

// gsap.to("h3", {
//     scaleX: 1.8,
//     scaleY: 1.8
// });

// gsap.to(".card", {scaleX: 2, scaleY: 2, duration: 1});


gsap.fromTo( ".flow-right",{ x: -600 }, { duration: 1.2, x:0,});

gsap.fromTo( ".flow-left",{ x: 1200 }, { duration:1.2, x:0,});

$("h3").mouseenter(function(){
    TweenLite.to(this, 1, {scale:1.1})
  })
  
  $("h3").mouseleave(function(){
    TweenLite.to(this, 1, {scale:1})
  })
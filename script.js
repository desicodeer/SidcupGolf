
let cur = document.querySelector("#cursor");
let curBlur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove",(mov)=>{
    cur.style.left= mov.x+"px";
    cur.style.top = mov.y+"px";
    curBlur.style.left = mov.x-150 + "px";
    curBlur.style.top = mov.y-150 + "px";
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "100px",
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
      // markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });
  gsap.to("#main", {
    backgroundColor : "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        // markers:true,
        start: "top: -30%",
        end : "top: -90%",
        scrub:2
    },

  });
  // gsap.from(".card", {
  //   scale: 0.8,
  //   // opacity:0,
  //   duration: 1,
  //   stagger: 0.1,
  //   scrollTrigger: {
  //     trigger: ".card",
  //     scroller: "body",
  //     // markers:false,
  //     start: "top 70%",
  //     end: "top 65%",
  //     scrub: 1,
  //   },
  // });
  gsap.from(".about-us img, .about-content", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".about-us",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });
 
  gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  
  gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      // markers:true,
      start: "top 75%",
      end: "top 70%",
      scrub: 3,
    },
  });

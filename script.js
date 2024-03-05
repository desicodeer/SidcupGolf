
let cur = document.querySelector("#cursor");
let curBlur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove",(mov)=>{
    cur.style.left= mov.x+"px";
    cur.style.top = mov.y+"px";
    curBlur.style.left = mov.x-150 + "px";
    curBlur.style.top = mov.y-150 + "px";
})

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
    }

  })
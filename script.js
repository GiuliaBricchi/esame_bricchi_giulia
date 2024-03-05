

//menu
const menu = document.querySelector('#menu')
const toggle = document.querySelector('#toggle')

const toggleMenu = () => {
  toggle.classList.toggle('is-active')
  menu.classList.toggle('active')
}

document.addEventListener('DOMContentLoaded', () =>{
  toggle.addEventListener('click', toggleMenu)
})



//read more
$(document).ready(function() {
  $("#read-more-btn").click(function() {
    $("#hidden-text").toggleClass("d-none");
    $(this).text(function(i, text){
      return text === "Read More" ? "Read Less" : "Read More";
    });
  });
});


//scrolltrigger
const anim = () => {
  const vwidth = window.innerWidth; 
  const message1 = document.getElementById("message1");

  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#headline",
      pin: true, 
      start: "top 100px", 
      scrub: true,
      markers: false,
      onEnter: () => { 
        console.log("enter");
      },
      onLeave: () => { 
        console.log("leave");
      }
    }
  });

  tl2.from(message1, 1, { x: -vwidth });

  message1.addEventListener("click", () => {
    gsap.set(message1, { x: 100 });
  });
};

document.addEventListener("DOMContentLoaded", anim);

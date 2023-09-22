// Toggle button work start
const togglebtn = document.querySelector(".toggle-btn");
const navlinks = document.querySelector(".nav-links");
const icon = document.querySelector(".fas");
togglebtn.addEventListener("click",()=>{
    navlinks.classList.toggle("active")
    icon.classList.toggle("fa-bars-staggered");
    icon.classList.toggle("fa-times");
})
// Toggle button work end

// Owl carousel

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        dots:false,
        autoplay:true,
       autoplaySpeed:500,
       smartSpeed:1000,
       autoplayHoverPause:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:true,
                loop:true
            },
            1000:{
                items:4,
                nav:true,
                loop:true
            }
        }
    })
  });
    

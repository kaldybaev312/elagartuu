$(document).ready(function(){
    const slider = $(".profile_cards").owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,

        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    });
});
$(document).ready(function(){
    const slider = $("#ar_2019").owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        dots:true,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });
});

$(document).ready(function(){
    const slider = $("#ar_2020").owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        dots:true,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });
});

$(document).ready(function(){
    const slider = $("#ar_2021").owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        dots:true,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });
});

$(document).ready(function(){
    const slider = $("#ar_2022").owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        dots:true,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });
});

$(document).ready(function(){
    const slider = $("#ar_2023").owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        dots:true,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });
});

//burger menu
document.getElementById("menu-toggle").addEventListener("click", function() {
    var navLinks = document.getElementById("nav_links");
    if (navLinks.style.display === "flex") {
      navLinks.style.display = "none";

    } else {
      navLinks.style.display = "flex";
    }
  });
  
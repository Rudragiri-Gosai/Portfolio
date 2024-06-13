let mybutton = document.getElementById("go-up");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var t1 = gsap.timeline()
var t2 = gsap.timeline()
var t3 = gsap.timeline()
var t4 = gsap.timeline()
var t5 = gsap.timeline()
var t6 = gsap.timeline()
var t7 = gsap.timeline()
t1.from("#logo ",{
    transform:"translateY(-130%)",
    duration:1,
    delay: 10,
});
t1.from(".nav-item",{
    transform:"translateY(-120%)",
    duration:.6,
    stagger: 1,
});

t2.from("#hello",{
    transform:"translateY(-120%)",
    duration:2,
    opacity:0
});

t2.from("#hero-heading",{
    transform:"translateY(-120%)",
    duration:1,
    opacity:0
});
t2.from("#bhavya",{
    transform:"translateY(-120%)",
    duration:2,
    opacity:0
});
t2.from("#hero-subheading",{
    transform:"translateY(-120%)",
    duration:.3,
    opacity:0,
});
t2.from("#stack",{
    transform:"translateY(-120%)",
    duration:2,
    opacity:0,
});

t2.from("#person",{
    transform:"scale(1)",
    duration:2,
    opacity:0,
});


t2.from("#links",{
    transform:"translateY(-40%)",
    duration:3,
    opacity:0,
    stagger:.2
});

t1.from("#sd",{
    transform:"translateY(-100%) rotate(90deg)",
    duration:7,
    opacity:0,
});


t4.from("#about-h",{
    transform:"translateY(-150px)",
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-h",
        scroller:"body",
        scrub:5,
        // start:"top 0",
        // end:"top 100%",
        // markers:true,
    }
})

t4.from("#hero-subheading-a",{
    transform:"translateY(-100%)",
    opacity:0,
    scrollTrigger:{
        trigger:"#hero-subheading-a",
        scroller:"body",
        scrub:5,
        // start:"top 0",
        // end:"top -100%",
        // markers:true,
    }
})
t4.from("#person-a",{
    transform:"scale(1)",
    duration:4,
    opacity:0,
    scrollTrigger:{
        trigger:"#person-a",
        scroller:"body",
        scrub:5,
        // start:"top 0",
        // end:"top -100%",
    }
});

t5.from("#my-skill",{
    transform:"translateY(-100px)",
    duration:3,
    opacity:0,
    scrollTrigger:{
        trigger:"#my-skill",
        scroller:"body",
        scrub:5,
        // start:"top 0",
        // end:"top -200%",
    }
});
t5.from(".allskills",{
    transform:"translateY(-100px)",
    duration:6,
    opacity:0,
    stagger:2,
    scrollTrigger:{
        trigger:".allskills",
        scroller:"body",
        scrub:5,
        // start:"top 0",
        // end:"top -200%",
    }
});


t6.from("#heading-service",{
    transform:"translateY(-50px)",
    opacity:0,
    scrollTrigger:{
        trigger:"#heading-service",
        scroller:"body",
        scrub:5,
        // start:"top 0",
        // end:"top -100%",
        // markers:true,
    }
})

t6.from(".subheading-service",{
    transform:"translateY(-100%)",
    opacity:0,
    scrollTrigger:{
        trigger:".subheading-service",
        scroller:"body",
        scrub:5,
        // start:"top 0",
        // end:"top -100%",
        // markers:true,
    }
})

t6.from("#service-card",{
    transform:"translateY(-30px)",
    duration:1,
    opacity:0,
    stagger:.2,
    scrollTrigger:{
        trigger:"#service-card",
        scroller:"body",
        scrub:3,
        // start:"top 0",
        // end:"top -100%",
        // markers:true,
    }
})



t7.from(".resume-sub",{
    transform:"translateY(-50px) ",
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:".resume-sub",
        scroller:"body",
        // start:"top 0",
        // end:"top -100%",
        scrub:5
    }
});
t7.from("#heading-resume",{
    transform:"translateY(-50px) ",
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#heading-resume",
        scroller:"body",
        // start:"top 0",
        // end:"top -100%",
        scrub:5
    }
});
t7.from("#ed",{
    transform:"translateY(-50px) ",
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#ed",
        scroller:"body",
        scrub:5
        // start:"top 0",
        // end:"top -100%",
    }
});
t7.from("#ex",{
    transform:"translateY(-50px) ",
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
        trigger:"#ex",
        scroller:"body",
        scrub:5
        // start:"top 0",
        // end:"top -100%",
    }
});
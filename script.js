const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function circleMouseFollower (){
    window.addEventListener("mousemove", function (dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`
         
    } )
}

function firstPageAnimation (){
    var tl = gsap.timeline();

    tl.from("#nav",{
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })  
        .to(".boundingelem",{
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delayed : -1,
        stagger: .2
        })
        .from("#herofooter",{
        y: -10,
        opacity: 0,
        duration : 1.5,
        delayed : -1,
        ease: Expo.easeInOut
        })
}

// Box Animation 

document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mouseleave" ,function(dets){
        
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot =  dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease : Power3,
            duration : .5
        });
    });

    elem.addEventListener("mousemove" ,function(dets){
        
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot =  dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease : Power3,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20 , diffrot * .8)
        });
    });
});

circleMouseFollower();
firstPageAnimation();


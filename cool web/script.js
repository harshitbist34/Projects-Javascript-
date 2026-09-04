// import LocomotiveScroll from 'locomotive-scroll';

// const scroll = new LocomotiveScroll()

function firstPageAnimation() {
    var tl = gsap.timeline();

    tl.from("#nav", { // Fixed selector
        y: "30",
        opacity: 0,
        ease: "expo.inOut", // Fixed GSAP 3 syntax
        duration: 1.2
    })
    .to(".boundingelem", {
        y: 0,
        ease: "expo.inOut", // Fixed GSAP 3 syntax
        duration: 2,
        stagger: 0.2 // Added stagger for a better cascading effect
    });

    tl.from("#heroFooter", { // Fixed selector
        y: "-10",
        opacity: 0,
        ease: "expo.inOut", // Fixed GSAP 3 syntax
        duration: 1
    }, "-=1.5")
}

// firstPageAnimation();

//for mouse circle skew
// set highest and lowest skew value while cursor moving


var timeout;

function circleChaptaKaro() {
    // 1. Default scale values
    var xscale = 1;
    var yscale = 1;

    // 2. Previous mouse coordinates
    var xPrev = 0;
    var yPrev = 0;

    window.addEventListener("mousemove", function (dets) {
        clearTimeout(timeout); // Reset idle timer on move

        // 3. Calculate mouse speed (current - previous)
        var xdiff = dets.clientX - xPrev;
        var ydiff = dets.clientY - yPrev;

        // 4. Update previous coordinates for next frame
        xPrev = dets.clientX;
        yPrev = dets.clientY;

        // 5. Clamp scaling limits (min: 0.8, max: 1.2)
        xscale = gsap.utils.clamp(0.8,1.2, xdiff);
        yscale = gsap.utils.clamp(0.8, 1.2, ydiff);

        // 6. Apply dynamic scale and position
        circleMouseFollower(xscale, yscale, dets);

        // 7. Revert to perfect circle if idle for 100ms
        timeout = setTimeout(function () {
            document.querySelector("#miniCircle").style.transform = `translate(${dets.clientX - 7.5}px, ${dets.clientY - 7.5}px) scale(1, 1)`;
        }, 100);
    });
}


function circleMouseFollower(xscale, yscale, dets) {
    // Move cursor to mouse position and apply squeeze effect
    document.querySelector("#miniCircle").style.transform = `translate(${dets.clientX - 7.5}px, ${dets.clientY - 7.5}px) scale(${xscale}, ${yscale})`;
}

// teeno element ko sleect karo, uske baad teeno par ek mousemove lagao,
//  jab mousemove ho to ye pata karo ki mouse kaha par hai, jiska matlab
//  hai mouse ki x and y position pata karo, ab mouse ki x y position ke
//  badle us image ko show karo and us image ko move karo, move karte waqt
//  rotate karo, and jaise jaise mouse tez chale waise waise rotation bhi
//  tez ho jaye

document.querySelectorAll(".elem").forEach(function (elem) {

    var rotate = 0;
    var diffRot = 0;

    elem.addEventListener("mousemove", function(dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffRot= dets.clientX- rotate;
        rotate = dets.clientX ;

        gsap.to(elem.querySelectorAll("img"), {
            opacity: 1,
            ease: "power1.out",
            top : diff,
            left : dets.clientX,
            rotate : gsap.utils.clamp(-30 , 30 , diffRot)
        });
    });

         elem.addEventListener("mouseleave", function(dets) {

        gsap.to(elem.querySelectorAll("img"), {
            opacity: 0,
            // ease: "power1",
        });
    });

});


firstPageAnimation();
circleChaptaKaro(); // Initialize function





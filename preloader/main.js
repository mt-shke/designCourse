import imagesLoaded from "imagesloaded";
import { gsap } from "gsap";

const content = document.querySelector("section");

const imgLoad = imagesLoaded(content);

imgLoad.on("done", (instance) => {
    // hide icon
    // gsap.to("svg", {
    //     scale: 0,
    // });

    // gsap.to(".blinder", {
    //     scaleY: 0,
    //     stagger: 0.3,
    //     ease: "power3.out",
    // });

    const tl = gsap.timeline();
    // const tl = gsap.timeline(defaults:{duration:.3})
    tl.to("svg", {
        scale: 0,
    })
        .to(".blinder", {
            scaleY: 0,
            stagger: 0.3,
            ease: "power3.out",
        })
        .to(
            ["h1", "p"],
            {
                y: 0,
                stagger: 0.3,
                duration: 2,
                ease: "power4.out",
            },
            0
        );
});

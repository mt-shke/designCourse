# Preloader

<details>
<summary>Documentation</summary>

packages

```js
// - sass
// - vite@lastest
// - gsap
// - imagesloaded
```

path

```js
// - figma > ellipse, mask
// - copy as svg
// - add css style and goo effect
// <g mask="url(#mask0_0_1)" filter="url(#goo)">
// - add gsap and imagesLoaded functions
```

links

```js
// - green sock ease (effect animation curve )
// https://greensock.com/docs/v2/Easing
```

</details>

<details>
<summary>Html</summary>

```js
<div class="loader">
    <div class="blinder-container">
        <div class="blinder"></div>
        <div class="blinder"></div>
        <div class="blinder"></div>
        <div class="blinder"></div>
        <div class="blinder"></div>
    </div>

    <svg
        width="84"
        height="84"
        viewBox="0 0 84 84"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <defs>
            <filter id="goo">
                <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="10"
                    result="blur"
                />
                <feColorMatrix
                    in="blur"
                    type="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                    result="goo"
                />
                <feBlend in="SourceGraphic" in2="goo" />
            </filter>
        </defs>

        <mask
            id="mask0_0_1"
            style="mask-type: alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="84"
            height="84"
        >
            <circle cx="42" cy="42" r="42" fill="white" />
        </mask>
        <g mask="url(#mask0_0_1)" filter="url(#goo)">
            <path
                class="drip-loader"
                d="M42.8926 -8.45091C42.5227 -9.18303 41.4773 -9.18303 41.1074 -8.45091L32.6912 8.209C31.0087 10.2745 30 12.9106 30 15.7823C30 22.4097 35.3726 27.7823 42 27.7823C48.6274 27.7823 54 22.4097 54 15.7823C54 12.9106 52.9913 10.2745 51.3088 8.209L42.8926 -8.45091Z"
                fill="white"
            />
            <circle cx="42" cy="42" r="40" stroke="white" stroke-width="4" />
            <ellipse cx="42" cy="-16" rx="42" ry="32" fill="white" />
        </g>
    </svg>
</div>
```

</details>

<details>
<summary>Css</summary>

```css
.drip-loader {
    animation: animateDrips 1s infinite;
}

@keyframes animateDrips {
    to {
        transform: translateY(100px);
    }
}
```

</details>

<details>
<summary>Js</summary>

```js
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
    // const tl = gsap.timeline(defaults:{duration:.3})
    const tl = gsap.timeline();
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
```

</details>

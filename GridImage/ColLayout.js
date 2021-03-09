let $ = document.querySelector.bind(document);

const getRandomSize = function (min, max) {
    return Math.round(Math.random() * (max - min) + min);
};

const getRandomZeroToX = function (x) {
    return Math.floor(Math.random() * x);
};

const TITLE = [
    "short title",
    "something example long title for product, detail and evething, very long long long long long long long long long",
    "medium title for product",
];

const loadImage = function () {
    let $photos = $("#photos");
    for (let i = 0; i < 12; i++) {
        let width = getRandomSize(200, 400);
        let height = getRandomSize(200, 400);
        let numRandom = getRandomZeroToX(2);

        let node = `<div class="image"><img class="imgLazy" loading="lazy" src="https://picsum.photos/${width}/${height}?random=1" /><div class="img__title">${TITLE[numRandom]}</div></div>`;

        $photos.insertAdjacentHTML("beforeend", node);
    }
};

loadImage();

// window.addEventListener("scroll", loadImage);

// Lazy Loading
// document.addEventListener("DOMContentLoaded", function () {
//     let lazyloadImages = Array.from(document.querySelectorAll("img.imgLazy"));
//     let lazyloadThrottleTimeout;

//     function lazyload() {
//         if (lazyloadThrottleTimeout) {
//             clearTimeout(lazyloadThrottleTimeout);
//         }

//         lazyloadThrottleTimeout = setTimeout(function () {
//             let scrollTop = window.pageYOffset;
//             lazyloadImages.map(function (img) {
//                 if (img.offsetTop < window.innerHeight + scrollTop) {
//                     img.src = img.dataset.src;
//                     img.classList.remove("imgLazy");
//                 }
//             });
//             if (lazyloadImages.length == 0) {
//                 document.removeEventListener("scroll", lazyload);
//                 window.removeEventListener("resize", lazyload);
//                 window.removeEventListener("orientationChange", lazyload);
//             }
//         }, 20);
//     }

//     document.addEventListener("scroll", lazyload);
//     window.addEventListener("resize", lazyload);
//     window.addEventListener("orientationChange", lazyload);
// });

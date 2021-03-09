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

function setItemRatio() {
    this.parentNode.style.setProperty(
        "--ratio",
        this.naturalHeight / this.naturalWidth
    );
}

Array.from(document.querySelectorAll(".image img")).map((img) => {
    // Ideally, we would know the image size or aspect ratio beforehand...
    if (img.naturalHeight) {
        setItemRatio.call(img);
    } else {
        img.addEventListener("load", setItemRatio);
    }
});

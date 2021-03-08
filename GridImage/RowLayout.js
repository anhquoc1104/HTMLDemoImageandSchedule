let $ = document.querySelector.bind(document);

function getRandomSize(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

let allImages = "";

for (let i = 0; i < 12; i++) {
    let width = getRandomSize(200, 400);
    let height = getRandomSize(200, 400);
    allImages += `<div class="image"><img class="imgLazy" loading="lazy" src="https://picsum.photos/${width}/${height}?random=1" /><div class="img__title"></div></div>`;
}

$("#photos").innerHTML = allImages;

document.querySelectorAll(".item img").forEach((img) => {
    // Ideally, we would know the image size or aspect ratio beforehand...
    if (img.naturalHeight) {
        setItemRatio.call(img);
    } else {
        img.addEventListener("load", setItemRatio);
    }
});

function setItemRatio() {
    this.parentNode.style.setProperty(
        "--ratio",
        this.naturalHeight / this.naturalWidth
    );
}

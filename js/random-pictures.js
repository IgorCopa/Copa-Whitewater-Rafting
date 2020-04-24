let imgs;

function preLoad() {
    let number = Math.floor(Math.random()*5 + 1);
    let n = number;
    imgs = new Image();
    imgs.src = `../images/slider/slide${n}.jpg`;
}

function loadImg(img){
    let slider = document.querySelector(".header-top");
    slider.style.backgroundImage=`url('${imgs.src}')`;
    slider.style.backgroundRepeat = "no-repeat";
    slider.style.backgroundPosition = "center";
}

function begin(){
    preLoad();
    let currentImg = 0;
    loadImg(currentImg);
}

window.addEventListener('load', begin);
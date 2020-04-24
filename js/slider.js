let slider = document.querySelector(".header-top");
let imgs = [];
imgs.length = 5;
let currentImg;
let maxImg;
let time;
let timeChange;

function preLoad() {
    let n = 1;
    for(let i=0; i<imgs.length; i++){
        imgs[i] = new Image();
        imgs[i].src = `https://raw.githubusercontent.com/IgorCopa/Copa-Whitewater-Rafting/master/images/slider/slide${n}.jpg`;
        n++;
    }
}

function loadImg(img){
    slider.style.backgroundImage=`url('${imgs[img].src}')`;
    slider.style.backgroundRepeat = "no-repeat";
    slider.style.backgroundPosition = "center";
    slider.style.transition = "all .7s ease-in";
}

function begin(){
    preLoad();
    currentImg = 0;
    maxImg = imgs.length-1;
    loadImg(currentImg);
    timeChange = 3000;
    time = setInterval(toSwitch, timeChange);
}

function toSwitch(){
    currentImg++;
    if(currentImg>maxImg){
        currentImg = 0;
    }
    loadImg(currentImg);
}
window.addEventListener('load', begin);
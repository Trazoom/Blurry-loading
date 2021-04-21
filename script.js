const bg = document.getElementById('bg');
const pocentage = document.getElementById('pocentage');

let load = 0;

let int = setInterval(blurry, 30);

function blurry() {
    load++;
    pocentage.innerText = load + '%';
    const l = 30 - (load * 0.3);
    console.log(l);
    pocentage.style.opacity =  1 - (load / 100);
    bg.style.filter = `blur(${l}px)`;
    clearInterval(load > 99);
}

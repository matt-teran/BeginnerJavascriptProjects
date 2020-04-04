const IMG = ['img/bg1.jpeg', 'img/bg2.jpeg', 'img/bg3.jpeg', 'img/bg4.jpeg', 'img/bg5.jpeg'];
let index = 0;

document.querySelector('#left').onclick = () => {
    left();
}
document.querySelector('#right').onclick = () => {
    right();
}
window.addEventListener('keydown', (event) => {
    switch (event.code){
        case "ArrowLeft": left(); break;
        case "ArrowRight": right(); break;
    }
})

function setImage () {
    document.querySelector('img').src = IMG[index];
}
function left (){
    index==0 ? index = IMG.length -1 : index--;
    setImage();
}
function right(){
    index==IMG.length-1 ? index = 0 : index++;
    setImage();
}
setImage();

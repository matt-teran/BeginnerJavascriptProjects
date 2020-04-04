let colorCycle = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let currentColor = 0;
let documentBody = document.body;
document.querySelector('button').onclick = () => {cycle()}

function cycle (){
    currentColor++;
    if (currentColor===colorCycle.length) currentColor = 0;
    documentBody.style.backgroundColor = colorCycle[currentColor];
}
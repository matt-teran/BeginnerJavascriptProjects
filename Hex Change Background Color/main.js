function hexColorGenerator (){
    let newHex = '#';
    let i = 0;
    while (i < 6){
        let randomNumber = Math.floor(Math.random() * 16);
        if (randomNumber > 9){randomNumber = HEXCONVERTER[randomNumber]};
        newHex += randomNumber;
        i++;
    }
    return newHex;
}
const HEXCONVERTER = {10: 'a', 11: 'b', 12: 'c', 13: 'd', 14: 'e', 15: 'f'};

document.querySelector('button').onclick = () => { 
    let _hex = hexColorGenerator();
    document.body.style.backgroundColor = _hex;
    document.querySelector('h1').innerHTML = 'HEX COLOR: ' + _hex.toUpperCase();
}
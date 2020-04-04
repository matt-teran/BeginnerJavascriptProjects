const QUOTES = {
    0: ["Injustice anywhere is a threat to justice everywhere.", "Martin Luther King Jr."],
    1: ["If truth doesn't matter, we're lost.", "Adam Schiff"],
    2: ["Ask not what your country can do for you, ask what you can do for your country.", "John F. Kennedy"],
    3: ["Limitations stimulate creativity.", "Henry Mintzberg"],
    4: ["The more control you have over your attention, the more control you have over your future.", "James Clear"]
}

function pickRandomQuote (){
    let randomNumber = Math.floor(Math.random() * 5)
    quoteElement.innerHTML = QUOTES[randomNumber][0];
    authorElement.innerHTML = QUOTES[randomNumber][1];
}

let quoteElement = document.querySelector('#quote');
let authorElement = document.querySelector('#author');


document.querySelector('button').onclick = () => {pickRandomQuote()};

pickRandomQuote();
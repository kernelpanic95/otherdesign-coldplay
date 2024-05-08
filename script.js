var quotes = [
    'Lights will guide you home, and I will try..to fix you',
]

function newQuote(){
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

newQuote();

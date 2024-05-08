var quotes = [

    'Svaki dan je prilika za rast',
    'Kritika gradi tvog umjetničkog duha',
    'Tvoj razvoj je tvoja snaga',
    'Izazovi te oblikuju kao umjetnika',
    'Kroz kritiku postaješ jači',
    'Rast je put ka tvojoj najboljoj verziji',
    'Svaki korak je prilika za učenje',
    'Neprestano stvaraj',
    'Kritika nije prepreka, već stepenica',
    'Tvoja umjetnost raste s tobom',
    'Svaki izazov je prilika za tvoj napredak',
    'Kritika je samo još jedan korak ka tvom uspjehu',
    'Tvoja upornost je tvoja snaga u svakom trenutku',
    'Nikad ne prestaj sanjati',
    'Nastavi rasti i neustrašivo stvaraj',
    'Kroz izazove postaješ nezaustavljiv',
    'Stvaranje je tvoja sloboda izražavanja',
    'Vremenom otkrivaš svoju dublju svrhu',
    'Rast je tvoj stalni saputnik',
    'Kroz izazove cvjeta tvoja umjetnost',
    'Kritika te čini otpornijim',
    'Svaki dan donosi priliku za napredak',
    'Nikad ne prestaj rasti kao umjetnik',
    'Kritika je prilika za poboljšanje',
    'Tvoj rast je tvoj uspjeh',
    'Nikad ne prestaj razvijati svoju umjetnost'
]

function newQuote(){
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

newQuote();
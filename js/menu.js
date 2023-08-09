function getMeniuDuomenys() {
    return [
        {href: '/index.html', title: 'Home'},
        {href: '/about.html', title: 'About us'},
        {href: '/products.html', title: 'Products'},
        {href: '/contacts.html', title: 'Contact us'},
    ];
}

function kurtiMeniuElementa(href, title) {
    let meniuElementas = document.createElement('li');
    let meniuNuoroda = document.createElement('a');
    meniuNuoroda.href = href;
    meniuNuoroda.textContent = title;
    meniuElementas.append(meniuNuoroda);

    return meniuElementas;
}

function generuotiMeniu(kur) {
// Kadangi generuosdime LI tagus jie privalo buti UL tage
    let sarasas = document.createElement('ul');

// Sukame cikla kurio metu generuojamas Meniu elemento textas pagal meniuDuomenys kintamojo duomenis
    for (let i = 0; i < meniuDuomenys.length; i++) {

        // Pasiiimam informacija is masuyvo (Nuoroda i puslapi ir Pavadinima)
        let href = meniuDuomenys[i].href;
        let title = meniuDuomenys[i].title;

        // Formuojame HTML teksta pagal paimtus duomenis is masyvo
        // let meniuElementas = `<li><a href="${href}">${title}</a></li>`;
        let meniuElementas = kurtiMeniuElementa(href, title);

        // Papildome prie <ul> teksto naujai sugeneruota (eilute auksciau) <li> meniu elementa
        sarasas.append(meniuElementas);
    }

    return sarasas;
}

// Cia yra musu meniu duomenys (informacija)
const meniuDuomenys = getMeniuDuomenys();

// Elementas kur desime sugeneruota HTML teksta
let navTag = document.querySelector('header > nav');
let footer = document.querySelector('body > footer');

let meniu = generuotiMeniu();
let meniuF = generuotiMeniu();

// Papildome navTag elementa kuri pazymejme 11 eiluteje HTML tekstu kuri katik sugeneravo FOR ciklas
navTag.append(meniu);
footer.append(meniuF);


// Cia yra musu meniu duomenys (informacija)
const meniuDuomenys = [
    {href:'/index.html', title: 'Home'},
    {href:'/about.html', title: 'About us'},
    {href:'/products.html', title: 'Products'},
    {href:'/contacts.html', title: 'Contact us'},
];

// Elementas kur desime sugeneruota HTML teksta
let navTag = document.querySelector('header > nav');

// Kadangi generuosdime LI tagus jie privalo buti UL tage
let tempHtml = '<ul>';

// Sukame cikla kurio metu generuojamas Meniu elemento textas pagal meniuDuomenys kintamojo duomenis
for (let i = 0; i < meniuDuomenys.length; i++) {

    // Pasiiimam informacija is masuyvo (Nuoroda i puslapi ir Pavadinima)
    let href = meniuDuomenys[i].href;
    let title = meniuDuomenys[i].title;

    // Formuojame HTML teksta pagal paimtus duomenis is masyvo
    let meniuElementas = `<li><a href="${href}">${title}</a></li>`;

    // Papildome prie <ul> teksto naujai sugeneruota (eilute auksciau) <li> meniu elementa
    tempHtml += meniuElementas;

}
// Kadangi atidareme 15 eiluteje UL taga tai ji reikia uzdaryti uz ciklo ribu.
tempHtml += '</ul>';

// Papildome navTag elementa kuri pazymejme 11 eiluteje HTML tekstu kuri katik sugeneravo FOR ciklas
navTag.innerHTML += tempHtml;

// Elementu deklaravimas su kuriais dirbsime prie uzduoties
const forma = document.getElementById('manoForma');
const readButton = document.getElementById('read');
const h2 = document.getElementById('output');
let storage = localStorage;
const radioButtons = forma.saugyklosTipas;

// funkcija kuri klausosi RADIO mygtuku pasikeitimu/click'u kad poakeisti storage tipa
assignChangeEventsOn(radioButtons, e => {
    const newStorage = e.target.value === 'sessionStorage' ? sessionStorage : localStorage;
    changeStorage(newStorage);
    console.info('Storage changed to: ' + e.target.value)

});

// funkcija kuri klausosi RADIO mygtuku pasikeitimu/click'u kad poakeisti storage tipa
function assignChangeEventsOn(listOfElements, closure) {
    listOfElements.forEach(element => {
        element.addEventListener('change', closure);
    })
}

// funkcija kuri paima duomenis is pasirinkto Storage
function getFromStorage(raktoPavadinimas) {
    return storage.getItem(raktoPavadinimas);
}

// Funkcija kuri saugo duomenis i pasirinkta storage varianta
function store(raktoPavadinimas, verte) {
    // Gauta teksta is input 'verte' konvertuojame i Objekta su papildoma info 'data'
    const obj = {
        param: verte,
        data: '2023-01-01'
    };
    // Objekta paverciame i teksto eilute
    const objString = JSON.stringify(obj);

    // i storage saugome konvertuota teksto eilute
    storage.setItem(raktoPavadinimas, objString);
}

// Papildoma info kaip pakeisti STORAGE tipa
function changeStorage(newStorage) {
    storage = newStorage;
}

// Sukuriame formą su vienu input type text, h2 elementą formoje ir submit mygtuką.​
// JS apsirašome keyboard event, kad atleidus klaviatūros mygtuką iškarto būtų​
// atvaizduojamas vedamas tekstas ir nereiktų spausti Save. (keyup event).​
// Submit mygtukui reikia apsirašyti atskirą event, kad visa informacija išsisaugotų LocalStorage.
// Musu uzduoties sprendimas:
forma.addEventListener('submit', event => {
    event.preventDefault();
    const inputValue = event.target.elements.data.value;
    store('raktoPavadinimas', inputValue);
});

// Tai atskirta uzduoties dalis kuri atlieka spausdinima H2 elemente
readButton.addEventListener('click', e => {
    const duomenys = getFromStorage('raktoPavadinimas');
    // Gauta JSON irasa is Storage konvertuojame atgal i Objekta
    const objektas = JSON.parse(duomenys)
    h2.textContent = objektas.data + ' ] ' +objektas.param;
});




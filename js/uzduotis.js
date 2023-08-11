let masyvas = []; // Sukuriamas tuscias masyvas
const body = document.body; // Pazymine BODY taga esanti HTML'e
const input = document.createElement('input'); // Sukuriame nauja INPUT taga
const output = document.createElement('div'); // Sukuriamas masyvo printinimui skirtas elementas

// Sukuriami visi 4 masyvo manipuliavimo mygtukai
const pop = createButton(' - pop', salintiPabaigoje);
const shift = createButton('- shift', salintiPradzioje);
const push = createButton('+ push', pridetiPradzion);
const unshift = createButton('+ unshift', pridetiPabaigon);

// I BODY DOM elementa idedame visus katik sukurtus elementus
body.append(shift, unshift, input, push, pop, output);// Pridedame visus elementus i BODY elemento vidu

printArray(); // Spausdinamas pradinis tuscias masyvas

function createButton(name, handler){
    // Kuriamas tuscias BUTTON elementas
    const button = document.createElement('button');
    // mygtukui pridedamas uztrasas
    button.textContent = name;
    // katik sukurtam mygtukui prisegame EVENT'u handlinimo funkcija perduota per parametrus
    button.addEventListener('click', handler);

    // Grazinam mygtuka kad veliau galetume ji APPENDINT'i
    return button;
}

function salintiPabaigoje(){
    // Is masyvo pabaigoje pasaliname irasa ir atspausdinam jo reiksme consoleje
    console.log('Pasalintas paskutinis elementas: ', masyvas.pop());
    printArray();
}

function salintiPradzioje(){
    // Is masyvo pradzios pasaliname irasa ir atspausdinam jo reiksme consoleje
    console.log('Pasalintas paskutinis elementas: ', masyvas.shift());
    printArray();
}

function pridetiPradzion(){
    masyvas.push(input.value); // Pridedame INPUT laukelio ivesta reiksme i masyvo pabaiga
    printArray();
    input.value = ''; // Isvalome INPUT elemento turini
    input.focus(); // permetam kursoriu i INPUT elementa
}

function pridetiPabaigon(){
    masyvas.unshift(input.value); // Pridedame INPUT laukelio ivesta reiksme i masyvo pradzia
    printArray();
    input.value = ''; // Isvalome INPUT elemento turini
    input.focus(); // permetam kursoriu i INPUT elementa
}

function printArray() {
    // Istriname output turini jei toks buvo
    output.innerHTML = '[ ';
    // sudedame cilko metu masyvo duomenis i OUTPUT elementa
    for (let i = 0; i < masyvas.length; i++){
        // Paimamas MASYVO i-tasis elementas, pagal ciklo eiliskuma
        let item  = masyvas[i];
        // Sukuriamas skyriklio tekstas
        let  separator = ' | ';
        // Jei tai pirmasis ciklas tuomet skyriklio tekstas isvalomas
        // (Kad pries pirma masyvo elementa jis nebutu vaizduojamas)
        if (i === 0) {
            separator = '';
        }
        // I OUTPUT elementa pridedame skyriklio teksta ir masyvo reiksme
        output.innerHTML += separator + item;
    }
    // Del grazesnio atvaizdavimo idedam ] simboli
    output.innerHTML += ' ]';

    // pridedame elementa i BODY taga, net jei jis jau ten ir yra, tokiu atveju nieko nenutiks
    body.append(output);
}

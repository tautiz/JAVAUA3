const myForm = document.querySelector('form');
const rezultatai = document.querySelector('.rezultatai');
myForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formosElementai = e.target.elements;
    const lankytojoVardas = formosElementai.vardas.value;
    const lankytojoEmailas = formosElementai.email.value;
    const lankytojoZinute = formosElementai.message.value;

    rezultatai.innerHTML = `Lankytojas: ${lankytojoVardas} Pastas: ${lankytojoEmailas} Zinute: ${lankytojoZinute}<hr>`;
});

// -----------

// myForm.addEventListener('submit', printData);
//
// function printData(eventas) {
//     eventas.preventDefault();
//     alert('Forma pasubmitinta');
// }
document.addEventListener('DOMContentLoaded', function(){
    ///// Kodas kuri vykdys tik kai uzsikraus visas HTML'as

    rezultatai.style.backgroundColor = 'aqua';
    rezultatai.style.color = '#ffffff';
    rezultatai.title = 'Geresnis ir pilnesnis paaiskinimas';
    rezultatai.name = 'naujasVardas'; // Neveiks nes DIV tagas negali tureti name atributo (tik INPUT elementai)
    rezultatai.setAttribute('name', 'naujasVardas');
    rezultatai.setAttribute('tautvydas', 'paverde');
    rezultatai.id = 'bestas';
    rezultatai.className = 'naujaKlase';
    rezultatai.classList.add('kitaKlase');

    console.log(rezultatai.attributes.length);
});






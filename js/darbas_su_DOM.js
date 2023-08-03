let tekstas = document.getElementById('unikalusElementas');

let paveiksleliai = document.getElementsByClassName('galerijosFoto');

let reklamos = document.querySelectorAll('.wrapper .element');

tekstas.innerHTML = tekstas.innerHTML + '!';

paveiksleliai[0].src = '/img/logo.png';

reklamos[1].style.backgroundColor = 'red';

reklamos[2].style.display = 'none'; // 'block'

console.log(tekstas.innerHTML);
let i = 1;
console.log(paveiksleliai[i].src);

console.log(reklamos[0].style.display);

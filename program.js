function randomBroj() {
    return Math.floor(Math.random()*3+1)
}

let računalo = 0;
let korisnik = 0;

document.getElementById('kamen').addEventListener('click', function(e) {
    document.getElementById('objašnjenjeRezultata').innerHTML = ''
    let odabirRačunala = randomBroj()
    if(odabirRačunala == 1) {
        document.getElementById('outputRačunalo').innerHTML = ''
        let znakRačunala = document.createElement('p')
        znakRačunala.textContent = 'Kamen'
        document.getElementById('outputRačunalo').appendChild(znakRačunala)
        let element = document.getElementById("outputRačunalo");
        element.classList.add("btn");
        document.getElementById("objašnjenjeRezultata").style.color = "red";
        let objašnjenje = document.createElement('p')
        objašnjenje.textContent = 'Odabrali ste isti znak kao i računalo. NEODLUČENO!'
        document.getElementById('objašnjenjeRezultata').appendChild(objašnjenje)
}})
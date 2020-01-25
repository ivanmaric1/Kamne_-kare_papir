function randomBroj() {
    return Math.floor(Math.random()*3+1)
}

localStorage.setItem('igrač','0')
localStorage.setItem('računalo','0')

window.addEventListener('DOMContentLoaded', function(e) {   
            let memorijaIgrač = localStorage.getItem('igrač')
            let memorijaRačunalo = localStorage.getItem('računalo')
            let rezaI = document.createElement('p')
            rezaI.textContent = memorijaIgrač 
            document.getElementById('scoreIgrač').appendChild(rezaI)
            let rezaR = document.createElement('p')
            rezaR.textContent = memorijaRačunalo
            document.getElementById('scoreRačunalo').appendChild(rezaR)
})


document.getElementById('objašnjenjeRezultata').style.color = 'red'
document.getElementById('kamen').addEventListener('click', function(e) {
    document.getElementById('objašnjenjeRezultata').innerHTML = ''
    let odabirRačunala = randomBroj()
    if(odabirRačunala == 1) {
            document.getElementById('outputRačunalo').innerHTML = ''
            let znakRačunala = document.createElement('p')
            znakRačunala.textContent = 'Kamen'
            document.getElementById('outputRačunalo').appendChild(znakRačunala)
            let objašnjenje = document.createElement('p')
            objašnjenje.textContent = 'Odabrali ste isti znak kao i računalo. NEODLUČENO!'
            document.getElementById('objašnjenjeRezultata').appendChild(objašnjenje)
        } else if (odabirRačunala == 2) {
            document.getElementById('outputRačunalo').innerHTML = ''
            let znakRačunala = document.createElement('p')
            znakRačunala.textContent = 'Škare'
            document.getElementById('outputRačunalo').appendChild(znakRačunala)
            let reza = localStorage.getItem('igrač')
            let pobjeda = Number(reza) + 1
            localStorage.setItem('igrač',pobjeda)
            document.getElementById('scoreIgrač').innerHTML = ''
            let rezaI = document.createElement('p')
            rezaI.textContent = pobjeda
            document.getElementById('scoreIgrač').appendChild(rezaI)
            let objašnjenje = document.createElement('p')
            objašnjenje.textContent = 'Kamen tupi škare. POBJEDA je vaša!'
            document.getElementById('objašnjenjeRezultata').appendChild(objašnjenje)
        } else if (odabirRačunala == 3) {
            document.getElementById('outputRačunalo').innerHTML = ''
            let znakRačunala = document.createElement('p')
            znakRačunala.textContent = 'Papir'
            document.getElementById('outputRačunalo').appendChild(znakRačunala)
            let reza = localStorage.getItem('računalo')
            let pobjeda = Number(reza) + 1
            localStorage.setItem('računalo',pobjeda)
            document.getElementById('scoreRačunalo').innerHTML = ''
            let rezaI = document.createElement('p')
            rezaI.textContent = pobjeda
            document.getElementById('scoreRačunalo').appendChild(rezaI)
            let objašnjenje = document.createElement('p')
            objašnjenje.textContent = 'Papir prekriva kamen. IZGUBILI ste!'
            document.getElementById('objašnjenjeRezultata').appendChild(objašnjenje)
        }
})

document.getElementById('škare').addEventListener('click', function(e) {
    document.getElementById('objašnjenjeRezultata').innerHTML = ''
    let odabirRačunala = randomBroj()
    if(odabirRačunala == 2) {
            document.getElementById('outputRačunalo').innerHTML = ''
            let znakRačunala = document.createElement('p')
            znakRačunala.textContent = 'Škare'
            document.getElementById('outputRačunalo').appendChild(znakRačunala)
            let objašnjenje = document.createElement('p')
            objašnjenje.textContent = 'Odabrali ste isti znak kao i računalo. NEODLUČENO!'
            document.getElementById('objašnjenjeRezultata').appendChild(objašnjenje)
        } else if (odabirRačunala == 1) {
            document.getElementById('outputRačunalo').innerHTML = ''
            let znakRačunala = document.createElement('p')
            znakRačunala.textContent = 'Kamen'
            document.getElementById('outputRačunalo').appendChild(znakRačunala)
            let reza = localStorage.getItem('računalo')
            let pobjeda = Number(reza) + 1
            localStorage.setItem('računalo',pobjeda)
            document.getElementById('scoreRačunalo').innerHTML = ''
            let rezaI = document.createElement('p')
            rezaI.textContent = pobjeda
            document.getElementById('scoreRačunalo').appendChild(rezaI)
            let objašnjenje = document.createElement('p')
            objašnjenje.textContent = 'Kamen tupi škare. IZGUBILI ste!'
            document.getElementById('objašnjenjeRezultata').appendChild(objašnjenje)
        } else if (odabirRačunala == 3) {
            document.getElementById('outputRačunalo').innerHTML = ''
            let znakRačunala = document.createElement('p')
            znakRačunala.textContent = 'Papir'
            document.getElementById('outputRačunalo').appendChild(znakRačunala)
            let reza = localStorage.getItem('igrač')
            let pobjeda = Number(reza) + 1
            localStorage.setItem('igrač',pobjeda)
            document.getElementById('scoreIgrač').innerHTML = ''
            let rezaI = document.createElement('p')
            rezaI.textContent = pobjeda
            document.getElementById('scoreIgrač').appendChild(rezaI)
            let objašnjenje = document.createElement('p')
            objašnjenje.textContent = 'Škare režu papir. POBJEDA je vaša!'
            document.getElementById('objašnjenjeRezultata').appendChild(objašnjenje)
        }
})

document.getElementById('papir').addEventListener('click', function(e) {
    document.getElementById('objašnjenjeRezultata').innerHTML = ''
    let odabirRačunala = randomBroj()
    if(odabirRačunala == 3) {
            document.getElementById('outputRačunalo').innerHTML = ''
            let znakRačunala = document.createElement('p')
            znakRačunala.textContent = 'Papir'
            document.getElementById('outputRačunalo').appendChild(znakRačunala)
            let objašnjenje = document.createElement('p')
            objašnjenje.textContent = 'Odabrali ste isti znak kao i računalo. NEODLUČENO!'
            document.getElementById('objašnjenjeRezultata').appendChild(objašnjenje)
        }  else if (odabirRačunala == 1) {
            document.getElementById('outputRačunalo').innerHTML = ''
            let znakRačunala = document.createElement('p')
            znakRačunala.textContent = 'Kamen'
            document.getElementById('outputRačunalo').appendChild(znakRačunala)
            let reza = localStorage.getItem('igrač')
            let pobjeda = Number(reza) + 1
            localStorage.setItem('igrač',pobjeda)
            document.getElementById('scoreIgrač').innerHTML = ''
            let rezaI = document.createElement('p')
            rezaI.textContent = pobjeda
            document.getElementById('scoreIgrač').appendChild(rezaI)
            let objašnjenje = document.createElement('p')
            objašnjenje.textContent = 'Papir pokriva kamen. POBJEDA je vaša!'
            document.getElementById('objašnjenjeRezultata').appendChild(objašnjenje)
        } else if (odabirRačunala == 2) {
            document.getElementById('outputRačunalo').innerHTML = ''
            let znakRačunala = document.createElement('p')
            znakRačunala.textContent = 'Škare'
            document.getElementById('outputRačunalo').appendChild(znakRačunala)
            let reza = localStorage.getItem('računalo')
            let pobjeda = Number(reza) + 1
            localStorage.setItem('računalo',pobjeda)
            document.getElementById('scoreRačunalo').innerHTML = ''
            let rezaI = document.createElement('p')
            rezaI.textContent = pobjeda
            document.getElementById('scoreRačunalo').appendChild(rezaI)
            let objašnjenje = document.createElement('p')
            objašnjenje.textContent = 'Škare režu papir. IZGUBILI ste!'
            document.getElementById('objašnjenjeRezultata').appendChild(objašnjenje)
        }
})

document.getElementById('resetGumb').addEventListener('click', function(e) {
    localStorage.setItem('igrač','0')
    localStorage.setItem('računalo','0')
    location.reload();
})



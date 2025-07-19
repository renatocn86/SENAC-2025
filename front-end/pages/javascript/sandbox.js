// document.addEventListener('DOMContentLoaded', () => {

const container = document.querySelector(".container")

// #region Fading squares - 200

const panelFadingSquaresFrag = document.createDocumentFragment()
const divFS = document.createElement('div')
divFS.classList.add('component-container', 'fading-squares')

for (let i = 0; i < 200; i++) {

    let sqr = document.createElement('div')
    sqr.className = 'sqr1'
    divFS.appendChild(sqr)

}

panelFadingSquaresFrag.appendChild(divFS)
container.appendChild(panelFadingSquaresFrag)

//Quadrados na tela >>> logica

let keys = {
    'w': false,
    'a': false,
    's': false,
    'd': false
}
document.addEventListener('keydown', (e) => {
    switch (e.key.toLocaleLowerCase()) {
        case 'w': keys.w = true; break;
        case 'a': keys.a = true; break;
        case 's': keys.s = true; break;
        case 'd': keys.d = true; break;
    }
    update()
})
document.addEventListener('keyup', (e) => {
    switch (e.key.toLocaleLowerCase()) {
        case 'w': keys.w = false; break;
        case 'a': keys.a = false; break;
        case 's': keys.s = false; break;
        case 'd': keys.d = false; break;
    }
    update()
})

const sqrs = document.querySelectorAll('.sqr1')

var cont = 0
function update() {
    var randomIndex = Math.floor(Math.random() * 199) + 1
    drawItem(sqrs[randomIndex])
    console.log(cont++)
}

function drawItem(item) {
    item.style.backgroundColor = 'black'
    item.setAttribute('value', 1)
}
update()


// #endregion

// #region Buttons

const panelButtons = document.createDocumentFragment()
const divB = document.createElement('div')
divB.classList.add('component-container', 'component-container-flex')

const btnScale = document.createElement('button')
btnScale.className = 'btn-scale'
btnScale.textContent = 'SCALE'

const btnRadius = document.createElement('button')
btnRadius.className = 'btn-radius'
btnRadius.textContent = 'ROUND CORNERS'

const btnSkew = document.createElement('a')
btnSkew.className = 'btn-skew'
btnSkew.textContent = "SKEW BUTTON"

divB.append(btnScale, btnRadius, btnSkew)
panelButtons.appendChild(divB)

// #endregion

container.append(panelButtons)
// })
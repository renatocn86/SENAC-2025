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
container.append(panelButtons)

// #endregion

//#region MENUS
const panelMenus = document.createDocumentFragment()
const divM = document.createElement('div')
divM.classList.add('component-container', 'component-container-flex')

const spinMenu = document.createElement('div')
spinMenu.className = 'spin-container'

const menuItemsList = ['Início', 'Quem somos', 'Serviços', 'Planos', 'Login']

for (let i = 0; i < menuItemsList.length; i++) {
    let spinItem = document.createElement('div')
    spinItem.className = 'spinner'
    spinItem.textContent = menuItemsList[i]
    spinMenu.appendChild(spinItem)
}

const mouseoverEvent = new MouseEvent('mouseover', {
    bubbles: true,
    cancelable: true,
    view: window
});

const mouseoutEvent = new MouseEvent('mouseout', {
    bubbles: true,
    cancelable: true,
    view: window
});

divM.addEventListener('mouseenter', () => {
    console.log('enter')
    let spinners = document.querySelectorAll('.spinner')
    console.log(spinners)
    for (let i = 0; i < spinners.length; i++) {
        spinners[i].style
    }
})

divM.appendChild(spinMenu)
panelMenus.appendChild(divM)
container.appendChild(panelMenus)
//#endregion

// })
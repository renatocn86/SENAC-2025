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
btnSkew.className = 'bt-skew'
btnSkew.textContent = "SKEW BUTTON"

const btnTranslate = document.createElement('button')
btnTranslate.className = 'btn-translate'
btnTranslate.textContent = 'TRANSLATEY'

const btnRotate = document.createElement('button')
btnRotate.className = 'btn-rotate'
btnRotate.textContent = 'ROTATE'

const btnRotate2 = document.createElement('button')
const btnRotate2Text = document.createElement('button')
btnRotate2.className = 'btn-rotate2'
btnRotate2Text.classList = 'bt-text'
btnRotate2Text.textContent = 'ROTATE2'
btnRotate2.appendChild(btnRotate2Text)

divB.append(btnScale, btnRadius, btnSkew, btnTranslate, btnRotate, btnRotate2)
panelButtons.appendChild(divB)
container.append(panelButtons)

// #endregion

//#region MENUS
const panelMenus = document.createDocumentFragment()
const divMenus = document.createElement('div')
divMenus.classList.add('component-container', 'component-container-flex')
// Rotate menu 'leque'
const spinMenu = document.createElement('div')
spinMenu.className = 'spin-container'

const menuItemsList = ['Início', 'Quem somos', 'Serviços', 'Planos', 'Login']

for (let i = 0; i < menuItemsList.length; i++) {
    let spinItem = document.createElement('div')
    spinItem.className = 'spinner'
    spinItem.textContent = menuItemsList[i]
    spinMenu.appendChild(spinItem)
}

spinMenu.addEventListener('mouseenter', () => {
    let spinners = document.querySelectorAll('.spinner')
    let r = 0;
    for (let i = 0; i < spinners.length; i++) {
        let transform = `rotate(${r}deg)`
        spinners[i].style.transform = transform;
        spinners[i].style.webkitTransform = transform;
        spinners[i].style.msTransform = transform;
        r += -30
    }
})
spinMenu.addEventListener('mouseleave', () => {
    let spinners = document.querySelectorAll('.spinner')
    let r = 0;
    for (let i = 0; i < spinners.length; i++) {
        let transform = `rotate(${r}deg)`
        spinners[i].style.transform = transform;
        spinners[i].style.webkitTransform = transform;
        spinners[i].style.msTransform = transform;

    }
})
divMenus.appendChild(spinMenu)

// Menu rotate 'roleta'

const roleta = document.createElement('div')
roleta.className = 'roleta'

const roda = document.createElement('div')
roda.className = 'roda'

const menuItem1 = document.createElement('a')
menuItem1.textContent = 'Menu Item 1'
const menuItem2 = document.createElement('a')
menuItem2.textContent = 'Menu Item 2'
const menuItem3 = document.createElement('a')
menuItem3.textContent = 'Menu Item 3'

const rodaPointer = document.createElement('div')
rodaPointer.className = 'roda-pointer'

roda.appendChild(rodaPointer)

roleta.addEventListener('mousemove', (event) => {
    let rect = roleta.getBoundingClientRect()
    let boxCenterX = rect.left + rect.width / 2
    let boxCenterY = rect.top + rect.height / 2

    let angulo = Math.atan2(event.clientY - boxCenterY, event.clientX - boxCenterX) * 180 / Math.PI

    let transform = `rotate(${angulo+45}deg)`
    roda.style.transform = transform;
    roda.style.webkitTransform = transform;
    roda.style.msTransform = transform;
})

roda.appendChild

roleta.append(document.createElement('div'), menuItem1, document.createElement('div'), menuItem2, roda, menuItem3)

divMenus.appendChild(roleta)

panelMenus.appendChild(divMenus)
container.appendChild(panelMenus)

//#endregion


// })

const container = document.querySelector(".container")

var panelFrag = document.createDocumentFragment()
var div = document.createElement('div')
div.className = 'game'

for(let i = 0; i<200; i++){
    let sqr = document.createElement('div')
    sqr.className = 'sqr'
    div.appendChild(sqr)
}

panelFrag.appendChild(div)
container.appendChild(panelFrag)
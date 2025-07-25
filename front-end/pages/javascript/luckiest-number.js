

var body = document.body
body.innerHTML = `
<style>
html, body{
 width: 100%;
 min-height: 100vh;
 height: 100%;
 display: flex;
 padding-bottom: 50px;
 justify-content: center;
 align-items: flex-end;
}
div{
  background-color: black;
}
</style>
`
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var ds
var v = []

async function init() {
  for (let i = 0; i < 200; i++) {
    v.push(0)
    let d = document.createElement('div')
    d.style.width = '5px'
    d.style.height = '0'
    body.appendChild(d)
  }
  await sleep(1000)
  ds = document.querySelectorAll('div')

  draw()
}
init()
async function draw() {
  let ii = 0
  for (let i = 0; i < 100000 ; i++) {

    s = Math.floor(Math.random() * 200)
    v[s]+=1
    console.log(Math.max.apply(Math, v))
    g =parseInt(v[s])
    ds[s].style.height = v[s]+'px'
    ii++
    if(ii === 200) ii = 0
    await sleep(0.1)
  }
}


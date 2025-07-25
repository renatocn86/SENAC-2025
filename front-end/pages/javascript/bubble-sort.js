var bode = document.body

bode.innerHTML = `
    <style>
        body{
            display: flex;
            justify-content: center;
            align-items: flex-end;
            gap: 5px;
        }
    </style>
`

var a = []
for(let i = 0; i< 100; i++){
    a.push(Math.random()*150)
}

for (let i = 0; i < a.length; i++) {
    d = document.createElement('div')
    d.style.height = a[i] * 2 + 'px'
    d.style.width = '10px'
    d.style.backgroundColor = "#"+Math.random().toString(16).slice(-6)

    bode.appendChild(d)
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function bubble() {
    for (let j = 0; j < a.length; j++) {
        for (let i = 0; i < (a.length - j); i++) {
            if (a[i] > a[i + 1]) {
                aux = a[i]
                a[i] = a[i + 1]
                a[i + 1] = aux
            }
            console.log(i + " " + j)
            dd = bode.querySelectorAll('div')

            dd[i].style.height = a[i] * 2 + 'px'
            dd[i].style.width = '10px'
            dd[i].style.border = '1px solid red'

            if (i < a.length-1) {
                dd[i + 1].style.height = a[i + 1] * 2 + 'px'
                dd[i + 1].style.width = '10px'
                dd[i + 1].style.border = '1px solid green'
            }

            if (i > 0) {
                dd[i - 1].style.border = '0'
            }

            await sleep(2);
        }
    }
}
bubble()
var bode = document.body

bode.innerHTML = `
    <style>
        body{
            display: flex;
            justify-content: center;
            align-items: flex-end;
            gap: 10px;
        }
        div{
            background-color: blue;
        }
    </style>
`

a = [3, 5, 7, 12, 8, 20, 16, 1, 22, 6, 3, 3, 17, 10]

for (let i = 0; i < a.length; i++) {
    d = document.createElement('div')
    d.style.height = a[i] * 25 + 'px'
    d.style.width = '20px'

    bode.appendChild(d)
}

var mx = 0
var i = 0
var j = 1

function bubble() {

    setInterval(() => {
        if (i < (a.length - j)) {

            if (a[i] > a[i + 1]) {
                aux = a[i]
                a[i] = a[i + 1]
                a[i + 1] = aux
                console.log(a[i]+" "+mx)
            }
            dd = bode.querySelectorAll('div')
            dd[i].style.height = a[i] * 25 + 'px'
            dd[i].style.width = '20px'
            dd[i].style.border = '1px solid red'
            i++
            // if (a[i] > mx) {
            //     mx = a[i]
            //     i++
            //     setInterval(() => {
            //         bubble()
            //     }, 1000)
            // } else {
            //     i++
            //     setInterval(() => {
            //         bubble()
            //     }, 1000)
            // }
        } j++
    }, 1000)

}
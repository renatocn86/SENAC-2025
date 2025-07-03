//document.writeln('Hello World!')

var container = document.getElementById('container') //pegando div do html
var elemento = document.createElement('button') // criando um botão
elemento.textContent = 'Button' // define o conteúdo textual do elemento
// elemento.style.backgroundColor = '#ff0000' //é possível estilizar os elementos pelo JS
elemento.id = 'btn' // define um id ao elemento
elemento.className = 'btn' // define uma classe ao elemento, 
// .classList também pode ser usado se for adicionar mais de uma classe

container.appendChild(elemento) // adiciona um elemento filho 

texto = 'Literal'
classe = 'btn'
container.innerHTML += `<button class="btn">Literal</button>` // Literal com valores pré-definidos
container.innerHTML += `<button class="${classe}">${texto}</button>` // Literal com valores dinâmicos

var container2 = document.getElementById('container-2')

container2.innerHTML = `
        <div class="card">

            <div class="img"></div>
            
            <div class="row">
                <div class="avatar"></div>
                <p>${texto}</p>
            </div>

        </div>
`

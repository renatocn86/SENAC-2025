//document.writeln('Hello World!')

var container = document.getElementById('container') //pegando div do html
var elemento = document.createElement('button') // criando um botão
elemento.textContent = 'Button' // define o conteúdo textual do elemento
// elemento.style.backgroundColor = '#ff0000' //é possível estilizar os elementos pelo JS
elemento.id = 'btn' // define um id ao elemento
elemento.className = 'btn' // define uma classe ao elemento, 
// .classList também pode ser usado se for adicionar mais de uma classe

function Acao(){
    alert("Ação")
}

container.appendChild(elemento) // adiciona um elemento filho 

texto = 'Literal'
classe = 'btn'
container.innerHTML += `<button class="btn">Literal</button>` // Literal com valores pré-definidos
container.innerHTML += `<button class="${classe}">${texto}</button>` // Literal com valores dinâmicos

var container2 = document.getElementById('container-2')

var pessoa = [
    {
        "nome": "Lena",
        "foto": "http://127.0.0.1:5500/front-end/images/lena.jpg",
        "post": "http://127.0.0.1:5500/front-end/images/lena2.jpg",
        "descricao": "Lena"
    }, {
        "nome": "Ada",
        "foto": "http://127.0.0.1:5500/front-end/images/ada.jpg",
        "post": "http://127.0.0.1:5500/front-end/images/ada2.jpg",
        "descricao": "Ada Lovelace"
    }, {
        "nome": "Oscar",
        "foto": "http://127.0.0.1:5500/front-end/images/oscar.jpg",
        "post": "http://127.0.0.1:5500/front-end/images/oscar2.jpg",
        "descricao": "Oscar Niemeyer"
    }, {
        "nome": "Alan",
        "foto": "http://127.0.0.1:5500/front-end/images/alan.jpg",
        "post": "http://127.0.0.1:5500/front-end/images/alan2.jpg",
        "descricao": "Alan Turing"
    }
]

for (let i = 0; i < pessoa.length; i++) {
    container2.innerHTML += `
        <div class="card">

            <img class="img" src="${pessoa[i].post}" 
            width="300" height="200"></img>
            
            <div class="row">
                <img class="avatar" src="${pessoa[i].foto}"
                width="50" height="50"></img>

                <p>${pessoa[i].descricao}</p>
            </div>

        </div>
    `
}



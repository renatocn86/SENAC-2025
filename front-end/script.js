// // var a = 10
// // let b = 20
// // const c = 30

// //alert(a + " " + b + " " + c)

// // {
// //     var a = 1
// //     let b = 2
// //     const c = 5
// //     alert(a + " " + b + " " + c)
// // }

// // alert(a )

// //  alert(d)

// // var bul = 36 <= 35 && 20 < 30

// // if(a===b){
// //     alert('verdadeiro')
// // } else {
// //     alert("Falso")
// // }

// // var vetor = [1,2,3,4,5,6,7,8,9,10]
// // //           0|1|2|3|4|5|6|7|8|9|
// // alert(vetor[vetor.length-1])

// // vetor.push(11)  // adiciona item no fim do array
// // vetor.pop()     // remove  ultimo valor do array
// // vetor.unshift(0)// adiciona no início do array
// // vetor.shift()   // remove o primeiro item do array


// // for(let i = 0;i< vetor.length;i++){
// //     alert(vetor[i])
// // }

// var carro = {
//     "cor": "azul",
//     "roda": 4,
//     "nome": "corola",
//     "portas": "4",
//     "montadora": "toyota"
// }

// alert(carro.cor)
// carro.cor = 'vermelho'
// alert(carro.cor)

// var carros = [
//     {
//         "cor": "azul",
//         "roda": 4,
//         "nome": "corola",
//         "portas": "4",
//         "montadora": "toyota"
//     },
//     {
//         "cor": "amarelo",
//         "roda": 4,
//         "nome": "onix",
//         "portas": "4",
//         "montadora": "chevrolet"
//     }
// ]

// alert(carros[1].nome)
// carros[1].roda = 6
// alert(JSON.stringify(carros[1]))

class Produto {
  constructor(id, nome, preco) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
  }

  exibirDetalhes() {
    return `ID: ${this.id}, Nome: ${this.nome}, Preço: R$${this.preco.toFixed(2)}`;
  }
}

class Livro extends Produto {
  constructor(id, nome, preco, autor, isbn) {
    super(id, nome, preco);
    this.autor = autor;
    this.isbn = isbn;
  }

  exibirDetalhes() {
    return `${super.exibirDetalhes()}, Autor: ${this.autor}, ISBN: ${this.isbn}`;
  }
}

class Eletronico extends Produto {
  constructor(id, nome, preco, marca, garantiaMeses) {
    super(id, nome, preco);
    this.marca = marca;
    this.garantiaMeses = garantiaMeses;
  }

  exibirDetalhes() {
    return `${super.exibirDetalhes()}, Marca: ${this.marca}, Garantia: ${this.garantiaMeses} meses`;
  }
}

// Criando instâncias dos produtos
const livro1 = new Livro(1, "Dom Casmurro", 35.50, "Machado de Assis", "978-85-8080-001-0");
const eletronico1 = new Eletronico(2, "Smartphone X", 2500.00, "TechCorp", 12);

// Exibindo detalhes (polimorfismo em ação!)
console.log(livro1.exibirDetalhes());
console.log(eletronico1.exibirDetalhes());
function Json() {
    //JSON - JavaScript Object Notation

    var pessoa = { // JSON -> estrutura de dados para representar um objeto
        "nome": "Lena",
        "foto": "http://...",
        "post": "http://...",
        "descricao": "text"
    }

    console.log(pessoa)

    console.log(pessoa.nome) // Para acessar atributos do objeto, 
    // ultiliza-se o operador '.' seguido da chave. Ex: 'pessoa.nome', 
    // onde 'pessoa' é o objeto e 'nome' é o atributo.

    pessoa.nome = "Luana" // Para editar o atributo de um objeto, acessamos 
    // o atributo e utilizamos o operador de atribuição '=' para definir o
    // o novo valor.

    var produto = {
        "nome": "celular 01",
        "id": 0,
        "descricao": "descrição",
        "preco": "1000.00"
    }

    var produtos = [ // Lista de produtos
        {
            "nome": "celular 01",
            "id": 0,
            "descricao": "descrição",
            "preco": "2000.00"
        },
        {
            "nome": "celular 02",
            "id": 1,
            "descricao": "descrição",
            "preco": "1500.00"
        },
        {
            "nome": "celular 03",
            "id": 2,
            "descricao": "descrição",
            "preco": "1900.00"
        },
        {
            "nome": "celular 04",
            "id": 3,
            "descricao": "descrição",
            "preco": "3100.00"
        }
    ]

    console.log(produtos[2]) // Para acessar um ítem da lista 
    // utilizamos o index(lista[x])
}
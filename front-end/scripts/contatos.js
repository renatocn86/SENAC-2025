// Crie uma lista de contatos, forneça uma opção de busca 
// por nome ao usuário (prompt()), e quando o contato 
// digitado pelo usuário existir na lista, mostre todos os 
// dados desse contato. Se o contato fornecido pelo usuário
// não existir na lista apresente a mensagem: 
// "Contato não registrado!".
function contatos() {
    var contatos = [
        {
            "nome": "Mateus",
            "telefone": "99999999",
            "email": "mateus@mail.com",
            "endereco": "Rua x"
        },
        {
            "nome": "Antônio",
            "telefone": "88888888",
            "email": "antonio@mail.com",
            "endereco": "Rua y"
        },
        {
            "nome": "Iago",
            "telefone": "77777777",
            "email": "iago@mail.com",
            "endereco": "Rua z"
        },
        {
            "nome": "Francisco",
            "telefone": "66666666",
            "email": "francisco@mail.com",
            "endereco": "Rua a"
        },
        {
            "nome": "Zidane",
            "telefone": "55555555",
            "email": "zidane@mail.com",
            "endereco": "Rua b"
        }
    ]

    var nome = prompt("Digite o nome do contato:")
    var flag = false
    for (let i = 0; i < contatos.length; i++) {
        if (nome === contatos[i].nome) {
            alert("Contato encontrado: \n" +
                contatos[i].nome + "\n" +
                contatos[i].telefone + "\n" +
                contatos[i].email + "\n" +
                contatos[i].endereco
            )
            flag = true
            break;
        }
    }
    if (!flag) {
        alert("Contato não registrado!")
    }
}
// Escreva um algorítmo que verifica se um número 
// digitado pelo usuário é primo e imprime uma mensagem
// de acordo: 'É primo!' ou 'Não é primo'.

function EhPrimo() {
    var n = parseInt(prompt("Forneça um número inteiro maior que 1."))

    flag = true
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            flag = false
        }
    }

    if (flag) {
        alert("É primo.")
    } else {
        alert("Não é primo.")
    }

}
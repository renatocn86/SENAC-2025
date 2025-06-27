function Condicionais() {

    var n = parseInt(prompt("Forneça um número inteiro."))

    if (n % 2 === 0) { // O operador '%' calcula o 
        // resto da divisão do número à esquerda pelo 
        // número a direita.
        alert("N é par!")
    } else { // else significa senão.
        alert("N é ímpar!")
    }

    //Verifique se 'n' é múltiplo de 5 e maior que 10.

    if (n % 5 === 0 && n > 10) { // && significa 'e' ou 'and' 
        // e o if só executa a ação se ambas as expressões forem verdadeiras.
        alert("É múltiplo de 5 e maior que 10.")
    }

    // Verifique se 'n' é múltiplo de 3 ou é menor que 10.

    if (n % 3 === 0 || n < 10) { // || significa 'ou' ou 'or', o if vai executar 
        // se uma das condições for verdadeira.
        alert("N é múltiplo de 3 ou menor que 10")
    }

    switch (n) { //O switch significa 'escolha' e ele funciona como 
        // vários 'if' aninhados. Caso a váriável escolhida seja igual a 
        // um valor determinado, ele executa a ação e o 'break' interrompe o switch.
        case 1: alert(1)
            break
        case 2: alert(2)
            break
        case 3: alert(3)
            break
        case 4: alert(4)
    }
}
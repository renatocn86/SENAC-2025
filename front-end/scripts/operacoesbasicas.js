function Calculadora() {

    var a = parseFloat(prompt("Digite o primeiro valor:"))
    var b = parseFloat(prompt("Digite o segundo valor:"))
    var tipo = prompt("Informe o tipo de operação correspondente(+, -, *, /).")

    if (tipo === "+") {
        alert("Soma = " + (a + b))
    }
    if (tipo === "-") {
        alert("Subtração = " + (a - b))
    }
    if (tipo === "*") {
        alert("Multiplicação = " + (a * b))
    }
    if (tipo === "/") {
        alert("divisão = " + (a / b))
    }
}
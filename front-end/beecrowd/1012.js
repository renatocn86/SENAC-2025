var input = require('fs').readFileSync('/Users/Aluno/Documents/GitHub/SENAC-2025/front-end/beecrowd/stdin', 'utf8');
var lines = input.split('\n');//lines é um array
//=========================================================

a = parseFloat(lines[0].split(' ')[0])
b = parseFloat(lines[0].split(' ')[1])
c = parseFloat(lines[0].split(' ')[2])

pi = 3.14159

console.log("TRIANGULO: " + (a*c/2).toFixed(3))
console.log("CIRCULO: " + (c*c*pi).toFixed(3))
console.log("TRAPEZIO: " + ((a+b)*c/2).toFixed(3))
console.log("QUADRADO: " + (b*b).toFixed(3))
console.log("RETANGULO: " + (a*b).toFixed(3))
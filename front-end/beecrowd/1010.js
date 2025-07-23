var input = require('fs').readFileSync('/Users/Aluno/Documents/GitHub/SENAC-2025/front-end/beecrowd/stdin', 'utf8');
var lines = input.split('\n');//lines é um array
//=========================================================

a = (lines[0].split(' '))
b = (lines[1].split(' '))

console.log("VALOR A PAGAR: R$ " + (
    parseFloat(a[1]) * parseFloat(a[2]) +
    parseFloat(b[1]) * parseFloat(b[2])).toFixed(2))
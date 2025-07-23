var input = require('fs').readFileSync('/Users/Aluno/Documents/GitHub/SENAC-2025/front-end/beecrowd/stdin', 'utf8');
var lines = input.split('\n');//lines é um array
//=========================================================

a = parseInt(lines[0])
b = parseInt(lines[1])
c = parseInt(lines[2])
d = parseInt(lines[3])

console.log("DIFERENCA = "+((a*b-c*d)))
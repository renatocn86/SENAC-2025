var input = require('fs').readFileSync('/Users/Aluno/Documents/GitHub/SENAC-2025/front-end/beecrowd/stdin', 'utf8');
var lines = input.split('\n');//lines é um array
//=========================================================

h = parseInt(lines[0])
km = parseInt(lines[1])

console.log((h*km/12).toFixed(3))
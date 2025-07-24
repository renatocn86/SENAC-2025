var input = require('fs').readFileSync('/Users/Aluno/Documents/GitHub/SENAC-2025/front-end/beecrowd/stdin', 'utf8');
var lines = input.split('\n');//lines é um array
//=========================================================
x = parseFloat(lines[0])
y = parseFloat(lines[1])

console.log((x/y).toFixed(3)+" km/l")
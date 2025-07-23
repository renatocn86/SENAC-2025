var input = require('fs').readFileSync('/Users/Aluno/Documents/GitHub/SENAC-2025/front-end/beecrowd/stdin', 'utf8');
var lines = input.split('\n');//lines é um array
//=========================================================

a = parseFloat(lines[0])
b = parseFloat(lines[1])

console.log("MEDIA = "+(((a*3.5)+(b*7.5))/11).toFixed(5))

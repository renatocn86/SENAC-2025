var input = require('fs').readFileSync('/Users/Aluno/Documents/GitHub/SENAC-2025/front-end/beecrowd/stdin', 'utf8');
var lines = input.split('\n');//lines é um array
//=========================================================

a = parseFloat(lines[0])
b = parseFloat(lines[1])
c = parseFloat(lines[2])

console.log("MEDIA = "+(((a*2)+(b*3)+(c*5))/10).toFixed(1))
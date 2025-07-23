var input = require('fs').readFileSync('/Users/Aluno/Documents/GitHub/SENAC-2025/front-end/beecrowd/stdin', 'utf8');
var lines = input.split('\n');//lines é um array
//=========================================================

//a = parseInt(lines[0])
b = parseInt(lines[1])
c = parseFloat(lines[2])

console.log("TOTAL = R$ "+(b+c*0.15).toFixed(2))
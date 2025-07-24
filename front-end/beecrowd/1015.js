var input = require('fs').readFileSync('/Users/Aluno/Documents/GitHub/SENAC-2025/front-end/beecrowd/stdin', 'utf8');
var lines = input.split('\n');//lines é um array
//=========================================================
x1 = parseFloat(lines[0].split(' ')[0])
y1 = parseFloat(lines[0].split(' ')[1])
x2 = parseFloat(lines[1].split(' ')[0])
y2 = parseFloat(lines[1].split(' ')[1])

console.log(Math.sqrt(((x2-x1)**2)+((y2-y1)**2)).toFixed(4))
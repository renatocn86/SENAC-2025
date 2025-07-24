var input = require('fs').readFileSync('/Users/Aluno/Documents/GitHub/SENAC-2025/front-end/beecrowd/stdin', 'utf8');
var lines = input.split('\n');//lines é um array
//=========================================================

console.log(Math.max.apply(Math, lines[0].split(' ').map(parseFloat))+' eh o maior')
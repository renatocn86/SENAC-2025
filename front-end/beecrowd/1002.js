var input = require('fs').readFileSync('/Users/Aluno/Documents/GitHub/SENAC-2025/front-end/beecrowd/stdin', 'utf8');
var lines = input.split('\n');//lines é um array
//=========================================================
let pi = 3.14159
r = lines[0]
console.log("A="+(pi*r*r).toFixed(4))
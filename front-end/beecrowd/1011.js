var input = require('fs').readFileSync('/Users/Aluno/Documents/GitHub/SENAC-2025/front-end/beecrowd/stdin', 'utf8');
var lines = input.split('\n');//lines é um array
//=========================================================

r = parseFloat(lines[0])
pi = 3.14159

console.log("VOLUME = " + (r**3*4/3*pi).toFixed(3))
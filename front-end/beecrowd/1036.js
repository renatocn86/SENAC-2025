var input = require('fs').readFileSync('/Users/Aluno/Documents/GitHub/SENAC-2025/front-end/beecrowd/stdin', 'utf8');
var lines = input.split('\n');//lines é um array
//=========================================================
var valores = lines[0].split(' ')
var a = (parseFloat(valores[0]))
var b = (parseFloat(valores[1]))
var c = (parseFloat(valores[2]))

var r1 = ((-1*b)+Math.sqrt((b*b) - (4*a*c)))/2*a

console.log(r1)


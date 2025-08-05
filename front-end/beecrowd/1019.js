var input = require('fs').readFileSync('/Users/Aluno/Documents/GitHub/SENAC-2025/front-end/beecrowd/stdin', 'utf8');
var lines = input.split('\n');//lines é um array
//=========================================================

var t = parseInt(lines[0])
var h = Math.floor(t/3600)
t = t%3600
var m = Math.floor(t/60)
s = t%60
console.log(h+":"+m+":"+s)
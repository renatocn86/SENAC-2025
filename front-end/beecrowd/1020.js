var input = require('fs').readFileSync('/Users/Aluno/Documents/GitHub/SENAC-2025/front-end/beecrowd/stdin', 'utf8');
var lines = input.split('\n');//lines é um array
//=========================================================

var dias = parseInt(lines[0])
var anos = Math.floor(dias/365)
dias = dias%365
var meses = Math.floor(dias/30)
dias =dias%30
console.log(anos+" ano(s)\n"+meses+" mes(es)\n"+dias+' dia(s)')
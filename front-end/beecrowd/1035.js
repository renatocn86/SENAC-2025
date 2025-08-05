var input = require('fs').readFileSync('/Users/Aluno/Documents/GitHub/SENAC-2025/front-end/beecrowd/stdin', 'utf8');
var lines = input.split('\n');//lines é um array
//=========================================================
var valores = lines[0].split(' ')
var a = parseInt(parseInt(valores[0]))
var b = parseInt(parseInt(valores[1]))
var c = parseInt(parseInt(valores[2]))
var d = parseInt(parseInt(valores[3]))

if (b > c && d > a && (c + d) > (b + a) && c >= 0 && d >= 0 && a % 2 === 0) {
    console.log('Valores aceitos')
} else console.log('Valores nao aceitos')


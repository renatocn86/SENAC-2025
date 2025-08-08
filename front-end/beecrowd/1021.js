var input = require('fs').readFileSync('/Users/Aluno/Documents/GitHub/SENAC-2025/front-end/beecrowd/stdin', 'utf8');
var lines = input.split('\n');//lines é um array
//=========================================================

var din = lines[0].split('.')

var notas = parseInt(din[0])//576
var moedas = parseInt(din[1])//73
//notas
var cem = Math.floor(notas / 100)
notas = notas % 100 //76

var cinquenta = Math.floor(notas / 50)
notas = notas % 50 //26

var vinte = Math.floor(notas / 20)
notas = notas % 20 //6

var dez = Math.floor(notas / 10)
notas = notas % 10 //6

var cinco = Math.floor(notas / 5)
notas = notas % 5 //1

var dois = Math.floor(notas / 2)
notas = notas % 2 //1

// moedas

var cinq = Math.floor(moedas/50)
moedas = moedas%50
var vinteC = Math.floor(moedas/25)
moedas = moedas%25
var dezz = Math.floor(moedas/10)
moedas = moedas%10
var cinc = Math.floor(moedas/5)
moedas = moedas%5
var u = moedas

console.log("NOTAS:")//576
console.log(cem + ' nota(s) de R$ 100.00')//5
console.log(cinquenta + ' nota(s) de R$ 50.00')//1
console.log(vinte + ' nota(s) de R$ 20.00')//1
console.log(dez + ' nota(s) de R$ 10.00')//0
console.log(cinco + ' nota(s) de R$ 5.00')//5
console.log(dois + ' nota(s) de R$ 2.00')//0

console.log('MOEDAS:')
console.log(notas + ' moeda(s) de R$ 1.00')
console.log(cinq + ' moeda(s) de R$ 0.50')
console.log(vinteC + ' moeda(s) de R$ 0.25')
console.log(dezz + ' moeda(s) de R$ 0.10')
console.log(cinc + ' moeda(s) de R$ 0.05')
console.log(u + ' moeda(s) de R$ 0.01')

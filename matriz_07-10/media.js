
/*
var nota1 = parseFloat(prompt("Digite sua nota:"));
var nota2 = parseFloat(prompt("Digite sua nota:"));
var nota3 = parseFloat(prompt("Digite sua nota:"));
var nota4 = parseFloat(prompt("Digite a sua nota:"));

var media = nota1 + nota2 + nota3 + nota4
var valor = media / 4

console.log("a média é: " + valor );

*/

var notas = [];
var i = 0;

// recebe notas
notas[i] = parseInt(prompt("Digite a nota n° " + (i+1)));
i++;
notas[i] = parseInt(prompt("Digite a nota n° " + (i+1)));
i++;
notas[i] = parseInt(prompt("Digite a nota n° " + (i+1)));
i++;
notas[i] = parseInt(prompt("Digite a nota n° " + (i+1)));

var media = notas [0] + notas [1] + notas [2] + notas [3];
media = media / notas.length;
console.log("média é: ", media );
/*
Crie um programa que leia um número inteiro e informe se ele é par ou impar.
*/

var numero = parseInt(prompt("Digite um número: "));

if (numero  %2 === 0 ){
    console.log("esse numero é par!");
}

else if (numero %1 === 0 ){
    console.log ("esse numero é ímpar!");
}
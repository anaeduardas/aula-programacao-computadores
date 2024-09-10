/*
1 - Crie um programa que leia um número inteiro e informe se ele é positivo, negativo ou zero.
 */


var numero = parseFloat(prompt("Digite um número"));

if (numero > 0 ) {
     console.log(" O número " + numero + " é Positivo! ");
} else if (numero < 0 ){
    console.log("O   numero " + numero + " é negativo! ")
} else if (numero == 0){
    console.log(" O numero " + numero + " é zero !" );
}

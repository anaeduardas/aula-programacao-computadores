/*
elabore um programa que receba um numero e exiba todos os numeros pares ate ele 
*/

var numero = parseInt(prompt("digite o numero!!!"));
 var i = 0;

 //exibe os pares
 console.log ("numeros pares té", numero);
 while (i < numero) {
    console.log (i);
    i = i + 2;
 }

 // exibe os impares
 console.log("numeros impares ate", numero);

 i = 0;
 while (i < numero){
    if (i % 2 !=0) {
        console.log(i);
    }
    i++;
 }
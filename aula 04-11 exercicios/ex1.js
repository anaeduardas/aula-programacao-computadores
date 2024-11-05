/*
elabore um programa que receba um numero e exiba a sua tabuada usando while 
*/
var numero = parseInt(prompt("Digite um numero: "));

if (numero > 0 ){
    var i = 0;
    while (i < 11) {
        console.log(numero, "x", i, "=", i * numero);
        i++;
    }
} else {
    console.log("Digite um numero maior que 0!!");
}
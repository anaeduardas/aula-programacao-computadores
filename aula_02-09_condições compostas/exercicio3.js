/*
3 - Desenvolva um programa que calcule o valor do frete para uma compra: frete grátis para compras acima de R$ 300,00; caso contrário, calcule o frete de R$ 50,00.
*/


var valorCompra = parseFloat(prompt("Digite o valor da compra: "));

if (valorCompra == 0) {
    console.log("O valor da compra é: " + valorCompra );
} else if (valorCompra >= 300){
    console.log("Frete grátis!");
} else if (valorCompra <= 300){
    console.log ("Frete de R$ 50");
}
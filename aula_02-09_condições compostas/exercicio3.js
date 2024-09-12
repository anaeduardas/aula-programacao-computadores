/*
*/

var valorCompra = parseFloat(prompt("Digite o valor da compra: "));

if (valorCompra == 0) {
    console.log("O valor da compra é: " + valorCompra );
} else if (valorCompra >= 300){
    console.log("Frete grátis!");
} else if (valorCompra <= 300){
    console.log ("Frete de R$ 50");
}
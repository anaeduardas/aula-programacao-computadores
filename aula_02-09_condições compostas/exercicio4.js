/*
O cardápio de uma lanchonete é o seguinte:
Especificação Preço unitário 
100 Cachorro quente 1,10 \n
101 Bauru simples 1,30 
102 Bauru c/ovo 1,50 
103 Hamburger 1,10 
104 Cheeseburger 1,30 

Escrever um algoritmo que leia o código do lanche pedido, a quantidade e calcule o valor a ser pago por aquele lanche. 
*/
var codigo = parseFloat(prompt("Digite o código do lanche: "));

var cachorroQuente = 100
var bauruSimples = 101
var bauruComOvo = 102
var hamburguer = 103
var cheeseburguer = 104

var preco100 = 1.10
var preco101 = 1.30
var preco102 = 1.50
var preco103 = 1.10
var preco104 = 1.30


if (codigo == 100 ){
    console.log(" pedido: Cachorro quente  ");
} else if (codigo == 101 ){
    console.log("pedido: Bauru simples " );
} else if (codigo == 102){
    console.log("pedido: Bauru com ovo " );
} else if (codigo == 103 ){
    console.log ("pedido: Hamburguer" );
} else if (codigo == 104){
    console.log ("pedido: Cheeseburguer " );
} 

var quantidade = parseInt (prompt("Digite a quantidade: "));
console.log ("quantidade: " + quantidade);

var valor100 = quantidade * preco100;
console.log ("o valor total foi: R$ " + valor100 );

var valor101 = quantidade * preco101;
console.log("o valor total foi de: " + valor101);

var valor102 = quantidade * preco102;
console.log("o valor total foi: " + valor102);

var valor103 = quantidade * preco103;
console.log("O valor total foi de: " + valor103);

var valor104 = quantidade * preco104;
console.log("o valor toal foi: " + valor104);


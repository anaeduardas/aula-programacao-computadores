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

var codigoLanche = parseFloat(prompt("Digite o código do lanche: "));
var quantidade = parseFloat(prompt("Digite a quantidade: "));

var cachorroQuente = 1.10
var bauruSimples = 1.30
var bauruComovo = 1.50
var hamburguer = 1.10
var cheeseburguer = 1.30
console. log("listagem do cardápio: " + cachorroQuente + bauruSimples + bauruComovo + hamburguer + cheeseburguer);


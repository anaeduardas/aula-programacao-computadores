/* 
Elabore um programa que apresente e solicite qual lanche o usuário deseja adicionar, pergunte a quantidade e adicione a uma lista de pedido.
Pergunte se deseja adicionar mais lanches e refaça o processo se positivo.

Apresente a lista e solicite se o usuário deseja bebida, solicite a quantidade e adicione a mesma lista de pedidos, solicite se deseja mais produtos.

Ao final, apresente o pedido com todos os itens, total dos lanches, total das bebidas e total do pedido.

Bonus: adicione formas de pagamento, ex: A Vista com 5% de desconto e valor para frete caso seja entrega. 
*/
var listalanches = [

{ codigo: 1, nome: "hamburguer", valor : 12},
{ codigo: 2, nome: "X-salada", valor: 11},
{ codigo: 3, nome: "X-burguer", valor: 15},
{ codigo: 4, nome: "hot-dog", valor: 10},

];

var bebidas = [
    { nome: "Refrigerante", valor : 5 },
    { nome: "Suco", valor: 6 },
    { nome: "Água", valor: 2 }
];

console.log("  codigo |   nome   |  valor  ");
for(var i = 0; i < listalanches.length; i++) {
console.log (listalanches[i].codigo, "   | ", listalanches[i].nome, " | ", listalanches[i].valor);
}

var pergunta = parseInt(prompt("digite o codigo do lanche esclhido:" ));


var quantidade = parseInt(prompt("Digite a quantidade: "));

var resposta= prompt("deseja continuar? sim/não");
var continuar = true;


var pedidos = [];
var totalLanches = 0;
var totalBebidas = 0;








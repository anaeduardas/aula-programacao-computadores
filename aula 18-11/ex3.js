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

if (pergunta == listalanches.codigo){
    i++
    pedidos = []
}

var quantidade = parseInt(prompt("Digite a quantidade: "));

if (pergunta == listalanches.codigo){
    i++
    pedidos = []
}

var soma = quantidade * listalanches.valor 

var resposta= prompt("que pedir mais algo? sim/não");
var continar = 's'
var parar = 'n'
while (resposta == 's') {
    resposta= prompt("que pedir mais algo? sim/não");
    i++
}
 
for (i == 0; i < listalanches.lenght; i++)
    console.log (pedidos.lenght + soma )





/*
Elabore um programa que contenha uma losta de produtos:
1 - Hamburguer - R$ 10
2 - X- salada - R$ 15
3 - X Bacon - R$ 20

solicite um código de produtos, percorra a lista e exiba seus dados
*/

/* 
elabore um programa de cadastro de bebidas com código, nome e valor;
ao final, percorra a lista e exiba os dados.

*/

/* 

 Elabore um programa que apresente e solicite qual lanche o usuário deseja adicionar, pergunte a quantidade e adicione a uma lista de pedido.
Pergunte se deseja adicionar mais lanches e refaça o processo se positivo.

Apresente a lista e solicite se o usuário deseja bebida, solicite a quantidade e adicione a mesma lista de pedidos, solicite se deseja mais produtos.

Ao final, apresente o pedido com todos os itens, total dos lanches, total das bebidas e total do pedido.

Bonus: adicione formas de pagamento, ex: A Vista com 5% de desconto e valor para frete caso seja entrega.


 */

var listalanches = [
    {codigo: 1, nome: "hamburguer", valor: 10},
    {codigo: 2, nome: "x-salada", valor: 15},
    {codigo: 3, nome: "x-bacon", valor: 20},
]

console.log("  codigo |   nome   |  valor  ");
for(var i = 0; i < listalanches.length; i++) {
console.log (listalanches[i]. codigo, "   | ", listalanches[i], nome, " | ", listalanches[i], valor);
}

var codigo = parseint(prompt("escolha o codigo de um lanche: "));
var achou = false;
for (var i =0; i < listalanches.length; i++) {
    if (codigo == listalanches[i].codigo) {
        console.log("\n\n ======= escolhido foi ===== ");
        console.log(listaslanches[i].codigo, " ")
    }
}



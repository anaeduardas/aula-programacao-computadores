/* 
Elabore um programa que apresente e solicite qual lanche o usuário deseja adicionar, pergunte a quantidade e adicione a uma lista de pedido.
Pergunte se deseja adicionar mais lanches e refaça o processo se positivo.

Apresente a lista e solicite se o usuário deseja bebida, solicite a quantidade e adicione a mesma lista de pedidos, solicite se deseja mais produtos.

Ao final, apresente o pedido com todos os itens, total dos lanches, total das bebidas e total do pedido.

Bonus: adicione formas de pagamento, ex: A Vista com 5% de desconto e valor para frete caso seja entrega. 
*/

// Lista de lanches

 var listaL = [
    {codigo: 1, nome: "x", preco: 10 },
    {codigo: 2, nome: "xx", preco: 10},
    {codigo: 3, nome: "xxx", preco: 10}
 ]

 for (var i = 0; i < listaL.length; i++) {
    console.log (`${listaL[i].codigo} | ${listaL[i].nome} | ${listaL[i].preco}`);
 }

 
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
    
    console.log("  codigo |   nome   |  valor  ");
    for(var i = 0; i < listalanches.length; i++) {
    console.log (listalanches[i].codigo, "   | ", listalanches[i].nome, " | ", listalanches[i].valor);
    }
    
    
    var listaPedidos = [ ]
    var ipedidos = 0
    var continuar = 1 
     
        var codigoLanches = parseInt(prompt("Digite o CÓDIGO do lanche desejado:"));
        var quantidade = parseInt(prompt("Digite a quantidade :  "));


    if ( codigoLanches == listalanches[i].codigo){
        listaPedidos = (listaPedidos[i])
        i++
        
    }

    
    for (i= 0; i < listalanches.lenght; i++ ){
        listaPedidos =  (listaPedidos[i]);
        i++
    }

    var continuar = parseInt(prompt("quer adidonar mais um lanche à sua lista? digite 1 para sim e 0 para não " ));
    
     while (continuar  == 1){
        var codigoLanches = parseInt(prompt("Digite o codigo do lanche desejado:"));
     }
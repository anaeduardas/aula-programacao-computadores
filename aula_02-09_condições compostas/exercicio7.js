/*
Apresente o Menu de Pizzas:
1 -> Mussarela -> R$ 20,00
2 -> Calabresa -> R$ 25,00
3 -> Marguerita -> R$ 23,00
4 -> 4 Queijos -> R$ 29,99
5 -> Baiana -> 22,50

Apresente o Menu de Bebidas:
1 -> Refrigerante Lata -> R$ 5,00
2 -> Refrigerante 2L -> R$ 10,00
3 -> Agua -> R$ 3,50
4 -> Suco -> R$ 7,50

Solicite ao usuário qual Pizza e quantidade que deseja comprar, qual refrigerante e quantidade, ao final apresente o total a pagar.
*/
var menus = parseInt(prompt(menupizzas));

var menupizzas = "======= menu pizzas =====\n ";
menupizzas = menupizzas = "numero|sabores \n ";
menupizzas += "1 |mussarela -> R$ 20,00\n ";
menupizzas += "2 |calabresa -> R$ 25,00\n ";
menupizzas += "3 |margarita -> R$ 23,00\n ";
menupizzas += "4 |4 queijos-> R$ 29,99\n ";
menupizzas += "5 |baiana > 22,50\n ";

var menubebidas = "==== menu bebeidas ====\n"
menubebidas = menubebidas = "numero | bebidas \n ";
menubebidas += "1 |Refrigerante Lata\n ";
menubebidas += "2 |Refrigerante 2L\n ";
menubebidas += "3 |Agua \n ";
menubebidas += "4 |Suco\n ";

var pizza = parseInt(prompt("Qual pizza : "));

if (pizza == 1){
    var mussarela = 20.00
    console.log ("sabor: mussarela");
}
else if (pizza == 2){
    var calabresa = 25.00
    console.log ("sabor: calabresa");
}
if (pizza == 3){
    var margarita = 23.00
    console.log ("sabor: margarita");
}
if (pizza == 4){
    var quatroqueijos = 29.99
    console.log ("sabor: 4 queijos");
}
if (pizza == 5){
    var baiana = 22.50
    console.log ("sabor: baiana");
}
var bebidas = parseInt(prompt("Qual refrigerante: ")); 


var quantidade = parseInt(prompt("qual a quantidade:  "));


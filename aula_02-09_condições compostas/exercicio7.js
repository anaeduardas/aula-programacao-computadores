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

var menupizzas = "======= menu pizzas =====\n ";
menupizzas = menupizzas = "cód|sabores \n ";
menupizzas += "1 |mussarela -> R$ 20,00\n ";
menupizzas += "2 |calabresa -> R$ 25,00\n ";
menupizzas += "3 |margarita -> R$ 23,00\n ";
menupizzas += "4 |4 queijos-> R$ 29,99\n ";
menupizzas += "5 |baiana > 22,50\n ";

var pizza = parseInt(prompt(menupizzas));
var quantidade = parseInt(prompt("qual a quantidade:  "));

if (pizza == 1){
    var mussarela = 20.00
    var  valorT1 = mussarela * quantidade;
}
else if (pizza == 2){
    var calabresa = 25.00
    var  valorT1 = calabresaa * quantidade;
}
else if (pizza == 3){
    var margarita = 23.00
    var  valorT1 = margarita * quantidade;
}
else if (pizza == 4 ){
    var quatroQueijos = 29.99
    var  valorT1 = quatroQueijos * quantidade;
}
else if (pizza == 5){
    var baiana = 22.50
    var  valorT1 = baiana * quantidade;
}


var menubebidas = "==== menu bebeidas ====\n"
menubebidas = menubebidas = "cód | bebidas \n ";
menubebidas += "1 |Refrigerante Lata -> R$ 5,00\n ";
menubebidas += "2 |Refrigerante 2L -> R$ 10,00\n  ";
menubebidas += "3 |Agua -> R$ 3,50\n  ";
menubebidas += "4 |Suco -> R$ 7,50\n ";

var bebida = parseInt(prompt(menubebidas));
var quantidade2 = parseInt(prompt("qual a quantidade:  "));

if (bebida == 1){
    var refrigeranteLata = 5.00
    var  valorT2 = refrigeranteLata * quantidade;
}
else if (bebida == 2){
    var refrigerante2l = 10.00
    var  valorT2 = refrigerante2l * quantidade;
}
else if (bebida == 3){
    var agua = 3.50
    var  valorT2 = agua * quantidade;
}
else if (bebida == 4){
    var suco = 7.50
    var  valorT2 = suco * quantidade;
}

var valorFinal = valorT1 + valorT2;
console.log ("O total foi de: " + valorFinal );




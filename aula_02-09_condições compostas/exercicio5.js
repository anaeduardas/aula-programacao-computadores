/*
Elabore um algoritmo que calcule o valor a ser pago por um produto considerando a quantidade, o preço e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir e efetuar o cálculo adequado.
Código =>  Condição Pagamento
1      => À vista, dinheiro ou cheque, 10% de desconto
2      => À vista, cartão de credito, 5% de desconto
3      => Em 2 vezes, preço sem juros
4      => Em 3 vezes, preço + 10% de juros
*/

var descricaocardapio = "==== Escolha uma comida ====\n";

descricaocardapio = descricaocardapio = "cód | nome"
descricaocardapio += "10|Arroz | 20,00\n";
descricaocardapio += "20|feijao | 7,90\n";
descricaocardapio += "30|açucar | 17,00\n";
descricaocardapio += "40|sal | 15,00\n";
descricaocardapio += "50|sazon | 10,00\n";
descricaocardapio += "\ndigite o codigo do alimento escolhido"

var codigoAlimento = parseInt (prompt(descricaocardapio));

var quantidade = parseInt(prompt("digite a quantidade dos produtos: "));

var valorTotal = 0

if (codigoAlimento == )
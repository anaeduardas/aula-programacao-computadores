/*
Elabore um algoritmo que calcule o valor a ser pago por um produto considerando a quantidade, o preço e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir e efetuar o cálculo adequado.
Código =>  Condição Pagamento
1      => À vista, dinheiro ou cheque, 10% de desconto
2      => À vista, cartão de credito, 5% de desconto
3      => Em 2 vezes, preço sem juros
4      => Em 3 vezes, preço + 10% de juros
*/


var precoDoProduto =  parseFloat(prompt("Digite o valor do produto: "));
var quantidade = parseFloat(prompt(" Digite a quantidade dos produtos: "));
var valorTotal = precoDoProduto * quantidade ;

var descricaoCodigo = "======= Escolha uma condição de pagamento =====\n ";
descricaoCodigo = descricaoCodigo = "cód | condição de pagamento \n ";
descricaoCodigo += "1 | À vista, dinheiro ou cheque, 10% de desconto\n ";
descricaoCodigo += "2 | À vista, cartão de credito, 5% de desconto\n ";
descricaoCodigo += "3 | Em 2 vezes, preço sem juros\n ";
descricaoCodigo += "4 | Em 3 vezes, preço + 10% de juros\n ";

var codigoPagamento = parseInt(prompt(descricaoCodigo));

if (codigoPagamento == 1){
  valorTotal / 0.1 ;  
  console.log (" o valor foi: " + valorTotal);
} 


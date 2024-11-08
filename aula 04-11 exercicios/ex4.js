/*
elabore um programa que receba uma lista de receitas, depois receba uma lista de despesas.
ao final, some todas as receitas e despesas, exiba o total e apresente a diferença entre eles.
*/

var totalreceita = [ ];
var totaldespesa = [ ];
var continuar  = 's';
var i = 0    
var total = 0;

while (continuar == 's') {
    totalreceita[i] = parseFloat(prompt("Digite o valor da receita"));
    i++;
    continuar = prompt("Digite s para continuar");
}
continuar = 's'
i = 0;

while (continuar == 's'){
    totaldespesa[i] = parsefloat(prompt("Digite o valor da despesa"));
    i++;
    continuar = prompt("Digite s para continuar");
}
while (i < despesas.length){
    totaldespesa += despesas[i];
    i++;
}
console.log ("o total de despesas é", total);
console.log("a diferença entre receita e despesa é " + totalreceita - totaldespesa);
 
       
    














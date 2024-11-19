/* 
elabore um programa de cadastro de bebidas com código, nome e valor;
ao final, percorra a lista e exiba os dados.

*/

var bebidas = [

{ codigo: 1, nome: "guaraná", valor : 5},
{ codigo: 2, nome: "Água", valor: 6},
{ codigo: 3, nome: "Suco", valor: 4},
{ codigo: 4, nome: "Cerveja", valor: 7}

];

console.log ("Codigo | nome | valor ");
for (var i = 0; i < bebidas.length; i++){
    console.log (bebidas [i].codigo, " | ", bebidas[i].nome, " | ", bebidas[i].valor);
}
/**
 *  A primeira estrutura condicional é o IF
 *  Ele tem a anatomia de if(condição) {}else{}
 * 
 * porém, podemos ter mais de 1 condição,
 * neste caso usamos if(){}  else if{} ()... else()
 * 
 * exemplo para a idade brasileira:
 * 
 */

var anoNascimento = parseInt(prompt("Digite o ano que nasceu: "));

// cria elemeneto de data
const data = new Date();

//paga  o ano elemento de  data
const anoAtual = data.getFullYear();

const idade = anoAtual - anoNascimento;
console.log("sua idade é "+ idade);

if(idade >= 18){
    console.log("Você é maior de idade e: ") ;
    console.log("1. pode tirar CNH!");
    console.log("2. é obrigadoa votar!");
    console.log("3. pode consumir bebidas alcólicas e entrar em qualquer lugar. ")
}else if (idade >= 16){
    console.log("Você é menor de idade, porém: ");
    console;log(" pode votar!");
    console.log("pode ser emancipado!");
    console.log("pode entrar em alguns lugares desacompanhado");
}else{
    console.log("você é completamente menor de idade!");
    console.log("é completamente de um resposável!");
}
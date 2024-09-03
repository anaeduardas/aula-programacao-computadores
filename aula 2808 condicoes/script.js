/*
var pd/avariavel=?
prompt (""): string
parseInt (""): number
parseFloat (""): number
console.log(""): void

+ soma ou concatena
- subtrai
* multiplica
/ divide

condicoes 
if (_______________ ____________ _______________)
    var ou text/num              var ou text/num

= = : igual/comparacao
> : maior 
> = : maior igual
< : menor
< = : menor igual
! = : diferente
*/
var anoAtual = 2024;
var anoNascimento = parseInt(prompt("digite seu ano de nascimento:"));
var idade = anoAtual - anoNascimento;

if(idade >= 18){
    console.log("voce e maior de idade no brasil!");
}else{
    console.log("voce e menor de idade no brasil!");
}

// manipulando o if
console.log("usando apenas o > (idade > 17)");
if(idade > 17){
    console.log("maior de idade");
}else{
    console.log("menor de idade");
}

console.log("invertendo  resultado idade < 18 ");
if (idade < 18){
    console.log("menor de idade!");
} else {
    console.log("maior de idade!");
}
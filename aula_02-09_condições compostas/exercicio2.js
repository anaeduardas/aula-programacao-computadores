/*
2 - Desenvolva um programa que leia a idade do usuário e informe a categoria de filme adequada: "Livre", "12 anos", "14 anos", "16 anos" ou "18 anos".
*/

var idade = parseFloat(prompt("Digite sua idade: "));

if (idade < 12){
    console.log(" a categoria de filme é livre!");
} else if (idade <14){
    console.log("a classificação é 14 anos!");
} else if (idade < 16){
    console.log("a classificação é 16 anos");
}  else if (idade > 18){
    console.log("a classificação é 18 anos");
}   

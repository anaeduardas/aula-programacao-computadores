var idade = parseInt(prompt("Digite a sua idade: "));

if (idade > 18) { 
   console.log ("para a idade [ " + idade + " ] a classificação é 18 anos !");
} else if (idade < 16){
    console.log (" para a idade [ " + idade + "] a classificação é 16 anos!");
} else if (idade < 14){
    console.log ("para a idade [ " + idade + " ] a classficação é 14 anos!");
}else if (idade < 12 ){
    console.log ("para a idade [ " + idade + " ] a classificação é livre!");
}

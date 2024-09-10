var numero1 = parseFloat(prompt("digite o primeiro numero"));
var operacao = prompt("escolha a operacao (+,-,*,/):");
var numero2 = parseFloat(prompt("digite o segundo numero:"));

var resultado = numero1 + numero2; 


if(operacao =="+"){
resultado = numero1 + numero2;
console.log("o resultado da subtracao e: " + resultado);
}else if(operacao == "*"){
    resultado = numero1 * numero2;
    console.log("o resultado da multiplicacao e:"+ resultado);
}else if(operacao == "/"){
    resultado = numero1 - numero2;
    console.log("o resultado da divisao e:"+ resultado);
}else if (operacao == "/"){
resultado = numero1 / numero2;console.log("o resultado da divisao e:"+ resultado);
}else{
    console.log("digite uma das opcoes validas! BURROOOOOOOOO");
}

// quando temos uma quantidade pré definida de repetições utilizamos o for

// o for pussui 3 parâmetros: (contador; condição; modificador)

// para repetir 3 vezes:

for (var i = 0; i < 3; i++) {
    console.log("o i vale: ", i );
}

// todo array pode ser percorrido com for
console.log("imprimindo o array");

var frutas = ['maçã', 'banana', 'uva', 'pessego', 'mamao', 'melao'];

for (var i = 0; i < frutas.length; i++){
    console.log("A Fruta [ " + i + " ] é: " + frutas[i]);
    console.log("A fruta [ ", i, "] é: ", frutas[i] );
    console.log ()
}
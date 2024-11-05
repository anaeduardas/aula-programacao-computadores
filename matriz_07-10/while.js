// while é um laço de repetição 
// que repete até que a condição seja atendida (true)

var notas = [];
var i = 0;

while (i < 4 ){
    notas [i] = parseInt(prompt (`digite a sua nota [ ${i+1} ]`));
    i++;
}

i = 0;
var media = 0;
while (i < notas.lenght) {
    media += notas[i];
    i++;
}

media = media / notas.lenght;
console.log(`a média é: ${media}`);
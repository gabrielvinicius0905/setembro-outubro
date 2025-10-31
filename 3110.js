const prompt = require('prompt-sync')();

let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}

console.log("Fim da Contagem!");

let numeroSecreto =
Math.floor(Math.random() * 10) +1;
let tentativa;
let tentativas = 0;

while (tentativa != numeroSecreto) {
    tentativa = Number(prompt("Adivinhe o número (1 a 10):"));
    tentativas++;

    if (tentativa === numeroSecreto) {
        alert('Parabéns! Você acertou o número ${numeroSecreto} em ${tentativas} tentativas!');
    } else {
        alert("Errou! Tente novamente.");
    }
}
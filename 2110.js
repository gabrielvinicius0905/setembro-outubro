const prompt=require("prompt-sync")();

let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let palpite;
while (true) {
    palpite = parseInt(prompt("Adivinhe o número entre 1 e 10:"));
    if (palpite === numeroAleatorio) {
        alert("Parabéns! Você adivinhou o número.");
        break;
    } else {
        alert("Tente novamente!");
    }
}
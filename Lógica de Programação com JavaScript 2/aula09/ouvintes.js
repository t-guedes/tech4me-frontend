const prompt = require("prompt-sync")();

console.log("== Tech4FM ==");

for (var ouvinte = 0; ouvinte < 5; ouvinte++) {
    const nome = prompt("Seu nome?");
    console.log(nome, "ganhou ingresso para o cinema");
}

console.log("Fim da promoção, parabéns aos cinco");
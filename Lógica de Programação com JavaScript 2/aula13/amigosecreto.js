const prompt = require("prompt-sync")();

console.log("=== AMIGO OCULTO ===");

const amigos = [];
var nome = "";

do {
    nome = prompt("Nome do amigo? ");

    if (nome == "") break;

    amigos.push(nome);
} while (nome != "");

const sorteados = amigos.concat();
sorteados.sort();

for (var i = 0; i < amigos.length; i++){
    const amigo = amigos[i];
    const tirou = sorteados[i];
    console.log("Amigo", amigo, "tirou", tirou);
}






const prompt = require("prompt-sync")();

console.log("=== LACHONETE ===");

const sanduiche = prompt("Qual o seu sanduiche? ");

var acomp = 0;
var lista = "";

for (var i = 0; i<5; i++){
    const texto = prompt("Acompanhamento? (concluir para sair) ");

    if (texto == "concluir") break;

    lista += texto + ", ";
    acomp++;
}

console.log("Seu sanduíche é", sanduiche);
console.log('Acompanhamentos: ', lista)

const prompt = require("prompt-sync")();

console.log("=== QUIOSQUE ===");

const sorvete = prompt("Digite o sabor do sorvete: ");
const adicional = 2.0;
var valor = 5.9;
var add = "";
var total = 0;

console.log("Quer adicionar complementos? (Fim para sair) ");

do {
    add = prompt("Adicional: ");

    if (add != "fim");
    total++;
    valor = valor + adicional;
} while (add != "fim");

console.log("Sabor escolhido:", sorvete);
console.log("Qtde. de adicionais:", total);
console.log("Valor a pagar:", valor);
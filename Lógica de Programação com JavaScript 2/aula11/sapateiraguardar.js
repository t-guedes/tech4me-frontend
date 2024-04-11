const prompt = require("prompt-sync")();

const sapatos = [];

var gaveta = prompt("Digite o número gaveta: ");
var nome = prompt("Digite o sapato: ");

var indice = parseInt(gaveta);

sapatos[indice] = nome;

console.log("você guardou o sapato", nome, "na gaveta", indice);


//Criação do prompt, acontece uma única vez
const prompt = require("prompt-sync")();

var valor = prompt("Digite o seu número: ")

const resposta = valor % 2 == 0;

if (resposta) console.log("PAR");
else console.log ("ÍMPAR");
//declarar o prompt
const prompt = require("prompt-sync")();

console.log("== Tech4me ==");
console.log("Você clicou em entrar!");

// entradas
const limite = 10;
const participantes = prompt("Digite os participantes que já estão na chamada: ");

// procesamento
const atingido = participantes >= limite;

// saidas
if (atingido) {
    console.log("Limite atingido (você não pode entrar)");
    console.log("Volte mas tarde.");
}

const permitido = !atingido;

if (permitido) {
    console.log("Você entrou na reunião.");
    console.log("Boa reunião");
}
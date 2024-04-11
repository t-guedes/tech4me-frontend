function extrairTipoPlaca(numero) {
    const quinto = numero.substring(4, 5);
    if (quinto >= "0" && quinto <=9) return "antiga";

    return "mercosul";
}

const prompt = require("prompt-sync")();

console.log("== CANCELA DE PEDÁGIO ==");

//entradas
const placa = prompt("Digite a placa: ");

//processamento
const tipo = extrairTipoPlaca(placa);

//saida
console.log("O carro na cancela tem placa", tipo);
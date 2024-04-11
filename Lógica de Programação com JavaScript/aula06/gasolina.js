//Criação do prompt, acontece uma única vez
const prompt = require("prompt-sync")();

//Retorno de função prompt sempre sera string
const preco = prompt("Frentista, digite o preço com zero no final: ");

const valor = parseFloat(preco);

console.log("Valor digitado: ", preco);
console.log("Valor a pagar: ", valor);

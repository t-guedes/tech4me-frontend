//Criação do prompt, acontece uma única vez
const prompt = require("prompt-sync")();


const textoA = "2.7";
const textoB = "3.7";

//NaN = Not a number = não é um número

const numA = parseInt(textoA);
const numB = parseFloat(textoB);

const soma = numA + numB;

console.log(soma);
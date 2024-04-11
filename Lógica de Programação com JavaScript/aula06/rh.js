//Criação do prompt, acontece uma única vez
const prompt = require("prompt-sync")();

console.log("=== SETOR DO RH ===");

var nome = prompt('Digite seu nome: ');
var primeiraLetra = nome.charAt(0).toUpperCase() + nome.slice(1);
var entrevista;


if (['a', 'e', 'i', 'o', 'u']){
    entrevista = 'Segunda-feira';
} else {
    entrevista = 'Terça-feira';
}

console.log('Entrevista para', primeiraLetra, ', marcada para', entrevista)

console.log(entrevista $ {nome.charAt(0).toUpperCase() + nome.slice(1)}`);
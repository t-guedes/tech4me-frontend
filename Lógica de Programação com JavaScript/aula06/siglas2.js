//Criação do prompt, acontece uma única vez
const prompt = require("prompt-sync")();


//Entradas
var uf = prompt('Digite a sigla de onde você mora: ');

//Processamento
var nome = "";

if (uf == "ES") {
    nome = "Espirito Santo";
}
else if (uf == "MG") {
    nome = "Minas Gerais";
}
else if (uf == "RJ") {
    nome = "Rio de Janeiro";
}
else if (uf == "SP") {
    nome = "São Paulo";
}


//Saidas
console.log("O nome completo do seu estado é: ");
console.log(nome);
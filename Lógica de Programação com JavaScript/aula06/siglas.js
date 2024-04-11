//Criação do prompt, acontece uma única vez
const prompt = require("prompt-sync")();


//Entradas
var uf = prompt('Digite a sigla de onde você mora: ');

//Processamento
var nome = "";

switch (uf) {
    case "ES":
    case "es":
        nome = "Espirito Santo";
        break;
    case "MG":
    case "mg":
        nome = "Minas Gerais";
        break;
    case "RJ":
    case "rj":
        nome = "Rio de Janeiro";
        break;
    case "SP":
    case "sp":
        nome = "São Paulo";
        break;
}

//Saidas
console.log("O nome completo do seu estado é: ");
console.log(nome);
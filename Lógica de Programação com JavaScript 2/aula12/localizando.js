const sapateira = ["Chinelo", "Tamanco", "Papete", "Tênis Nike", "Mocassim", "AirMax", "Rasterinha"];

sapateira.push("Crocs", "Salto Alto", "Havaianas", "Ferracini");

const prompt = require("prompt-sync")();

const nome = prompt("Nome do sapato que voce quer? ");

//const gaveta = sapateira.indexOf(nome);

var gaveta = -1;

for (var i = 0; 1 < sapateira.length; i++) {
    const sapato = sapateira[i];

    if (sapato == nome) {
        gaveta = i;
        break
    }
}
console.log("O calçado", nome, "está na gaveta", gaveta + 1);
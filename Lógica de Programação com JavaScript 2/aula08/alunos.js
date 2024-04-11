const prompt = require("prompt-sync")();

const alunos = 17
var contador = 0;
var i = 0;

while (alunos) {
    i = i + 1;
    const resposta = prompt(i + ". trouxe paçoca para o prof.?");
    if (resposta == "S") contador = contador + 1;
    i = i + 1;
}
console.log("Total de alunos que trouxeram paçoca: ", contador);
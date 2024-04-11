const prompt = require("prompt-sync")();

var alunosP = [];
var nomeAluno = prompt("Digite o nome do aluno presente (ou 'FIM' para encerrar): ");

while (nomeAluno !== 'FIM') {
    alunosP.push(nomeAluno);
    nomeAluno = prompt("Digite o nome do aluno presente (ou 'FIM' para encerrar): ");
}

console.log("Lista de alunos presentes: ", alunosP);
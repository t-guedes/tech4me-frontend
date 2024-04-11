const prompt = require("prompt-sync")();

console.log("=====================");
console.log("TAREFA IMPORTANTE DO DIA");
console.log("======================");

var manha = prompt('Digite sua tarefa para a manhã: ');
var tarde = prompt('Digite sua tarefa para a tarde: ');
var noite = prompt('Digite sua tarefa para a tarde: ');

console.log ('Ok, tudo anotado. ')
var periodoAtual = prompt('Qual é o período atual do dia (manhã, tarde ou noite)? ')


switch (periodoAtual.toLocaleLowerCase()) {
    case "manhã":
        alert('Tarefa da manhã: ' +manha);
        break;
    case "tarde":
        alert('Tarefa a tarde: ' +tarde);
        break;
    case "noite":
        alert('Tarefa a noite: ' +noite);
}
const prompt = require("prompt-sync")();

var dia_semana = prompt("Qual é o dia da semana ?");

if (dia_semana === 'segunda' ||
    dia_semana === 'terça' ||
    dia_semana === 'quarta' ||
    dia_semana === 'quinta' ||
    dia_semana === 'sexta') {
    console.log('Dia de TRABALHO 💵');
}

if (dia_semana === 'sabado' ||
    dia_semana === 'domingo') {
    console.log('Dia de FOLGA 💸');
}


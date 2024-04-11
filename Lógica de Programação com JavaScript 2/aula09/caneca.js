const prompt = require("prompt-sync")();

console.log("Qual nome da rádio que te dá uma caneca? ");

//Externa
for (var i = 0; 1 < 3; i++) {
    var resposta = "";

    //interna
    var chances = 2;

    do {
        resposta = prompt("Ouvinte " + (i + 1) + ", sua resposta? ");

        if (resposta == "tech4fm") console.log("Ganhou a CANECA!");
        else chances--;
    } while (resposta != "tech4fm" && chances > 0);
}

console.log("Parabéns aos ganhadores");

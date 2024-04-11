const prompt = require("prompt-sync")();

const amigos = 4;
var i = 0;
var total = 0;

while (i < amigos) {
    //
    const resposta = prompt(i + ". Valor da sua aposta: ");
    const valor = parseFloat(resposta);

    //acumuladora
    total = total + valor;
    i = i + 1;
}

console.log("O total da aposta é", total);
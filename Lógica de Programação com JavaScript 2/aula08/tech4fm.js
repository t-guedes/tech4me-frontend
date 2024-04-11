const prompt = require("prompt-sync")();

console.log("== Tech4FM ==");

var continuar = true;

while (continuar) {
    console.log("Não diga alô, diga 'Tech4FM show'");

    const resposta = prompt("Telefone toca: ");

    if (resposta == "tech4fm") {
        console.log("Parabéns, ganhou a camiseta!");
        continuar = false;
    }
}

console.log("Obrigado pela participação! ");



/** var resposta = "";

do {
    console.log("Não diga alô, diga 'Tech4FM show'");

    const resposta = prompt("Telefone toca: ");

    if (resposta == "tech4fm") {
        console.log("Parabéns, ganhou a camiseta!");
 
} while (resposta != "tech4me");
}

console.log("Obrigado pela participação! ");**/

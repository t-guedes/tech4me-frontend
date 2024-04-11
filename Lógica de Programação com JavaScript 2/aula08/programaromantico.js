const prompt = require("prompt-sync")();

console.log("=== PROGRAMA ROMÂNTICO ===");

var poema = true;

while (poema) {
    console.log("Minha vida é mais bonita quando estou ao teu lado. ");
    console.log("Tudo tem mais cor e eu só posso agradecer por este amor abençoado!")

    const resposta = prompt("Quer ler novamente? ");

    if (resposta == "nao" || "n" || "negativo") {
        poema = false;
    }
}





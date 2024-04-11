const prompt = require("prompt-sync")();

console.log("=== PROGRAMA ROMÂNTICO ===");

const  poesia = "Minha vida é mais bonita quando estou ao teu lado. Tudo tem mais cor e eu só posso agradecer por este amor abençoado!"
var resposta = "S";

while (resposta == "S"){
    console.log(poesia);
    resposta = prompt("Desejar repetir os versos?(S ou N) ");
}
console.log("Fim desse programa tão inspirador. ")
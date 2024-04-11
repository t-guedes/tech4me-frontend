console.log("=== LISTA DE DOCES ===");

const doces = ["Paçoca", "Canjica", "Pudim"];

doces.push("Pavê");
doces.push("Bolinho");
doces.push("Musse de chocolate");
doces.push("Doce de abóbora");
doces.push("Chocolate");
doces.push("Brigadeiro");

// Duas variaveis apontado para a MESMA lista
const sobremesas = doces;

sobremesas.push("Banoffe");

//
console.log(doces);


doces.push("pé de moça", "bacon de goma", "rabanada");

sobremesas.push("pudim de rabanada");
doces.push("quebra queixo");

console.log("Doces", doces);
console.log("Sobremessa", sobremesas);
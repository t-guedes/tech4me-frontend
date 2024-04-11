function obterMoeda() {
    const aleatório = Math.random();
    const decimal = aleatório * 10;
    const numero = Math.trunc(decimal);
    const par = numero % 2 == 0;

    if (par) return "cara";

    return "coroa";
}

//saida
var resposta = obterMoeda();
console.log("A moeda deu ", resposta);
resposta = obterMoeda();
console.log('A segunda jogada deu', resposta);
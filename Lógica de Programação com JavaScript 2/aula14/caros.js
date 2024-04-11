const lista = [];
var carro;

carro = {
  aluno: "Zépa",
  montadora: "VW",
  modelo: "Nivus",
  cor: "Nardo gray",
};
lista.push(carro);

carro = {
  aluno: "Wagner",
  montadora: "pegeout",
  modelo: "207",
  cor: "preto",
};
lista.push(carro);

carro = {
  aluno: "Thiago ",
  montadora: "fiat",
  modelo: "uno",
  cor: "preto",
};
lista.push(carro);

carro = {
  aluno: "dario",
  montadora: "ferrari",
  modelo: "california",
  cor: "vermelha",
};
lista.push(carro);

carro = {
  aluno: "Pedro Huck",
  montadora: "Porshe",
  modelo: "911",
  cor: "Verde",
};
lista.push(carro);

carro = {
  aluno: "Gui",
  montadora: "Lamborghini",
  modelo: "Veneno",
  cor: "Vermelho",
};
lista.push(carro);

carro = {
  aluno: "Kályta",
  montadora: "Fiat",
  modelo: "Bravo",
  Cor: "Prata",
};
lista.push(carro);

carro = {
  aluno: "Isis",
  montadora: "Chevrolet",
  modelo: "Onix",
  cor: "Laranja",
};
lista.push(carro);

carro = {
  proprietario: "Bruna",
  montadora: "Fiat",
  modelo: "Mobi",
  cor: "branco",
};
lista.push(carro);

carro = {
  aluno: "Luan",
  montadora: "Jeep",
  modelo: "Troller",
  Cor: "azul marinho",
};

lista.push(carro);

carro = {
  aluno: "darionaldo",
  montadora: "ford",
  modelo: "Fusion",
  cor: "preta",
};
lista.push(carro);

carro = {
  aluno: "Tiago",
  montadora: "Fiat",
  modelo: "Argo",
  cor: "azul",
};
lista.push(carro);

carro = {
  aluna: "Tamires",
  montadora: "Honda",
  modelo: "Honda Fit",
  cor: "preto",
};
lista.push(carro);

carro = {
  aluno: "Endreus",
  montadora: "Uno",
  modelo: "attractive",
  cor: "verde limão",
};
lista.push(carro);

/*console.log(lista.length);
console.log(lista[1]);*/

/*
const tamires = 12;
var veiculo = lista[tamires];
console.log(veiculo);
*/

//1. varrer
//2. extrair item
//3. estabelecer seu criterio
//4. tratar


var total = 0;
const pretos = [];

for (let index = 0; index < lista.length; index++) {
    const item /*ou (elemento)*/ = lista[index];

    //console.log(item);
    //console.log(item.cor);

    if (item.cor == "preto") pretos.push(item.modelo);
}
console.log(pretos);


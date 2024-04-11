const prompt = require("prompt-sync")();

var sapato01 = "Mocassim";
var sapato02 = "De pano preto";
var sapato03 = "All Star";
var sapato04 = "Nike vermelho";
var sapato05 = "Plataforma";

var espaco = prompt("Digite o número do espaço: ");

var resposta = "";

if (espaco == "1") resposta = sapato01;
if (espaco == "2") resposta = sapato02;
if (espaco == "3") resposta = sapato03;
if (espaco == "4") resposta = sapato04;
if (espaco == "5") resposta = sapato05;


console.log("No espaço", espaco, "está guardado o", resposta);
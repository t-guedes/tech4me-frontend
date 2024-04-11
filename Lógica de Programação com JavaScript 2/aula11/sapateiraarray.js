const prompt = require("prompt-sync")();

var sapato = new Array(5);
//var tenis = []; //igual array, só que mas rápido.

sapato[1] = "Mocassim";
sapato[2] = "De pano preto";
sapato[3] = "All Star";
sapato[4] = "Nike vermelho";
sapato[5] = "Plataforma";

var espaco = prompt("Digite o número do espaço: ");

var resposta = "";

if (espaco == "1") resposta = sapato[1];
if (espaco == "2") resposta = sapato[2];
if (espaco == "3") resposta = sapato[3];
if (espaco == "4") resposta = sapato[4];
if (espaco == "5") resposta = sapato[5];

console.log("No espaço", espaco, "está guardado o", resposta);


/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////


const prompt = require("prompt-sync")();

var sapato = new Array();
//var tenis = []; //igual array, só que mas rápido.

sapato[1] = "Mocassim";
sapato[2] = "De pano preto";
sapato[3] = "All Star";
sapato[4] = "Nike vermelho";
sapato[5] = "Plataforma";
sapato[6] = "Tênis Adidas";


var espaco = prompt("Digite o número do espaço: ");
const numero = parseInt(espaco);

var resposta = "xis";

/*nao precisa mas disso
if (numero == 1) resposta = sapato[numero];
if (numero == 2) resposta = sapato[numero];
if (numero == 3) resposta = sapato[numero];
if (numero == 4) resposta = sapato[numero];
if (numero == 5) resposta = sapato[numero];
if (numero == 6) resposta = sapato[numero];
agora ⬇️*/

resposta = sapato[numero];

console.log("No espaço", espaco, "está guardado o", resposta); io
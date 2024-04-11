const numero = 12.688;

var resposta = 0;

resposta = Math.round(numero);
resposta = Math.trunc(numero);

resposta = Math.random();

//const arred = Math.round(numero);
//const arred = Math.trunc(numero);

console.log(resposta);

const a = 15;
const b = 8;

var condicao = b > a;
var resposta = 0;


if(condicao) resposta = b;
else resposta = a;

console.log("O maior entre", a, "e", b, "é", resposta);

//com função
const a = 15;
const b = 8;
var resposta = Math.max(a, b);

console.log("O maior entre", a, "e", b, "é", resposta);

//ou
const a = 15;
const b = 8;
var resposta = Math.min(a, b);

console.log("O menor entre", a, "e", b, "é", resposta);
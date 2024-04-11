var gosta_cafe = true;
var programa_madruga = true;

const programador = gosta_cafe && programa_madruga;
console.log("Pessoa programadora?", programador);

var sabado = true;
var domingo = false;

var findSemana = sabado || domingo;
console.log("Hoje é find?", findSemana);

const dia_util = !findSemana;
console.log("É dia útil", dia_util);
//Indentificação das entradas
var idade = 20;
var sexo = "feminino";

var emancipado;
 
emancipado = (idade >= 18 && sexo == "masculino") || (idade >= 21 && sexo == "feminino");
idade >=21 || (sexo == "masculino" && idade >= 18);
console.log("Cidadão emancipado?", emancipado);

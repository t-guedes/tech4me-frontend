const presentes = ["Andre", "Bernardo", "Bruna", "Danilo", "Endreus", "Dario", "Isis", " Luan", "Kalyta", "Pedro", "Tamires", "Thiago", "Wagner"];

var texto = "";

for (var i = 0; i < presentes.length; i++){
    const item = presentes[i];
    texto += item + ", ";
}

texto = texto.substring(0, texto.length -2);
console.log(texto);

texto = presentes.join(",");
console.log(texto);


texto = "a, e, i, o, u";

/*const vogais = texto.split(", ");
console.log(vogais.length, vogais);*/


const vogais = [];

vogais.push();

//Atividade: Construir um código que faça o mesmo trabalho da função, split: criar uma lista com elementos extraidos de uma strings com delimitador.
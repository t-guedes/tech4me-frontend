const prompt = require("prompt-sync")();

var sorvete = ["Coco", 12, "Flocos", 1, "Morango", 6];

var sabor = prompt("Digite o sabor: ");

if (sabor == sorvete[0]){
    console.log(sorvete[1]);
    sorvete[1] = sorvete[1] - 1;
}

if (sabor == sorvete[2]){
    console.log(sorvete[3]);
}

if (sabor == sorvete[4]){
    console.log(sorvete[5]);
}


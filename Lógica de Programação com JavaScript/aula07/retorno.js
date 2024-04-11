function multiplicar (fator1, fator2){
    return fator1 * fator2;
}

const produto = multiplicar(3, 4);
console.log(produto);

//criar função para calcula o quadrdao de um número 

function quadrado(x) {
    var teste = 5;

    return x * x + teste;

    console.log('nunca vai ser impresso');
    return 40;
}

const seila = quadrado(2) + quadrado(3);
console.log(seila);

console.log(quadrado(9));

quadrado(4); //não faz nada
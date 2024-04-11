const semana = ["Segunda", "Terça", "Quinta", "Domingo", "Quarta", "Sábado"];

const palavra = "domingo";

const achei = semana.indexOf(palavra);

semana.push("Sexta");                      //novo

//console.log("Encontrado na posição", achei);

// antes da pesquisa
const resultado = [];

//passo 1. varrear a lista

//console.log(semana[i]);

//passo 2. extrair
    const item = semana[i];                   //novo
    //console.log(item);                      //novo

//passo 3. estabelecer minha condição
    if (item.substring(0, 1).toLocaleLowerCase() == "s") {
//passo 4. usar o resultado
        //console.log("domingo está na ", i, "posição")
        resultado.push(item);
    }
}

//depois de varrer
for (var i = 0; i <resultado.length; i++) console.log(resultado[i]); //esse e o correto a fazer

console.log(resultado.length);
console.log(resultado); //isso so funciona no javascript , e errado fazer #so para programadores





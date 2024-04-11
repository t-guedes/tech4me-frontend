const aluno = {};
aluno.nome = "Tamires";
aluno.sobrenome = "Guedes";

function mostrar() {
    var resultado = aluno.nome + " " + aluno.sobrenome;
    console.log(resultado);
}
const informacao = {
    mostrar() {
        return aluno.nome + " " + aluno.sobrenome;
    },
};

var completo = informacao.mostrar();
console.log(completo);
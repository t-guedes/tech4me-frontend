const hoje = new Date();

var local = hoje.toLocaleString();
var datas = hoje.toLocaleDateString();
var hora = hoje.toLocaleTimeString();
var outraforma = hoje.toISOString();

console.log(local);
console.log(datas);
console.log(hora);
console.log(outraforma);

const data = new Date();
const meses = ["Janeiro", "", "", "","","","","","","","",""];
const mes = meses[data.getMonth()];
var cabecalho = "Teresópolis, " + data.getDate() + " de " + data.getMonth() + " de " + data.getFullYear();

console.log(cabecalho);

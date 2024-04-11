const verao = ["☀️", "⛱️", "🌦️", "☔"];
const inverno = ["🌧️", "❄️", "☃️", "🥶"];

const clima = [];

for (var i = 0; i < verao.length; i++){
    const item = verao [i];
    clima.push(item);
}
for (var i = 0; i < inverno.length; i++){
    const item = inverno [i];
    clima.push(item);
}


console.log(clima);

//// forma mas curta ⬇️

const tempo = verao.concat([]);
console.log(tempo);
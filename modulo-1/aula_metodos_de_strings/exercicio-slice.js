//Obter apenas os dois dígitos do estado de uma cidade

const cidade = "Fortaleza-CE";

let estado1 = cidade.slice(-2)

const penultimoIndex = cidade.length - 2;
let estado2 = cidade.slice(penultimoIndex)

console.log(estado1);
console.log(estado2);
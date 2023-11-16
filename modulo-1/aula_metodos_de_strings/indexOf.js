// saber se um email é válido
// tem que ter @
// tem que ter pelo menos um ponto depois do @

const email = 'mjuliamary@gmail.com'

let arroba = email.indexOf('@')
let ponto = email.indexOf('.', arroba)

arroba !== -1 && arroba < ponto ? console.log('email válido') : console.log('email inválido')

/*
if(arroba !== -1 && arroba < ponto) {
    console.log('email válido');
} else {
    console.log('email inválido');
}
*/


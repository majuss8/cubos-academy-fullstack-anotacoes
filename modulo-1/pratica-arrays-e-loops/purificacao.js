let animal = '*Canis %lupus )familiaris'

let dadoPurificado = ''
for (let letras of animal) {
    if (letras === '!' || letras === '@' || letras === '#' || letras === '$' || letras === '%' || letras === '&' || letras === '*' || letras === '(' || letras === ')' || letras === '.') {

    }else {
        dadoPurificado += letras
       
    }
}

console.log(dadoPurificado);


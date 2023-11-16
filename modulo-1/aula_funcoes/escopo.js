
function soma(x, y) {
    let z = 5;
    return x + y + z;
}

// console.log(x); // essa variavel x so existe no escopo da função

// console.log(z); // tambem da undefined

let z = 5;
function soma(x, y) {
    return x + y + z; // consegue acessar o que ta fora
};

// pode acessar de fora pra dentro, mas não de dentro pra fora


const imagens = [0, 1, 2, 3, 4, 5, 6];

const sequencia = '>>><>';

let index = 0;
for (let item of sequencia) {
    if (item === '>') {
        index++;

    } else {
        index--
    }

    if (index < 0) {
        index = 6;

    } else if (index > 6) {
        index = 0;
    }
}

console.log(index);



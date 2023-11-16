let lista = ['a', 'b', 'c', 'd', 'e'];
lista.splice(1, 2, 'f');
console.log(lista);

lista = ['a', 'b', 'c', 'd', 'e'];
lista.splice(1, 2, 'f', 'g', 'h');
//console.log(lista);

lista = ['a', 'b', 'c', 'd', 'e'];
lista.splice(1, 0, 'f');
//console.log(lista);

//push - lista.push('f')
lista = ['a', 'b', 'c', 'd', 'e'];
lista.splice(lista.length, 0, 'f');
//console.log(lista);

//pop - lista.pop()
lista = ['a', 'b', 'c', 'd', 'e'];
lista.splice(lista.length - 1, 1);
//console.log(lista);

//shift - lista.shift()
lista = ['a', 'b', 'c', 'd', 'e'];
lista.splice(0, 1);
//console.log(lista);

//unshift - lista.unshift('f')
lista = ['a', 'b', 'c', 'd', 'e'];
lista.splice(0, 0, 'f');
console.log(lista);

const nomes = ['jose', 'joao', 'maria', 'joana', 'andre']; 
// mudou o conteudo da array, no const não se pode mudar a variavel em si

// nomes = []; // erro

console.log(nomes);

const x = 3;
nomes[0] = 'andreia';
nomes[1] = 'andreia';
nomes[2] = 'andreia';
nomes[x] = 'andreia';

console.log(nomes);
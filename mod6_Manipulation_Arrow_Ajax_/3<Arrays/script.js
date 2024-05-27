// Transformar array em string
let lista = ["ovo", "farinha", "corante", "massa"];
let res = lista.toString();
console.log(res); // "ovo,farinha,corante,massa"

// Junta os elementos do array em uma string, separados por '-' e o processo inverso do split, no split oq eu colocava dentro do split eu cortava e transformava em arrays, ja aqui oq eu colocar dentro do join eu estou adicionando entre os arrays e transformando em string.
let res1 = lista.join('-');
console.log(res1); // "ovo-farinha-corante-massa"

// Mostra a posição do item 'corante' no array
let res2 = lista.indexOf('corante');
console.log(res2); // 2. Se não encontrar, retorna -1

// Modifica o array
lista.shift();  // Remove o primeiro item ("ovo")
lista.pop();    // Remove o último item ("massa")
lista.push('prato'); // Adiciona "prato" no final
lista[0] = 'ovos';   // Altera o primeiro item para "ovos" se colocar um item q n existe, ai ele ira criar um novo item.
lista[lista.length] = 'liquidificador'; // Adiciona "liquidificador" no final
console.log(lista); // ["ovos", "corante", "prato", "liquidificador"]

// Remove um item do array usando delete (não recomendado)
delete lista[1];
console.log(lista); // ["ovos", undefined, "prato", "liquidificador"]

// Remove um item do array usando splice (recomendado),qual item e quantos itens ? se fosse 1, 2 ai ira remover dois itens a partir do "index" definido.
lista.splice(1, 1);
console.log(lista); // ["ovos", "prato", "liquidificador"]

// Concatenar arrays
let lista1 = ["ovo", "farinha", "corante", "massa"];
let lista2 = ["prato", "garfo", "faca", "colher"];
let resconcat = lista1.concat(lista2);
console.log(resconcat); // ["ovo", "farinha", "corante", "massa", "prato", "garfo", "faca", "colher"]

// Ordenar arrays
lista1.sort(); // Ordem alfabética
console.log(lista1); // ["corante", "farinha", "massa", "ovo"]

//se deixar so o reverse, ele so inverte a lista do array de forma normal.
lista2.sort().reverse(); // Ordem alfabética inversa, 
console.log(lista2); // ["prato", "garfo", "faca", "colher"]

// Métodos avançados
// Dobrar o valor de cada item do array usando map
let list = [45, 4, 9, 16, 25];
let list1 = list.map(function(item) {
    return item * 2;
});
console.log(list1); // [90, 8, 18, 32, 50]

// Dobrar o valor de cada item do array usando um loop for...in
let list2 = [45, 4, 9, 16, 25];
let list3 = [];
for (let i in list2) {
    list3.push(list2[i] * 2);
}
console.log(list3); // [90, 8, 18, 32, 50]

// Filtrar valores menores que 20
let linha = [45, 4, 9, 16, 25];
let linha1 = linha.filter(item => item < 20);
console.log(linha1); // [4, 9, 16]

// Verificar se todos os valores são maiores que 20
let linha2 = [45, 4, 9, 16, 25];
let allAbove20 = linha2.every(item => item > 20);
console.log(allAbove20); // false

// Verificar se pelo menos um valor é maior que 20
let linha4 = [45, 4, 9, 16, 25];
let anyAbove20 = linha4.some(item => item > 20);
console.log(anyAbove20); // true

// Encontrar o primeiro valor igual a 16
let lane = [45, 4, 9, 16, 25];
let foundItem = lane.find(item => item == 16);////findIndex em vez de retornar o item, retornara a posicao daquele item, ou seja retornara valor 3 pq 16 ta na posicao 3.
console.log(foundItem); // 16

// Encontrar um objeto em um array de objetos
let users = [
    { id: 1, nome: 'gui', sobrenome: 'porto' },
    { id: 2, nome: 'ana', sobrenome: 'rita' },
    { id: 3, nome: 'juu', sobrenome: 'Cas' }
];
let person = users.find(user => user.sobrenome == 'porto');
console.log(person); // { id: 1, nome: 'gui', sobrenome: 'porto' }

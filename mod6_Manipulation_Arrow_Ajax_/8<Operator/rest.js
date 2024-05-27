//Operator Rest : 
function adicionar(...numeros) {
    console.log(numeros);
}
adicionar(5,6,7,8,9,10); //em um cenario normal teriamos q por n1, n2 etc, mas digamos q eu n sei quantos sao, como teriamos q fazer: apenas acrescentar os ... antes do numeros.
//poderia usar para nomes, n so para numeros.
function addNames(...names) {
    console.log(names);
}
let names = ['maria','joana'];
addNames(...names,'Gui','ana','juu','bea');
// praticando os dois spread e rest

function addNomes (nomes, ...novosNomes) {
    let novoGrupo = [
        ...nomes,
        ...novosNomes
    ];
    return novoGrupo;
}
let nomes = ['Dr.','Porto'];
let outros = addNomes(nomes, 'Dr. Maria', 'Dr.Rita');
console.log(outros);
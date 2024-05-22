let lista = ["ovo","farinha","corante","massa"]
let res = lista.toString(); //primeiro metodo transformar o array em string.
let res1 = lista.join('-');// e o processo inverso do split, no split oq eu colocava dentro do split eu cortava e transformava em arrays, ja aqui oq eu colocar dentro do join eu estou adicionando entre os arrays e transformando em string.
let res2 = lista.indexOf('corante');// e a mesma ideia ira mostrar a posicao do item que eu selecionar, no caso se fosse corante, ira aparecer 2. Se colocar um valor que n tenha, ira retornar -1.

lista.shift();//remove o primeiro
lista.pop();//remove ultimo item
lista.push('prato');//adicionar item
lista[0] = 'ovos'; //dessa forma escolho o item que quero alterar, nesse caso o item zero, mas se colocar um item q n existe, ai ele ira criar um novo item.
lista [lista.length] = 'liquitificador';//dessa forma e uma boa opcao pois, nao preciso adivinhar qual item deve escrever para ele adicionar, ele ja faz a contagem automatica e adiciona em seguida.
console.log(res);
console.log(res1);
console.log(res2);

//remover um item do array
delete lista [1]; // msm deletando o item , o array continua com os 4 itens no array. Entao a melhor opcao e o splice.
lista.splice(1, 1); //qual item e quantos itens ? no caso remover o item 1 e apenas 1, mas se fosse 1, 2 ai ira remover dois itens a partir do "index" definido.
//concatenar arrays
let lista1 = ["ovo","farinha","corante","massa"];
let lista2 = ["prato","garfo","faca","colher"];
let resconcat = lista1.concat(lista2);//auqi ele junta dois arrays.
console.log(resconcat); //aqui aparece tds
//agr vms alterar o proprio array
lista1.sort();//ordem alfabetica
//agr alfabeto inverso
lista2.sort();
lista2.reverse(); //se deixar so o reverse, ele so inverte a lista do array de forma normal.

//Metodos avancados!
//irei gerar um novo array function map, ele mapeia o array e vai executar uma funcao em cada um dos itens do array.
let list = [45,4,9,16,25];
//iremos dobrar o valor de cada array como exemplo.
let list1 = [ ];

list1 = list.map(function(item) {
    return item * 2;
});

for(let i in list) {
    list1.push(list[i] * 2);
}

let result = list1;
console.log(result);
//Se preferir pode fazer usando o loop.
let list2 = [45,4,9,16,25];
let list3 = [ ];
for(let i in list2) {
    list3.push(list2[i] * 2);
}
let result1 = list2;
console.log(result1);
//Filter: ira rodar uma funcao q vai retornar true or false, se retorna false n aproveita o item do array se true ai aproveita, ou seja temos um array de varios valores, e vamos pegar os apenas menores de 20.
let linha = [45,4,9,16,25];
let linha1 = [];
linha1 = linha.filter(function(ucanchoose){
    if (ucanchoose < 20 ) {
        return true;
    } else {
        return false;
    }
    //return false ou true; se fizer isso isoladamente c/ tds arrays, ou seja ficara vazio, n aceitou ninguem.
});
let result2 = linha1;
console.log(result2);
//Every: ele rodara uma funcao recebera o item e ira retornar true e false tmb, mas n ira gerar um novo array, mas ira dizer se todos os itens daquele array bate com aquela requisicao ? true or false.Lembrese q tds precisa exercer a regra.
let linha2 = [45,4,9,16,25];
let linha3 = [];
linha3 = linha2.every(function(ucanchooseagain){
    if (ucanchooseagain > 20 ) {
        return true;
    } else {
        return false;
    }
});
let result3 = linha3;
console.log(result3);
//Some: ja e mais flexivel, so ira pegar se pelo menos 1 que for mais q 20 se for no caso do exemplo anterior, ai ja sera valido e retorna true.
let linha4 = [45,4,9,16,25];
let linha5 = [];
linha5 = linha4.some(function(ucanchoosehere){
    if (ucanchoosehere > 20 ) {
        return true;
    } else {
        return false;
    }
});
let result4 = linha5;
console.log(result4);
//uma dica p/ cleanar o code, pode usar com qualquer um dos acima.
let line = [45,4,9,16,25];
let line1 = [];
linha1 = line.some(function(ucanchoosehere){
    return (ucanchoosehere > 10) ? true : false
});
let result5 = line1;
console.log(result5);
//find : ele vai procurar algo nesse array, ele recebe item, index, array , repare q o array inteiro n faz mt sentido, ja q ja tenho ele disponivel...
//ele retorna o primeiro item q ele achar q satisfaca as condicoes q ele quer.
let lane = [45,4,9,16,25];
let lane1 = [];
lane1 = lane.find(function(item){//findIndex em vez de retornar o item, retornara a posicao daquele item, ou seja retornara valor 3 pq 16 ta na posicao 3.
    if(item == 16) {
        return true;
    } else {
        return false;
    }
});
let iqual = lane1;
console.log(lane1);
//Outro exemplo:
let user = [
    {id:1, nome:'gui',sobrenome:'porto'},
    {id:2, nome:'ana',sobrenome:'rita'},
    {id:3, nome:'juu',sobrenome:'Cas'}, 
];
let person = user.find(function(value){
    return(value.sobrenome =='porto') ? true:false;
});
let finded = person;
console.log(person);
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

//DATE datas
let d = new Date();
console.log(d); //so fazendo isso ira dar todas informacoes completas.
console.log(d.toDateString());//Dessa forma fica mais resumida
console.log(d.toUTCString());//pega a hora de outro fuso horario nesse caso na Europa.
console.log(d.toString());//pega todo texto da variavel que oq ja vimos antes.

//dentro da classe date podemos colocar 7 parametros.
let data = new Date(2020,0,1, 12,30,12 ); //atencao q mes comeca em zero (janeiro), mas o dia comeca 1 normal. entao seguindo a logica - ano,mes,dia,hora,minutos, segundo.
console.log(data.toString());
//podemos usar tmb o date com string, porem tem q ser nesse formato.
let data1 = new Date('2020-01-01 15:42:17');
console.log(data1);
//O minimo necessario para gerar uma data, e ano e mes. 
let data2 = new Date('2022,2'); //marco de 2022.
console.log(date2); 
//E se colocar date(0)
let data3 = new Date(0);//vai ir para 191=69, porem se colocar toUtcString, ira comecar a contas os milissegundos em 1970, entao ira comecar a conta de 1970.
console.log(data3)
let data4 = new Date(0);// dessa forma aparece 1970
console.log(data4.toUTCString());
//Ah mas digamos que so quero colocar o tempo, obviamente ira aparecer o ano de 1970 novamente por padrao, ja que to usando o toUTCString.
let data5 = new Date(123142341);
console.log(data5.toUTCString);// mas se quisesse numeros antes de 1970 ? ai e so colocar negativo.
let data6 = new Date(-1234234123412); //agr ira aparecer antes de 1970.
console.log(data6.toUTCString);//n pode esquecer desse detalhe
//vamos manipular as datas
let dat = new Date();
let novoValor = dat.getFullYear();//digamos q quero saber qual e apenas o ano
console.log(novoValor);
let dat1 = new Date();
let novoValor1 = dat1.getMonth();//digamos q quero saber qual e PWNa o mwa
console.log(novoValor1);
let dat2 = new Date();
let novovalor2 = dat2.getDay();
console.log(novovalor2);//vai retornar 3, mas pq ? pq retorna o dia da semana, ou seja comeca em 0 (domingo), getday pega o dia da semana, e como pega o dia atual de fato ?
let dat3 = new Date();
let novovalor3 = dat3.getDate(); //agr sim pega de fato o dia hj dia 23.
console.log(novovalor3);
let dat4 = new Date();
let novovalor4 = dat4.getHours();//sim tem q ta no plural, e pega as horas.
//e se for minutos .getMinuts(), .getMilliseconds .getSeconds(); ou seja ele pega a data daquele instante, ele n fica atualizando de fato, temos tambem o getTime(); ira mostrar todos milissegundos de 1970 ate o dia de hoje.
// temos tmb o Date.now(); retorna um time stump do tempo atual. e semelhante ao getTime, porem e mais direto.
let dat5 = new Date();
let novovalor5 = dat5.Date.now();
console.log(novovalor5);
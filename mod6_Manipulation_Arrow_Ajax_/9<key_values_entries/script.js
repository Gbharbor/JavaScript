let lista = [1,2,3,4]
console.log(typeof lista); //msm colocando um array de fato, ele retorna objeto, ou seja tanto key, values e entries funciona tanto em arrays quanto em object
let lista1 = ['ovo','macarrao','feijao','pipoca']
console.log(Object.keys(lista1) );//digamos q queira pegar apenas as chaves desse array, ou seja usando o keys ele so retorna os indices.
//Usando o value, nos dara o conteudo do array
let lista2 = ['ovo','macarrao','feijao','pipoca'];
console.log(Object.values(lista2));
// usando o entries: ele gera um pouco de confusao pois gera os 4 arrays q criei, porem com um index e um value
let lista3 = ['ovo','macarrao','feijao','pipoca'];
console.log(Object.entries(lista3));
//agora vms testar isso em objetos.
let pessoa = {
    nome: 'gui',
    sobrenome: 'porto',
    idade: 90
};
console.log(Object.keys(pessoa));//ira retornar um array com nome sobrenome e idade, ou seja consigo ver tds as chaves q esse objeto tem.
console.log(Object.values(pessoa));//aqui mostrara todos os values ou seja o conteudo de fato, gui, porto, 90
console.log(Object.entries(pessoa));// o mesmo serve para entries vera separado os arrays em duplas, no qual cada um tera o index e o value, repare que por se tratar de um object o index dele sera o proprio nome q determinei no objeto, no caso nome,sobrenome e idade (index) gui,porto,90 (values).
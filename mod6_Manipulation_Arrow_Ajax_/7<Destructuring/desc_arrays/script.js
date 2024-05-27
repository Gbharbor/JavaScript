 //como desconstruir um array
 let info = ['gui porto', 'gui','porto', '@gbharbor'];
 //a diferenca em realcao ao objeto q definimos como numeros ou values.
 //apesar de array n ter nome precisamos dar um nome a ele, pq ele vai virar uma variavel para poder desconstruir ele, n preciso referenciar o array, ele ja identifica o array automaticamente.
 let [nomeCompleto, nome, sobrenome, instagram] = info; 
 console.log(nomeCompleto,nome,sobrenome, instagram);
 //mas digamos q queira pular um value, n quero pegar nome nem sobrenome, a melhor opcao seria ignorar no console log, ou seja apenas menciona oq quer de fato. no caso nomecompleto e instagram, oq podemos fazer para n precisar criar uma variavel inutil so usar ,'espaco'.
 let info2 = ['ana maria', 'ana', 'maria', '@anamaria']
 let [nomeCompleto1, , , instagram1] = info2
 console.log(nomeCompleto1, instagram1);
 //outro metodo.
 let [name, lastname, age=90] = ['Juu', 'Pinto']; //como eu n defini o valor, ele pegara o padrao q criei que e o 90.
 console.log(name, lastname, age);
 //pode gerar um array e ja fazer a desconstrucao dele atraves de uma funcao.
 function criar() {
    let a = [1,2,3]
    return a;
 };
 let numeros = criar();
 let [a,b,c] = numeros;
 console.log(a,b,c)

//pode por a funcao ao lado do array, cleanando o codigo.
function create() {
    return [1,2,3];
};
let [x,y,z] = create();
console.log(`clean code: ${x},${y},${z}`);
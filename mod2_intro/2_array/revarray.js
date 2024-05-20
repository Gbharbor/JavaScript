let names = ["gui","jhon","ana", ["porto","barreto"]];
console.log(names[3][0]);
names.sort(); //Orden alfabetica
names[3].sort(); //Somente o value 3(porto e barreto) estara em orden alfabetica
names.reverse(); //de Z para A
names[0].reverse(); //de Z para A em (gui,jhon,ana)
console.log(names); //So para visualizar todos nomes
let mixed = ["blue", [18,20,30], true, names]; //string,array,boolean e variavel names
console.log(mixed[3][0])// peguei a variavel names e dps o array zero (gui,jhon,ana)
let age = mixed[1];// criei uma variavel que puxa outra variavel e em seguida o value 1 que e o array [18,20,30]
console.log(age[2]);// o age ta puxando o mixed q puxa o array com os avalores 18,20,30 , porem eu definindo esse [2], estou escolhendo qual value dentro desse array eu quero, q nesse caso e o 30 [2]
let ingredients = ["egg","flour","salt"];
ingredients[4] = "onion";// nesse caso defini o valor 4, porem pulei o valor 3, nesse caso o valor 3 estara "empty"
ingredients[3] = "yeast"// pronto agr defini o value 3, n estara mais empty
ingredients[4] = "butter"//onion n faz sentido na minha receita, entao repeti o value4, substituindo por butter.
ingredients.push("sugar");//usando o.push adiciono mais um valor no meu array, dentro da variavel ingredients.
ingredients[ingredients.length - 1] = "tomato" //dessa forma eu n preciso excluir e dps add com o push para substituir o ultimo valor, dessa forma consigo substituir e add o ultimo valor instantaneamente.
console.log(ingredients.join(' -> '));//usando o join consigo criar algo entre os valores do meu array, nesse caso criei uma seta
console.log(`total ingredientes : ${ingredients.length}`);// esse .lenght me diz o valor de itens q tenho dentro do array, mas n quantos values, ate pq seriam apenas do 0 ao 5
let emptyarray = [];//criei um array vazio, mas irei add valores nele usando o .push
emptyarray.push("random string");//adicionei uma string no array.
emptyarray.push("main string"); //adicionei outra string no array
emptyarray.push(26); //adicionei um number no array
emptyarray.pop();//aqui exclui meu ultimo valor add no caso o number 26
emptyarray.shift(); //aqui exclui o primeiro valor add no caso o random string.
console.log(emptyarray);
let cars = [
    {brand : "fiat", year: 2022},
    {brand : "bmw", year: 2018},
    {brand : "ferrari", year: 2020}
] //aqui criei uma variavel cars, com um array de modelos de carros, e especifiquei eles com 3 objetos, marcas que puxa uma string e ano que puxa um number.
cars.sort((a,b) => {
    if (a.year > b.year) {
        return 1;
    } else if (a.year < b.year) {
        return -1;
    } else {
        return 0;
    }
});//lembrando q o sort faz essa classificacao de elementos em matriz.
// a,b sao dois objetos de carro, aqui estamos comparando o ano de fabricacao dos carros "se o ano de a for maior que o ano de b, entao a deve vir depois de b, dessa forma retorna 1, se for a menor que b retorna -1, e se os anos forem iguais, n importa a ordem, entao retornamos 0, em resumo esse return 1, -1 ou 0, e a forma que jogamos o valor ou pra frente ou pra tras ou n movimentamos no caso se for zero"
console.log(cars);//sendo assim visualizamos do ano menor para o maior 2018, 2020, 2022
let skills = [
    {brand: "ruby", hours:100},
    {brand: "js", hours:120}
]
skills.sort((a,b) => {
    return b.hours - a.hours;
});//Aqui temos uma funcao de comparacao, estamos classificando na base do numero de horas
//para classificar em ordem decrescente(do maior para o menor) , subtraimos b - a , se b>a = numero positivo, oq fara com q b seja antes de a , porem se b<a, resultara em um numero negativo, fazendo que a seja antes de b, se forem a=b , n importa a ordem.
console.log(skills);//Aqui visualizaremos js em primeiro por ter mais horas.
let option = [
    {brand: "java", hours: 40},
    {brand: "c#", hours: 70}
]
option.sort((a,b) => b.hours - a.hours);
console.log(option); //Mesmo esquema da anterior, o codigo so esta mais clean, mas a ordem sera decrescente tmb do maior para o menor, no caso c# ficara no topo por ter mais horas.
let fruits = ["banna","laranja","maca","pera"];
let bigfruits = fruits.filter((value) => {
    if(value.length > 4) {
        return true;
    } else {
        return false;
    }
});//.filter e uma matriz q faz com q apenas os elementos q passam pelo teste especifico por uma funcao, value e uma funcao de callback,passado para o metodo filter, esse value repretesenta cada elemento do array (matriz), e o "teste" seria que cada value tem uma quantidade de letras e deve ser maior do que 4, caso contrario retorna false e n e exibido.
console.log(bigfruits);//seguindo a logica, apenas frutas com mais de 4 letras, aparecera apenas banana e laranja
let office = ["paper","scan","keyboard","cell"];
let all = office.filter ((item) => {
    return item.length > 4
});
console.log(all);// Essa e semelhante a anterior, so simplifiquei o codigo, colocando o detalhe e que poderia qualquer nome no parametro, nesse caso escolhi item
let meal = ["breakfast","lunch","dinner","snack"];
let food = meal.every((value)=> {
    if(value.length > 3) {
        return true;
    } else {
        return false;
    }
});
console.log(food);//a ideia de callback e a mesma, a diferenca que o every. faz com que todas tenham q estar dentro da funcao criada, ou seja se todos itens forem maior do que 3 letras, retorna true, caso contrario false.
let feed = ["breakfast","lunch","dinner","snack"];
let eat = feed.every((value)=> value.length > 5);
if (eat) {
    console.log("all are bigger than 5");
} else {
    console.log("not at all bigger than 5")
} // a logica de callback e a mesma a difrenca so q criei um console, porque ja sabemos q retornara um bolleam de true ou false, entao ja defini meus consoles para ambos.

let stuffs = ["rice","beans","meat","bread"];
let recipe = stuffs.some((value)=> {
    if (value.length > 6) {
        return true;
    } else {
        return false;
    }
});
if (recipe) {
    console.log("someone is bigger than 6");
} else {
    console.log("noone is bigger than 6");
}
console.log(recipe);//Esse elemento some faz com q pelo menos um elemento satisfaz a determinada condicao, no caso se cada um deles e maior do que 6 letras, so basta q um elemento seja maior do que 6 para returnar true, caso contrario retorna false.
if (stuffs.includes("grape")) {
    console.log("you already have this item on list")
} else {
    console.log("do not have this item on list");
};  //ja aqui temos o .includes, q verifica se grape ja esta em stuffs, que no caso n esta entao retorna false, dizendo q n esta na lista.
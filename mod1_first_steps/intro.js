
/*
//Hello World
!alert("hello world");
console.log("hello world");
*/
/*
//Variaveis
let nome = "gui";
let idade = 19;
let lista = ["arroz", "feijao"];
let nomeCompleto = {nome:"gui", idade:20};
console.log(`${nome} + ${idade} + ${lista}`);
console.log(nomeCompleto);
*/
/*
//const 
const idade = 20;
console.log(idade);
var nome = "gui";
console.log(nome);
nome = "ana";
console.log(nome);
*/
/*
//Operacoes em variaveis
let x = 4;
console.log(x);

let nome = "gui";
let sobrenome = "porto";
let nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto);

let n1 = 40;
let n2 = 20;
let n3 = 30;

let operacoes = (n1 + n2) - n3;
console.log(operacoes);
*/
/*
//template string
let nome = "gui";
let sobrenome = "porto";
let nomeCompleto = `meu nome completo e : ${nome} ${sobrenome}`;

console.log(nomeCompleto);
*/
//condicionais if/ else
/*
let idade = 10;
if (idade>=18) {
    console.log("vc e de maior");
} else {
    console.log("vc e de menor");
}
*/
/*
//condicionais == e ===
let number = 20 ;
if (number === 20) {
    console.log("vc pensou no numero certo")
} else {
    console.log("vc pensou no numero errado");
}
att de idade

let idade = 20;
if (idade === 20) {
    idade = idade + 15;
    console.log("vc att sua idade");
    console.log(idade);
}
*/

//multicondicionais && e || 
/*
let idade = 110;
if (idade >= 18 && idade < 60) {
    console.log("vc e adulto");
}

let idade = 14;
if (idade >=18 || idade < 60) {
    console.log("vc e um adulto");
}
*/
/*
//Condicionais duplas if else 
let ok = true;
if (ok){
    console.log("entrou")
} else {
    console.log("n entrou");
}

let idade = 19;
let adulto = idade >= 18 && idade < 60; 
if (adulto) {
    console.log("maior");
} else {
    console.log("menor");
}
*/
//condicionais duplas ELSE IF
/*
let idade = 10;
if (idade < 18) {
    console.log("minor");
} else if (idade >=18 && idade < 60) {
    console.log("of age");
} else if (idade > 60) {
    console.log("elderly")
}
*/

//CONDICIONAIS TERNARIA 
/*
let isMember = false;
let shipping = isMember ? 2 : 10;
console.log(isMember ? "e membro" : "n e membro");
console.log("frete: " + shipping);

let age = 60;
let isAdult = ((age>=18 && age < 60) ? "adulto" : "n adulto")
console.log(isAdult);
*/
/*
let profession = "fireman";
console.log("profissao: " + profession);
switch(profession) {
    case "supervisor":
        console.log("green shirt");
    break;
    case "fireman":
        console.log("red shirt");
    break
    case "police":
        console.log("blue shirt");
    break;
    
    default: 
        console.log("black shirt");
    break;
}
*/
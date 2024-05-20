// sao so 4 principais, existe outros mas n sao mt importante.,
let n = 10;

let res = n.toString(); //a funcao toString tu pode usar em varios formatos arrays etc, mas e mais util em numbers, repare q se eu deixasse sem o tostring iria aparecer em outra cor de number, porem como coloquei em tostring ele ficara preto no console.log

console.log(res);

//vms se por que tem um  numero decimal
let m = 10.123213123;
let res1 = "R$"+ n.toFixed(2) // ou seja dessa forma ira aparecer 2 decimais dps da virgula, nesse caso seria 10.12
console.log(res1);
//agr esse pode usar em numero e string.
let x = '25';
let res2 = x + 5; //pela logica n ira aparecer 30 , por ser ums string + number, ou seja usamos a funcao parseInt para transformar em number a string q criei.
console.log(res2);
let res3 = parseInt(x) + 5//agr sim transformei meu x='25' em number, e dara 30.
console.log(res3);
//temos tambem o parsefloat, ira preservar os decimais de um numero, ou seja usar isso para preservar os decimais.
let y = '35.8'
let res4 = parseFloat(y) + 5;
console.log(res4); // dessa forma ira preservar os decimais, nesse caso 
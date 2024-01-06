//basic functions
function gravidade() {
    console.log("gravity 9.8");
}
gravidade();
function somar (n1, n2) {
    let resultado = n1 + n2;
    console.log ("Resultado : " + resultado);
}

somar(10, 10);
function multiplicar (nu1,nu2) {
    let result = nu1*nu2
    console.log ("Resultado: " + result);
}
multiplicar (5,5);

function dividir (nu1,nu2) {
    let valor = nu1/nu2;
    console.log("Resultado: " + valor);
}
dividir(10,2);

function nomecompleto (nome, sobrenome) {
    console.log(`${nome} ${sobrenome}`);
}
nomecompleto("Gui","porto");

function completename (name,lastname) {
    return `${name} ${lastname}`;
}
let complete = completename("Gui","Porto");
console.log("Name: " + complete);

function inteironome (name, lastname) {
    let inteironome = `${name} ${lastname}`;
    console.log("Nome Inteiro: " + inteironome);
}
inteironome("porto","gui");

// function with conditional return (if / else)
function tobeofage (age) {
    if (age>=18) {
        return true;
    } else {
        return false;
    }
}
let age = tobeofage(12);
console.log(age);

function maiordeidade(idade) {
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
}
let anos = 19;
let validacao = maiordeidade (anos);
if (validacao) {
    console.log("Maior de idade");
} else {
    console.log("Menos de idade");
}

function calcpct(n1,n2) {
    return (n2/n1) * 100;
} 
let x = 100; //y is equivalent to %pct of x
let y = 20;
let pct = calcpct(x,y);
console.log(`${y} is equivalent ${pct}% of ${x}`);
//calculate the property price: m2 = 3.000/
//1 bedroom m2 = 1x 
//2 bedroom m2 = 1.2x
//3 bedroom m2 = 1.5x
function calcproperty (meters,beds) {
    let m2 = 3000;
    let price = 0;
        switch (beds) {
            case 1:
            default: 
                price = meters * m2;
            break;
            case 2:
                price = meters * (m2 * 1.2);
            break;
            case 3:
                price = meters * (m2 * 1.5);
            break;
        }
        return price;
}
let meters = 70;
let beds = 2;
let price = calcproperty (meters,beds);
console.log(`the price is ${price}`);
//basic function
function gravidade() {
    console.log("gravidade e 9.8");
}
gravidade();
//math operation
function somar (n1,n2) {
    let resultado = n1 + n2; // -,*,/
    console.log("resultado: " + resultado);
}
somar(10,10);
//fullname: way 1
function inteironome (name, lastname) {
    let inteironome = `${name} ${lastname}`;
    console.log("Nome Inteiro: " + inteironome);
}
inteironome("porto","gui");
//fullname: way 2
function nomecompleto (nome, sobrenome) {
    console.log(`${nome} ${sobrenome}`);
}
nomecompleto("Gui","porto");
//fullname: way 3
function completename (name,lastname) {
    return `${name} ${lastname}`;
}
let complete = completename("Gui","Porto");
console.log("Name: " + complete);
//function with conditional return (if / else)//
//To be of Age : way 1
function tobeofage (age) {
    if (age>=18) {
        return true;
    } else {
        return false;
    }
}
let age = tobeofage(12);
console.log(age);
//To be of Age : way 2
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
//Calculus porcent 
//y is equivalent to %pct of x:
function calcpct(n1,n2) {
    return (n2/n1) * 100;
} 
let x = 100;
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
let meters = 80;
let beds = 2;
let price = calcproperty (meters,beds);
console.log(`the price is ${price}`);
//Create a function who value user and password, user correctly : Porto;PW correctly : 1234
function validation(user, pw) {
    if (user === "Gui" && pw === 1234) {
        return true;
    } else {
        return false;
    }
}
let usuario = "gai";
let senha = 1234;
let value = validation(usuario, senha);
if (value) {
    console.log(`Welcome ${usuario}`);
} else {
    console.log("wrong PW");
}
// Arrow Function math operations:
function somar (x,y) {
    return x + y;
} 
console.log(somar(10,10));

const sum = (x,y) => {
    return x + y;
}
console.log(sum(10,30));
const somando = (x,y) => x + y;
console.log(somando(10,5));
// Arrow Function users:
function lastname (last) {
    return "gui" + last;
} 
console.log(lastname("Porto"));
const lastname2 = (lastN) => "name" + lastN;
console.log(lastname2("surname"));
//variables within functions, different ways to use count:
let count = 0;
function add() {
    count++;
}
add();
console.log(count);
let count1 = 0;
function add1() {
    count1 = count1 + 1;
}
add1();add1();
console.log(count1);
let count2 = 0;
function add2() {
    count2 += 1;
}
add2();add2();add2();
console.log(count2);
//Square root
function square(x) {
    return x * x;
}
console.log(square(2));
//Sum of Squares
function square (x) {
    return x * x;
}
function addsquares (a,b) {
    return square(a) + square(b);
}
console.log(addsquares(2,3));//13
//Sum of Squares with variables.
function square(x) {
    return x * x;
}
function addsquares (a,b) {
    let rootA = square(a);
    let rootB = square(b);
    return rootA + rootB;
}
console.log(addsquares(4,4));//32
//Sum of Squares with function litteraly within function
function addsquares (a,b) {
    function square(x) {
        return x * x;
    }
    let sqrA = square(a);
    let sqrB = square(b);
    return sqrA + sqrB;
}
console.log(addsquares(5,5))//50
//Clean code function within function and arrow function
const addquadrado = (a,b) => {
    const square = x => x * x;
    return square(a) + square(b);
 }
 console.log(addquadrado(6,6));//72
//Cleaner ! 
const additems = (a,b) => a * a + b * b;
console.log(additems(3,3));//18
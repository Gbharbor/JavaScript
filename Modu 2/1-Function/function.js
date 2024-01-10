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

//Create a function who value user and password, user correctly : Porto;PW correctly : 1234
function validation (user,pw) {
    if(user === "Gui" && pw === 1234) {
        return true;
    } else {
        return false;
    }
}
let user = "Gui";
let pw = 1234;
let value = validation (user,pw);
if (validation) {
    console.log(`Welcome ${user}`);
} else {
    console.log("wrong PW");
}

//Aroow Function: summary function and return
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
function lastname (last) {
    return "gui" + last;
} 
console.log(lastname("Porto"));
const lastname2 = (lastN) => "name" + lastN;
console.log(lastname2("surname"));

//variables within functions, different ways to use count:
let count = 0;
function add() {
    count++; //count += 1; | count + 1;
}
add();
add();
console.log(count);

// square root
function square(x) {
    return x * x;
}
console.log(square(2));

//function within function using sum of squares in summary way, but in root way has more details.
function square(x) {
    return x * x;
}
function addsquares(a,b) {
    return square(a) + square(b);
}
console.log(addsquares(2,2)); //8

function root (x) {
    return x * x;
}
function addroots (a,b) {
    let rootA = root(a);
    let rootB = root(b);
    return rootA + rootB;
}
console.log(addroots(3,3));//18

//function within function literally.
function addrootsqr (a,b) {
    function root3(x) {
        return x * x ;
    }
    let sqrA = root3(a);
    let sqrB = root3(b);
    return sqrA + sqrB;
}
console.log(addrootsqr(2,3));

//Clean code function within function return and arrow function both.
function additems (a,b) {
    const item = (x) => x * x;
    return item(a) + item(b);
}
console.log(additems(6,6));
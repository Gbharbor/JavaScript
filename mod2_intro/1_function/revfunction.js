function validation (user, pw) {
    if (user === "Gio" && pw === 1234) {
        return true;
    } else {
        return false;
    }
} 
let usuario = "Gio";
let senha = 1234;
let value = validation(usuario, senha);
if (value) {
    console.log(`welcome ${usuario}`);
} else  {
    console.log("Wrong Password");
} 
// Arrow Function math operations
function somar (x, y) {
    return x + y;
}
console.log(somar(10,20));

const somando = (x,y) => {
    return x + y;
}
console.log(somando(20,30));

const sum = (x,y) => x + y;
console.log(sum(10,10));

function lastname (last) {
    return "gui" + last;
}
console.log(lastname(" Porto"));

const lastname2 = (lastN) => "Gui" + lastN;
console.log(lastname2(" Barreto"));

//Variaable within functions, different ways to use count:
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

//Square Root:
function square(x) {
    return x * x;
}
console.log(square(3)); //9

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
function addsquares(a,b) {
    function square (x) {
        return x * x;
    }
    let rootA = square(a);
    let rootB = square(b);
    return rootA + rootB;
}
console.log(addsquares(2,2));
// clean
function addsquares (a,b) {
    const square = x => x * x;
    return square(a) + square(b);
}
console.log(addsquares(3,3));
// cleaner 

const additems = (a,b) => a * a + b * b;
console.log(additems(2,2));
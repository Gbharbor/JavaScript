// Basic Function
function gravity() {
    console.log("Gravity is 9.8");
}
gravity();

// Math Operation
function sum(n1, n2) {
    let result = n1 + n2; // -, *, /
    console.log("Result: " + result);
}
sum(10, 10);

// Full Name: Way 1
function fullName1(name, lastName) {
    let fullName = `${name} ${lastName}`;
    console.log("Full Name: " + fullName);
}
fullName1("Porto", "Gui");

// Full Name: Way 2
function fullName2(firstName, lastName) {
    console.log(`${firstName} ${lastName}`);
}
fullName2("Gui", "Porto");

// Full Name: Way 3
function completeName(name, lastName) {
    return `${name} ${lastName}`;
}
let complete = completeName("Gui", "Porto");
console.log("Name: " + complete);

// Function with Conditional Return (if/else)
// To Be of Age: Way 1
function toBeOfAge(age) {
    return age >= 18;
}
let isAdult1 = toBeOfAge(12);
console.log(isAdult1);

// To Be of Age: Way 2
function isAdult(age) {
    return age >= 18;
}
let years = 19;
let validation = isAdult(years);
if (validation) {
    console.log("Of Legal Age");
} else {
    console.log("Underage");
}

// Calculating Percentage
function calcPct(n1, n2) {
    return (n2 / n1) * 100;
}
let x = 100;
let y = 20;
let pct = calcPct(x, y);
console.log(`${y} is ${pct}% of ${x}`);

// Calculate Property Price
function calcProperty(meters, beds) {
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
let propertyPrice = calcProperty(meters, beds);
console.log(`The price is ${propertyPrice}`);

// Create a Function for User and Password Validation
function validation1(user, pw) {
    return user === "Gui" && pw === 1234;
}
let username = "gai";
let password = 1234;
let isValid = validation1(username, password);
if (isValid) {
    console.log(`Welcome ${username}`);
} else {
    console.log("Wrong Password");
}

// Arrow Function Math Operations
const add = (x, y) => x + y;
console.log(add(10, 10));

const sum1 = (x, y) => {
    return x + y;
};
console.log(sum1(10, 30));

const adding = (x, y) => x + y;
console.log(adding(10, 5));

// Arrow Function Users
const lastName = last => "gui" + last;
console.log(lastName("Porto"));

const lastName2 = lastN => "name" + lastN;
console.log(lastName2("surname"));

let lettersName = (name) => {
    return name.length;
}
console.log(lettersName('Guilhermao'));

let lettersName1 = (name1) => name1.length;
console.log(`Letters: ${(lettersName1('Porto'))}`);

// Variables Within Functions: Different Ways to Use Count
let count = 0;
const addCount = () => {
    count++;
};
addCount();
console.log(count);

let count1 = 0;
const addCount1 = () => {
    count1 = count1 + 1;
};
addCount1();
addCount1();
console.log(count1);

let count2 = 0;
const addCount2 = () => {
    count2 += 1;
};
addCount2();
addCount2();
addCount2();
console.log(count2);

// Square Root
const square1 = x => x * x;
console.log(square1(2));

// Sum of Squares
function square(x) {
    return x * x;
}
function addSquares(a, b) {
    return square(a) + square(b);
}
console.log(addSquares(2, 3)); // 13

// Sum of Squares with Variables
function square(x) {
    return x * x;
}
function addSquares(a, b) {
    let rootA = square(a);
    let rootB = square(b);
    return rootA + rootB;
}
console.log(addSquares(4, 4)); // 32

// Sum of Squares with Function Literally Within Function
function addSquares(a, b) {
    function square(x) {
        return x * x;
    }
    let sqrA = square(a);
    let sqrB = square(b);
    return sqrA + sqrB;
}
console.log(addSquares(5, 5)); // 50

// Clean Code: Function Within Function and Arrow Function
const addSquare = (a, b) => {
    const square = x => x * x;
    return square(a) + square(b);
};
console.log(addSquare(6, 6)); // 72

// Cleaner!
const addItems = (a, b) => a * a + b * b;
console.log(addItems(3, 3)); // 18
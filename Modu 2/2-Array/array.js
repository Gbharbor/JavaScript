let names = ["gui","jhon","Ana",
    ["porto","barreto"]];
let mixed = ["blue", [18,20,30] ,
     true, names];
let age = mixed[1];
let ingredients = ["egg","flour","salt"];
ingredients[4] = "onion";
ingredients[3] = "yeast"; 
ingredients[4] = "butter";
ingredients.push("sugar");
let emptyarray = [];
emptyarray.push("random string");
emptyarray.push("main string");
emptyarray.push(25);
emptyarray.pop();
emptyarray.shift();
console.log(mixed[3][0]);
console.log(names[3][1]);
console.log(age[2]);
console.log(ingredients); 
console.log(`total: ${ingredients.length}`);
console.log(emptyarray);
console.log(emptyarray.length);
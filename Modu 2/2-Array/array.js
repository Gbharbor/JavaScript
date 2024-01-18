let names = ["gui","jhon","Ana",["porto","barreto"]];
console.log(names[3][1]);
names.sort(); names[3].sort();
names.reverse(); names[0].reverse();
console.log(names);
let mixed = ["blue", [18,20,30] , true, names];
console.log(mixed[3][0]);
let age = mixed[1];
console.log(age[2]);
let ingredients = ["egg","flour","salt"];
ingredients[4] = "onion";
ingredients[3] = "yeast"; 
ingredients[4] = "butter";
ingredients.push("sugar");
ingredients[ingredients.length - 1] = "tomato";
ingredients.sort();
console.log(ingredients.join('->')); 
console.log(`total: ${ingredients.length}`);
let emptyarray = [];
emptyarray.push("random string");
emptyarray.push("main string");
emptyarray.push(25);
emptyarray.pop();
emptyarray.shift();
console.log(emptyarray); console.log(emptyarray.length);
let cars = [
    { brand: 'fiat', year: 2022},
    { brand: 'bmw', year: 2018},
    { brand: 'ferrari', year: 2020}
]
cars.sort((a,b) => {
    if (a.year > b.year) {
        return 1;
    } else if (a.year < b.year) {
        return -1;
    } else {
        return 0;
    }
});
console.log(cars);
let skills = [
    {brand: 'ruby', hours:100},
    {brand: 'js', hours:120}
]
skills.sort((a,b) => {
    return b.hours - a.hours;
});
console.log(skills);
let option = [
    {brand: 'java', hours:40},
    {brand: 'C#', hours:20}
]
option.sort((a,b) => b.hours - a.hours);
console.log(option);
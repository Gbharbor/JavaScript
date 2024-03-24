let names = ["gui","ana","jhon", ["porto","barreto"]];
console.log(names[3][0]);// here im pulling the value which are the surnames, and choosing the value zero whitch is "porto"
names.sort(); //alphabetical order
names[3].sort();//alphatical order on surnames which value is 3
names.reverse();//z to a
names[0].reverse();// z to a em first names
console.log(names);//view names

let mixed = ["blue",[18,20,30],true,names];//mixed string, array, bolean and let names
console.log(mixed[3][0])//i took the names var and then zero value (gui,jhon,ana);
let age = mixed[1];//i created a variable that pulls another variable and then the value 1, which is the array [18,20,30]
console.log(age[2])//age is pulling the mixed which pulls the awway with the values 18,20,30, but by defining this [2], im choosing which value within this array i want, which in this case is 30[2]

let ingredients = ["egg","flour","salt"];
ingredients[4] = "onion";//here i defined the value 4, but i skipped the value 3, in this case the value 3 will be empty
ingredients[3] = "yeast"// right, now i defined the value 3, wont be empty now
ingredients[4] = "butter"//here i repeat the value 4 and replaces the value "onion"
ingredients.push("sugar")//add sugar.
ingredients[ingredients.length - 1] = "tomato"//this way i dont need to delete with .pop and add with .push to replace tha last value, this way i can replace and add the last value instantly
console.log(ingredients.join("->"));// using join i can create something betwwn the values of my array, in this case i created an arrow
console.log(`total: ${ingredients.length}`);// the .length tells me the value of items i have inside the array, but not how many values, bc they only be 0 to 5, not 6

let emptyarray = [];//created empty array, but i gonna add values in it
emptyarray.push("random string");//add string
emptyarray.push("main string");//add string
emptyarray.push(26);//add number
emptyarray.pop();//i just delete the last value 26
emptyarray.shift();//i just delete the first one value random string
console.log(emptyarray);//show just main string

let cars = [
    {brand: "fiat", year: 2022},
    {brand: "bmw", year: 2018},
    {brand: "audi", year: 2020}
];// here i created a cars var, with an array of car models, and specified them with 3 objects, brands that pull a string and year that pulls a number
cars.sort((a,b) => {
    if(a.year > b.year) {
        return 1;
    } else if(a.year < b.year) {
        return -1;
    } else {
        return 0;
    }
});
console.log(cars);/*In this function, `sort()` is being used to sort an array of objects representing cars based on the year of manufacture. Here is the comparison logic:
- If the year of manufacture of car `a` is greater than the year of manufacture of car `b`, it means that `a` must come after `b` in the sorted array. Therefore, we return `1`.
- If the year of manufacture of car `a` is less than the year of manufacture of car `b`, it means that `a` must come before `b` in the sorted array. Therefore, we return `-1`.
- If the years of manufacture of cars `a` and `b` are the same, the order between them in the sorted matrix does not matter. Therefore, we return `0`.
In short, the returned value (`1`, `-1` or `0`) determines whether object `a` should be moved to a position in front of `b`, moved to a position behind `b` or remain in the same position, respectively. This is the logic underlying the comparison function used in the `sort()` method to sort the array elements.
*/
let skills = [
    {brand: "ruby", hours:100},
    {brand: "js", hours:120}
];
skills.sort((a,b)=>{
    return b.hours - a.hours;
});
//here we have a comparision function, we are classifying based on the number of hours
//to sort in descending order (from largast to smallest), we sobtract B-A, if B>A = +number, which will couse B to be before A, however if B<A = -number, making let A be before B, if they are A=B , the order doesnt matter
console.log(skills);//view js first, bc have more hours 120

let option = [
    {brand: "java", hours: 40},
    {brand: "c#", hours: 70}
];
option.sort((a,b) => b.hours - a.hours);
console.log(option); //same as the previus one, the code is just cleaner, but the order will also be descending from highest to lowest, in this case c# will be at the top because it has more hours.

let fruits = ["banna","laranja","maca","pera"];
let bigfruits = fruits.filter((value)=> {
    if(value.length > 4) {
        return true;
    } else {
        return false;
    }
}); // .filter is an array that makes only the elements taht pass the specific test through a function, value and a callback function, passed to the filter method, this value represents each element of the array, and the test it would be that each value has a number of letters and must be greater than 4, otherwise it returns false and not displayed.
console.log(bigfruits);

let office = ["paper","scan","keyboard","cell"];
let all = office.filter ((item)=> {
    return item.length > 4
});
console.log(all);// this is similar to the orevius one, i just cleaner the code, putting the details aand which could be any name in the parameter, in this case i chose "item"

let meal = ["breakfast","lunch","dinner","snack"];
let food = meal.every((value)=> {
    if(value.length > 3) {
        return true;
    } else {
        return false;
    }
});
console.log(food);//the idea of callback is the same, the difference is every. makes sura that they all have to be within the created function, that is, if all items are greater than 3 letters, it returns true, otherwise false

let feed = ["breakfast","lunch","dinner","snack"];
let eat = feed.every((value)=> value.length > 5);
if(eat) {
    console.log("all are bigger than 5");
} else {
    console.log("not at all bigger than 5");
}; //the callback logic is the same but the difference is that i create a console , bc we already know that it will return a true or false, so i already defined my consoles for both

let stuffs = ["rice","beans","meat","bread"];
let recipe = stuffs.some((value) => {
    if(value.length > 6) {
        return true;
    } else {
        return false;
    }
});
if(recipe) {
    console.log("someone is bigger than 6")
} else {
    console.log("noone is bigger than 6")
}
console.log(recipe);// this element means that at least one element satisfies the fiven condition, in the case if each of them is greater than 6 letters, its enough for one element to be greater than 6 to return true, otherwise it returns false
if(stuffs.includes("grape")) {
    console.log("you already have this item on the list")
} else {
    console.log("you do not have this item on the list");
};//here we have .includes, who verified if grape is already in the stuffs, in this case do not in, telling us "do not have..."
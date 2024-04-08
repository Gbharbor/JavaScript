for (let n = 0; n < 10; n++) {
    console.log("repeat" + n);}
    //here i can put console log inside the loop for, also we have here an detail rlly important when we put in value 10, he count 0 like one of them , for exemplo gonna end in 9 for exemplo, 0,1...9.

let items = ["item1","item2","item3"];// here we just have an array created , super ez, with 3 items created
items.push("item4");// here we just create a new item inside the let items (array) with name "item4"
for (let n= 0; n < 10; n++) { // here we just gonna print numbers until values 4, bc we dont have more values until 10, thats why gonna printed 6 undefined.
    console.log(items[n]);} 
for (let n=0; n<3; n++) {
    console.log(items[n]);} //if we want , we can put more loops with the same variable, items in this exemplo, its the same thing but here we just using until 3, it means printed just item1, 2, 3.
for (let n = 0; n < items.length; n++) {
    console.log(items[n]);} //here we can show just what we put inside the array, in this case only items 1 until 4, of course, its more ez to especific them, better than show 6 undefined.
for (let i in items) {
    console.log(items[i]);} //its the same, but here is more "clean code", just gonna printed the values defined.

let colors = [
    {name:"red", qt: "ten"},
    {name:"blue", qt: "twenty"}
];
for (let types of colors) {
    console.log(`Name: ${types.name} ${types.qt}`);
} //We are using loops here; we're simply printing what was just created. If you want, you can use any variable name you prefer instead of `types`. For example, you can use `color` instead of `types`. No problem!
for (let i in colors) {
    colors[i].name = colors[i].name.toUpperCase();
    colors[i].qt = colors[i].qt.toUpperCase();
    console.log(colors[i].qt);
    console.log(colors[i].name);
} /* Here, we can use the same `colors` variable that we created before, but we're creating a new variable to iterate over the `colors` array in a new loop.
Diference beetween "FOR..IN" and "FOR...OF"
In summary, for...in loop is primarily used for iterating over object properties, while for...of loop is used for iterating over iterable objects like arrays. In most cases, when you're working with arrays, for...of loop is preferred as it provides a simpler and more intuitive syntax.
*/
for (let n=0; n < colors.length; n++) {
    colors[n].qt = colors[n].qt.toLowerCase();
    colors[n].name = colors[n].name.toLowerCase();
    console.log(`${colors[n].qt} ${colors[n].name}`)
}

let number = 1; //be careful with while(true)
while(number <= 50) {
    console.log(`numbers: ${number}`)
    number++;
}
//Exemple with while, while loops are more flexible and can be used when you are not sure how many times u need to iterate. For loops are more structered and often used when you know the exact number of iterations u need. If you want other options, you can use -- or +=; they will work in the same way.
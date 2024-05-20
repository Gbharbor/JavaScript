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
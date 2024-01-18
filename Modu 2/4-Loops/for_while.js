for (let n = 0; n < 10; n++) {
    console.log("repeat" + n);}
let items = ["item1","item2","item3"]; items.push("item4");
for (let n=0; n < 10; n++) {
    console.log(items[n]);} 
for (let n=0; n<3; n++) {
    console.log(items[n]);}
for (let n = 0; n < items.length; n++) {
    console.log(items[n]);}
for (let i in items) {
    console.log(items[i]);}
let colors = [{name:"red", qt: "ten"},
              {name:"blue", qt: "twenty"}];
for (let types of colors) {
    console.log(`Name: ${types.name} ${types.qt}`);}
for (let i in colors) {
    colors[i].name = colors[i].name.toUpperCase();
    colors[i].qt = colors[i].qt.toUpperCase();
    console.log(colors[i].qt);
    console.log(colors[i].name);}
for (let n=0; n < colors.length; n++) {
    colors[n].qt = colors[n].qt.toLowerCase();
    colors[n].name = colors[n].name.toLowerCase();
    console.log(`${colors[n].qt} ${colors[n].name}`)}

let number = 1; //be careful with while(true)
while(number <= 100) {
    console.log(`numbers: ${number}`)
    number++;
}
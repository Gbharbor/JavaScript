
//          |SELECTING ELEMENTS I|
//Put this in the Console, and you will see all "h1" tags, but it could be id, class, combinations, etc.
document.getElementsByTagName("h1");

//If you want, you can put this entire document in a variable.
let elementos = document.getElementsByTagName("h1");

//This way, you just enter the name of the variable in the console, and the "h1" will appear: and if you prefer, you can specify, using array logic, if you have more than one h1.
elementos;
elementos[1];

//          |SELECTING ELEMENTS II|
//To select a div with an id, you could use the previous method, but the best option would be by the name of the div's ID itself, note that "element" is in the singular, as ID is to define only one.
document.getElementById("teste");

//To select a CLASS in this case, "elements" is plural, an important tip whenever it is plural, it returns an array.
document.getElementsByClassName("botao0");

//However, we can select it more easily, following the CSS logic when defining it.
document.querySelector("#teste");
document.querySelector(".botao0");
document.querySelector("h1");

//If you prefer to select within the "levels", we supposedly create a "div" with "ul" with a "li", and I want to select the "li". In this case, you will always select the first "li" you find.
document.querySelector("li");

//However, I supposedly have more than one "li" and I want to display them all.
document.querySelectorAll("li");

//However, if I have another "div" with "ul" and "li", this way we will have the same layers in CSS.
document.querySelectorAll("#teste2 ul li");

//          |CLICK EVENTS|
//There are two click events, Press Down and Up, that is, two ways to edit the event.
//First, creating a function in the HTML itself with "onclick": <button class="botao0" onclick="clicou0()">botao0</button>
function clicou0() {
    console.log("clicou botao0");
}
//Now inside JS, using "addEventListener".
function clicou1() {
    console.log("clicou botao1");
}
let botao1 = document.querySelector(".botao1");
 botao1.addEventListener("click", clicou1);

//However, you can create the function inside addEventListener:
 let botao2 = document.querySelector(".botao2");
 botao2.addEventListener("click",function clicou2(){
    console.log("clicou botao2");
 });
/*However, bc it's a function, u can compress it using arrow function, but be aware that I haven't defined the name of this function, so it's an anonymous function. It works because it's an event, but it's always important to define functions. One way, if you want, is to create a variable and store this function, changing it in the event to the name you created in the variable, in case you want to use the function again in the future.
                  Exemplo:
    let botao3 = document.querySelector("#botao3");
    const = savedfunction = () => {
      console.log("clicou botao3")
    };
    botao3.addEventListener("click", savedfunction)
*/
//To organize, here is an anonymous function.
 let botao3 = document.querySelector("#botao3");
 botao3.addEventListener("click",()=> {
    console.log("clicou botao3")
 });

//Here I'm just playing the function inside addEventListener, but I have to have it already created.
function clicou4(){
    console.log("clicou botao4")
}
 let botao4 = document.getElementById("botao4");
 botao4.addEventListener("click",function(){
    clicou4();
 });

//Then, a class is being used here, so I need to specify the value of the class, as it is an array, in the example I use [1] because I want the second value.
 document.getElementsByClassName("botao5")[1].addEventListener("click",function clicou5(){
    console.log("clicou botao5");
 })

//This way I can visualize it in the same way when I do it directly through the Console, and it's just a way of demonstrating what I could do here, if I wanted, the difference is that I need to create a variable to define the "Selection".
let list0 = document.querySelectorAll("#teste2 ul li");
    console.log(list0);//All them
    console.log(list0[0]);//first item 
let list1 = document.querySelector("li");
    console.log(list1);//item1
let list2 = document.querySelectorAll("li");
    console.log(list2[3])//item4
let elements = document.getElementsByTagName("h1")
    console.log(elements[0]);//HW!
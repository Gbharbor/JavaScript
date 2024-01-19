function clicou0() {
    console.log("clicou botao0");
}
function clicou1() {
    console.log("clicou botao1");
}
 let botao1 = document.querySelector(".botao1");
 botao1.addEventListener("click", clicou1);

 let botao2 = document.querySelector(".botao2");
 botao2.addEventListener("click",function clicou2(){
    console.log("clicou botao2");
 })
function clicou3(){
    console.log("clicou botao3")
}
 let botao3 = document.querySelector("#botao3");
 botao3.addEventListener("click",()=> {
    clicou3();
 });
 function clicou4(){
    console.log("clicou botao4")
}
 let botao4 = document.getElementById("botao4");
 botao4.addEventListener("click",function(){
    clicou4();
 });

 document.getElementsByClassName("botao5")[0].addEventListener("click",function clicou5(){
    console.log("clicou botao5");
 })

let list0 = document.querySelectorAll("#teste2 ul li");
    console.log(list0);
    console.log(list0[0]);
let list1 = document.querySelector("li");
    console.log(list1);//item1
let list2 = document.querySelectorAll("li");
    console.log(list2[3])//item4
let elements = document.getElementsByTagName("h1")
    console.log(elements[0]);//HW!
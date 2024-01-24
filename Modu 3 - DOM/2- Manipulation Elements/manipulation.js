function clicou0() {
    const teste0 = document.querySelector("#teste0");
    console.log(teste0);
    console.log(teste0.children);
    console.log(teste0.children[1].children);
    const ul = teste0.querySelector("ul");
    ul.children[1].innerHTML = "item <strong>changed</strong>";
    ul.children[0].innerText = "item <strong>changed</strong>";
    ul.children[2].append(" alterado");
    console.log(ul.outerHTML);
};

let botao1 = document.querySelector(".botao1");
botao1.addEventListener("click",function clicou1(){
    console.log("clicou botao1");
    const teste1 = document.querySelector("#teste1");
    const ul = teste1.querySelector("ul");
    console.log(ul.innerHTML);
    ul.innerHTML = "<li>item changed</li>";
    ul.innerHTML += "<li>item add</li>";
    ul.innerHTML = ul.innerHTML + "<li>item add2</li>";
});

let botao2 = document.querySelector(".botao2");
botao2.addEventListener("click", function clicou2(){
    console.log("clicou botao2");
    const teste2 = document.querySelector("#teste3");
    const ul = teste2.querySelector("ul");
    ul.outerHTML = "Element completly changed";
});

let botao3 = document.querySelector("#botao3");
botao3.addEventListener("click",function clicou3(){
    console.log("clicou botao3");
    const teste3 = document.querySelector("#teste3");
    const ul = teste3.querySelector("ul");
    let newli = document.createElement("li");
    newli.innerText = "li add for innerText";
    ul.appendChild(newli);
});

let botao4 = document.querySelector("#botao4");
botao4.addEventListener("click", function clicou4(){
    console.log("clicou botao4");
    const teste4 = document.querySelector("#teste4");
    const ul = teste4.querySelector("ul");
    let newul = document.createElement("ul");
    newul.innerHTML = "ul add for innerHTML"
    ul.prepend(newul);
    ul.before("text before");
    ul.after("text after");
});

let botao5 = document.querySelector(".botao5");
botao5.addEventListener("click", function clicou5(){
    console.log("clicou botao5");
    const teste5 = document.querySelector("#teste5");
    const ul = teste5.querySelector("ul");
    let newUL = document.createElement("ul");
    for (let i = 0; i < 5; i++) {
        let newLI = document.createElement("li");
        newLI.innerHTML = "item add " + (i + 1); 
        newUL.append(newLI);
    }
    ul.after(newUL);
    const newbutton = document.createElement("button");
    newbutton.innerHTML = "botao";
    ul.before(newbutton);
});
/*let newUL = document.createElement("ul");
  let newLI = document.createElement("li");
    newLI.innerHTML = "LI created";
    newUL.appendChild(newLI);
        ul.after(newUL); */
function clicou6() {
    const input = document.querySelector("input");
    const botao = document.querySelector(".botao6");
    if(input.getAttribute("type") === "text") {
        input.setAttribute("type", "password");
        botao.innerHTML = "Mostrar Senha";
    } else {
        input.setAttribute("type", "text");
        botao.innerHTML = "Ocultar Senha";
    }
}
function clicou7() {
    const input = document.querySelector(".input1");
    console.log(input.getAttribute("placeholder"));
    if (input.hasAttribute("placeholder")) {
        console.log("it has placeholder");
    } else {
        console.log("it has not placeholder");
    }
    input.setAttribute("placeholder", "no click here");
}
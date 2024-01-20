function clicou0() {
    const teste = document.querySelector("#teste");
    console.log(teste);
    console.log(teste.children);
    console.log(teste.children[1].children);
    const ul = teste.querySelector("ul");
    ul.children[1].innerHTML = "item <strong>changed</strong>";
    ul.children[0].innerText = "item <strong>changed</strong>";
    console.log(ul.outerHTML);
};

let botao1 = document.querySelector(".botao1");
botao1.addEventListener("click",function clicou1(){
    console.log("clicou botao1");
    const teste2 = document.querySelector("#teste2");
    const ul = teste2.querySelector("ul");
    console.log(ul.innerHTML);
    ul.innerHTML = "<li>item changed</li>";
    ul.innerHTML += "<li>item add</li>";
    ul.innerHTML = ul.innerHTML + "<li>item add2</li>";
});

let botao2 = document.querySelector(".botao2");
botao2.addEventListener("click", function clicou2(){
    console.log("clicou botao2");
    const teste3 = document.querySelector("#teste3");
    const ul = teste3.querySelector("ul");
    ul.outerHTML = "Element completly changed";
});

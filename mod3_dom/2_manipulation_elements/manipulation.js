//          |MANIPULATION ELEMENTS I e II|
//Entao sempre que quisermos manipular um elemento, primeiro selecionamos ele, e depois manipulamos ele, aqui escolhemos a div "#teste0".
function clicou0() { //lembre se que aqui estou usando a funcao onclick no HTML.
    const teste0 = document.querySelector("#teste0");
    console.log(teste0);//Aqui visualizo apenas a div teste completa.
    console.log(teste0.children); //Aqui conseguimos ver o array dos filhos imediatos da "div", que nesse exemplo e um "ul" e um "h6".
    console.log(teste0.children[1].children);//Segue a logica dos array, para visualizar o que tem dentro do segundo value[1] "ul", lembre se que "h6" é [0].Adicionamos o children novamente pego todos itens que tem dentro desse "ul" que é os "li".
    const ul = teste0.querySelector("ul");//Aqui estou buscando o primeiro elemento "ul" dentro do teste0
    ul.children[1].innerHTML = "item <strong>changed</strong>";//Aqui estou selecionando o segundo value, ou elemento filho do "ul" selecionado antes, modificando de "item2" para o texto que defini aqui, repare que usei inner.HTML dessa forma ele le como um codigo e executa o que defini, no caso o "strong".
    ul.children[0].innerText = "item <strong>changed</strong>";//Aqui e igual o anterior a diferenca que seleciono o primeiro value[0] do elemento filho do "ul", e modifico o "item1" para o texto que defini aqui, repare que usei inner.Text dessa forma ele le o texto literalmente, e nao executa como codigo.
    ul.children[2].append(" alterado");//Aqui estou apenas adicionando no terceiro value[2] do "ul" o "item extra" a palavra que defini aqui, anexando o texto para esse value[2],mas repare que estou anexando e nao estou alterando o que esta la, inclusive se essse value[2] tivesse outros elementos dentro dele, tambem iriam ter esse texto anexado ou adicionado. Por uma questao de desempenho por mais que innerText e innerHTML facam funcoes semelhantes, o append sera melhor no quesito desempenho. Outro ponto importante, o append so le textos, se voce tentar colocar um codigo HTML, ele nao ira interepretar, entao para usar de fato um codigo HTML, teria que usar o .appendChild, mas antes criamos o elemento na memoria .createElement("li") e depois add com o appendChild.
    console.log(ul.outerHTML);//O uso desse outerHTML,basicamente visualizo toda "string" do html do "ul" incluindo seus descendentes
    console.log(ul.innerHTML);//Desse modo vejo apenas os "li" dentro do ul.
};
//Repare que aqui nao uso a funcao "onclick" no HTML, pois crio ela aqui  mesmo no evento.
let botao1 = document.querySelector(".botao1");
botao1.addEventListener("click",function clicou1(){
    console.log("clicou botao1");
    const teste1 = document.querySelector("#teste1");
    const ul = teste1.querySelector("ul");
    console.log(ul.innerHTML); //Entando se voce usar, desse modo, voce altera, mas como nao especificou, vai alterar o primeiro li em ul. Porem, se quisesse apenas adicionar, poderia apenas usar o +=, ou contatenar.
    ul.innerHTML = "<li>item changed</li>";
    ul.innerHTML += "<li>item add</li>";
    ul.innerHTML = ul.innerHTML + "<li>item add2</li>";
});
//Aqui tambem uso a funcao no proprio evento
let botao2 = document.querySelector(".botao2");
botao2.addEventListener("click", function clicou2(){
    console.log("clicou botao2");
    const teste2 = document.querySelector("#teste3");
    const ul = teste2.querySelector("ul");
    ul.outerHTML = "Element completly changed";//Porem,outra forma poderia alterar, mas nao e muito usado pois e muito raro alguem alterar um elemento completo no caso do "ul" inteiro: 
});
let botao3 = document.querySelector("#botao3");
botao3.addEventListener("click",function clicou3(){
    console.log("clicou botao3");
    const teste3 = document.querySelector("#teste3");
    const ul = teste3.querySelector("ul");
    let newli = document.createElement("li");//Criei um novo elemento
    newli.innerText = "li add for innerText";
    ul.appendChild(newli);//Aplico o novo elemento com o texto que defini em innerText,lembre se que que para usar de fato um codigo HTML, tenho que usar o .appendChild, mas antes criamos o elemento na memoria .createElement("li") usando a variavel let nreli e depois add com o appendChild.
});
//          |MANIPULATION ELEMENTS III|
let botao4 = document.querySelector("#botao4");
botao4.addEventListener("click", function clicou4(){
    console.log("clicou botao4");
    const teste4 = document.querySelector("#teste4");
    const ul = teste4.querySelector("ul");
    let newul = document.createElement("ul");
    newul.innerHTML = "ul add for innerHTML"
    ul.prepend(newul);//Insercao do novo elemento 'ul' antes dos ja existentes dentro de 'ul', reusmingo criei um <ul> antes de todos valores dentro do ul.
    ul.before("text before");//Aqui insiro um texto antes do do elemento ul dentro da div teste4
    ul.after("text after");//Serve o mesmo aqui, porem e depois do "ul" elemento.
});

let botao5 = document.querySelector(".botao5");
botao5.addEventListener("click", function clicou5(){
    console.log("clicou botao5");
    const teste5 = document.querySelector("#teste5");
    let firstul = document.createElement("ul");
    firstul.innerHTML = "<li>LI criado por DOM</li>"
    teste5.append(firstul);
    let newUL = document.createElement("ul");
    for (let i = 0; i < 5; i++) {//dessa forma crio um loop para mostrar quantos li, no caso aqui 5 li
        let newLI = document.createElement("li");
        newLI.innerHTML = "item add " + (i + 1); //to exibindo o loop for que criei, em uma lista de 0 a 5, nesse caso coloco i +1 para ficar mais "humano" e comecar a contagem, por 1
        newUL.append(newLI);
    }
    teste5.after(newUL);
    const newbutton = document.createElement("button");
    newbutton.innerHTML = "botao criado";
    teste5.before(newbutton);
});
/*
    newLI.innerHTML = "LI created";
    newUL.appendChild(newLI);
        ul.after(newUL); */
function clicou6() {
    const input = document.querySelector("input");//essa linha seleciona o primeiro elemento input encontrado, e armazena na variavel input.
    const botao = document.querySelector(".botao6");//o mesmo serve aqui em relacao a de cima.
    //Aqui crio um if else, para ver se o valor do atributo "type" do input e um text, se for acontece o comando no if, e se nao for text ocorre o comando do else.
    if(input.getAttribute("type") === "text") {
        input.setAttribute("type", "password");//Entao se for text, o atributo do input, ele altera para type password, desse modo faz com que seja exibido como uma senha.
        botao.innerHTML = "Mostrar Senha";//Devido a isso, ao clicar mostrar senha, ele altera para "ocultar senha" ja o botao ficara escrito mostrar a senha, ja que estara em asteriscos ja que mudei para password.
    } else {
        input.setAttribute("type", "text");//Aqui e o inverso, mudando de password para text,e invertando para "mostrar senha",porem o botao tera o ocultar senha, ja que o texto estara sendo exibido.
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

function clicou8() {
    const teste6 = document.querySelector("#teste6");
    const firstLI = teste6.querySelector("li:first-child");// aqui seleciono o primeiro elemento li, que e filho direto do elemento teste6 e armazone na variavel firstLI.
    console.log(firstLI);
    firstLI.style.backgroundColor = "#00F";//em resumo aqui so modifiquei o stylequando ocorre o click, ja deixei no html em vermelho para podermos ver a diferenca quando ocorrer o click.
    firstLI.style.fontSize = "25px";
    firstLI.style.color = "green";

    const button = document.querySelector(".botao8");
    console.log(button);//dessa forma eu pego a constante button que imprime a classe botao8
    console.log(button.classList);//ja aqui usando o .classList puxa um DOMTokenList no console,que representa as classes do elemento, dessa forma consigo adicionar, remover ou verificar a presenca de classes especificas.

    //Aqui criei um if else, se a newclass0 estiver presente acontece a regra de if, caso nao esteja,  acontece a regra do else. e para fazer o teste para verificar se esta presente no button a class newclass0, usamos o .contains
    if (button.classList.contains("newclass0")) {
        button.classList.replace("newclass0","newclass1");//entao como dito, se estiver presente ira substituir por newclass1, usando o .replace
    } else {
        button.classList.replace("newclass1","newclass0");//ja aqui reverte a situacao, ja que nao terei o newclass0 no regra "if", entao puxara a regra do "else", revertendo a situacao.
    }//Esse codigo em resumo permite alternar entre classes diferente, pode ser util para alternar estilos ou comportamentos ocm base em eventos de click e interacoes do usuario.
}
/*Aqui a baixo temos uma forma mais tradicional de fazer a mesma coisa de forma mais facil e pratica, mas a ideia e a mesma, podemos imaginar um menu lateral como exemplo.

    button.classList.toggle("newclass0");
if (button.classList.contains("newclass0")) {
    button.classList.remove("newclass0");
    button.classList.add("newclass1");
} else {
    button.classList.remove("newclass1");
    button.classList.add("newclass0");
}
*/
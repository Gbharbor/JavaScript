//          |SELECIONANDO ELEMENTOS I|
// Coloque isto no Console, e você verá todas as tags "h1", mas poderia ser id, classe, combinações, etc.
document.getElementsByTagName("h1");

// Se quiser, você pode colocar este documento inteiro em uma variável.
let elementos = document.getElementsByTagName("h1");

// Desta forma, você só precisa digitar o nome da variável no console, e os "h1" aparecerão; caso prefira, pode especificar usando lógica de array, se houver mais de um h1.
elementos;
elementos[1];

//          |SELECIONANDO ELEMENTOS II|
// Para selecionar uma div com um id, você poderia usar o método anterior, mas a melhor opção seria pelo nome do próprio ID da div. 
// Note que "element" está no singular, pois o ID é único.
document.getElementById("teste");

// Para selecionar uma CLASSE, "elements" está no plural, porque sempre retorna um array.
document.getElementsByClassName("botao0");

// No entanto, podemos selecionar de forma mais fácil, seguindo a lógica do CSS.
document.querySelector("#teste");
document.querySelector(".botao0");
document.querySelector("h1");

// Se preferir selecionar dentro de "níveis", como uma "div" com "ul" e "li", isso selecionará o primeiro "li" encontrado.
document.querySelector("li");

// Mas, se tiver mais de um "li" e quiser exibir todos.
document.querySelectorAll("li");

// Caso tenha outra "div" com "ul" e "li", isso permitirá a seleção com a mesma hierarquia do CSS.
document.querySelectorAll("#teste2 ul li");

//          |EVENTOS DE CLIQUE|
// Existem dois eventos de clique: Pressionar para baixo e para cima, ou seja, duas formas de editar o evento.
// Primeiro, criando uma função no HTML com "onclick": <button class="botao0" onclick="clicou0()">botao0</button>
function clicou0() {
    console.log("clicou botao0");
}

// Agora dentro do JS, usando "addEventListener".
function clicou1() {
    console.log("clicou botao1");
}
let botao1 = document.querySelector(".botao1");
botao1.addEventListener("click", clicou1);

// Também é possível criar a função dentro do addEventListener.
let botao2 = document.querySelector(".botao2");
botao2.addEventListener("click", function clicou2() {
    console.log("clicou botao2");
});

/* Por ser uma função, é possível usar arrow functions para simplificar, mas note que neste caso a função é anônima (sem nome).
   Para reutilizar a função, podemos armazená-la em uma variável e referenciá-la.
   Exemplo:
    let botao3 = document.querySelector("#botao3");
    const savedFunction = () => {
        console.log("clicou botao3");
    };
    botao3.addEventListener("click", savedFunction);
*/

// Organizando, aqui está uma função anônima.
let botao3 = document.querySelector("#botao3");
botao3.addEventListener("click", () => {
    console.log("clicou botao3");
});

// Aqui, estou chamando uma função já existente dentro do addEventListener.
function clicou4() {
    console.log("clicou botao4");
}
let botao4 = document.getElementById("botao4");
botao4.addEventListener("click", function() {
    clicou4();
});

// Neste exemplo, usando uma classe, preciso especificar o valor da classe no array; uso [1] para pegar o segundo valor.
document.getElementsByClassName("botao5")[1].addEventListener("click", function clicou5() {
    console.log("clicou botao5");
});

// Esta é uma forma de visualização semelhante ao Console; criando variáveis para a "seleção" dos elementos.
let list0 = document.querySelectorAll("#teste2 ul li");
console.log(list0);       // Exibe todos os itens
console.log(list0[0]);    // Exibe o primeiro item

let list1 = document.querySelector("li");
console.log(list1);       // Exibe o primeiro item

let list2 = document.querySelectorAll("li");
console.log(list2[3]);    // Exibe o quarto item

let elements = document.getElementsByTagName("h1");
console.log(elements[0]); // Exibe o primeiro h1 ("Hello World")
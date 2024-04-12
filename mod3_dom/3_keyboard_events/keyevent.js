// Entao, aqui estou demonstrando as funcoes que apliquei de modo semelhante ao onlick no meu HTML: 
    //<input type="text" placeholder="type here" onkeydown="apertou()" onkeypress="segurou()" onkeyup="soltou()"/>
function apertou () {
    console.log("apertou") 
}
function segurou () {
    console.log("segurou")
}
function soltou () {
    console.log("soltou document")
}
//Aqui, sigo a mesma logica, tirando o "on" mas o funcionamento e o mesmo, a diferenca que precisa adicionar o addEventListener, 8s0 a chave q quero de fato que poderia ser keyup,keydown ou keypress, e em seguida puxo a funcao que criei que vai imprimir a frase que criei.
function soltoujs () {
    console.log("soultou pelo js");
}
document.addEventListener("keyup", soltoujs);

function up (event) {
    console.log("tecla pressionada: " +event.code);//qual teclas foram pressionadas.
    console.log("shift? " +event.shiftKey);//Isso traz um boolean se pressionou shift true, se nao false.
    console.log("option? " +event.altKey);//E o mesmo que o de cima, porem e para a tecla Alt ou Options no caso do Mac
    console.log(event.code);//pegara eventos de todas teclas, incluidno shift, cmd, numeros etc.
    console.log(event.key);//Ja aqui, ele e mais simples, digamos que tu aperte Shift, nao ira dizer se foi da esquerda ou direita, devido a isso nao e muito detalhado.
    console.log(event.shiftKey);//Quero saber se a pessoa apertou shift + caracter, e lembrese que esse Key, precisa estar em maiusculo.
}
const input = document.querySelector(".input1");
input.addEventListener("keyup",up);
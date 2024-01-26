function apertou () {
    console.log("apertou")
}
function segurou () {
    console.log("segurou")
}
function soltou () {
    console.log("soltou document")
}
document.addEventListener("keyup", soltou);
function up (event) {
    console.log("tecla pressionada: " +event.code);
    console.log("shift? " +event.shiftKey);
    console.log("option? " +event.altKey);
    console.log(event.code);
    console.log(event.key);
    console.log(event.shiftkey);
}
const input = document.querySelector(".input1");
input.addEventListener("keyup",up);

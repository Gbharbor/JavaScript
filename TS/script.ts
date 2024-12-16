//"" ao somar vira uma string, dessa forma a importancia de usar o typescript,porem uma das formas seria usar uma verificacao usando o typeof dentro da funcao
let numero1 = document.getElementById('numero1') as HTMLInputElement; //add esse as html, some alguns erros, pq faz ele se comportar como um input do html
let numero2 = document.getElementById('numero2') as HTMLInputElement;
let botao = document.getElementById('calcular') as HTMLInputElement;
let res = document.getElementById('resultado') as HTMLInputElement ;

function calcular (n1, n2) {
    if(typeof n1 =='number' && typeof n2 =='number') {
        return n1 + n2;
    } else {
        n1 = parseInt(n1); //transformo n1 em numero
        n2 = parseInt(n2);
        return n1 + n2;
    }
}

botao.addEventListener('click', function() {
    res.innerHTML = calcular (numero1.value, numero2.value);
});
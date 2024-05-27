//O timeout so roda uma vez q vc determinar o tempo, ja o interval atualiza permanente.
let timer;
function rodar() {
    timer = setTimeout(function() { //colocar o timer aqui preenchendo ele
    //alert('rodou'); vms usar outro exemplo.
    document.querySelector('.demo').innerHTML = "rodou"

    }, 2000); //poe a funcao, e dps o tempo. nesse exemplo executei a funcao a cada 2s, repare q coloquei a function rodar onclick aqui, e joguei o setimeout dentro dela, ou seja quando clicar no botao em 2s aparece o alert.
};
//antes de chegar ao fim da execucao vc pode parar ele.
function parar() {
    clearTimeout(timer);//mas vc precisa mandar uma variavel aqui, ou seja tera q cria la, vou chamar de timer, pronto criei la em cima joguei na function rodar e agr posso usar aqui.
};
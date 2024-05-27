//Intervalos ou timers, basicamente criar timers, configurar um codigo para rodar de tanto em tanto tempo.
//irei criar uma funcao q ira mostrar a hora atual,minuto e segundo na tela.
// Declaração da variável timer no escopo global
let timer;

// Função para exibir a hora atual
function showTime() {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    // Formatando os minutos e segundos para ter dois dígitos
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;

    // Juntando tudo em um texto
    let txt = h + ':' + m + ':' + s;
    document.querySelector('.demo').innerHTML = txt;
}

// Função para iniciar o timer
function comecar() {
    timer = setInterval(showTime, 1000);//1000 milissegundos equivale a 1s
}

// Função para parar o timer
function parar() {
    clearInterval(timer);
}

// Iniciar a exibição do tempo imediatamente
showTime();

// Opcionalmente, você pode iniciar o timer automaticamente
// comecar();
//Setinterval vai executar de tanto em tanto tempo, agr vms usar o settimeout, n precisa parar o timeout.
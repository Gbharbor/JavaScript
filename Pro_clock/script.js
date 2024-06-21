let digitalElement = document.querySelector('.digital');
let sElement = document.querySelector('.p_s');
let mElement = document.querySelector('.p_m');
let hElement = document.querySelector('.p_h');

//precisamos criar um timer q de 1 em 1 segundo ele rode uma funcao que pega a hora atual e atualiza e posiciona os ponteiros.

function updateClock() {
    let now = new Date(); //hora atual, q inclui todas informacoes de data
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    //primeiro vamos fazer o digital.
    /* 
    digitalElement.innerHTML = `${hour}:${minute}:${second}`
    -> repare q se o valor for menor q 10, ele n cria o zero antes, para ficar de forma mais original a um relogio digital, entao vamos corrigir isso.
    */
   digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`
   //agr vms comecar a criar o relogio analagico.

   let sDeg = (360/60) * second - 90;
   let mDeg = (360/60) * minute - 90;
   let hDeg = (360/12) * hour - 90;
   sElement.style.transform = `rotate(${sDeg}deg)`;
   mElement.style.transform = `rotate(${mDeg}deg)`;
   hElement.style.transform = `rotate(${hDeg}deg)`;
};
    /*para corrigir isso vms criar uma funcao para que obedeca a regra caso time seja menor que 10, essa e a forma usando o if, mas posso simplificar ela 
                function fixZero(time) {
                    if (time < 10) {
                        return '0'+time;
                    } else {
                        return time;
                    }
                };
    */
function fixZero(time) {
    return time < 10 ? `0${time}`:time;
}

//intervalo infinito 
setInterval(updateClock, 1000); //rodo a atualizacao do relogio dentro do intervalo infinito em um tempo de 1000milissegundos q equivale a 1segundo
updateClock();//dessa forma ele att automaticamente, sem a espera do carregamento
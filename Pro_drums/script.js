//no document body eu represento td o site.
document.body.addEventListener('keyup',(event)=>{
    //console.log(event.code); //isso diz qual tecla q foi pressionada
    playSound(event.code.toLowerCase()); //vou transformar em minusculo
});

document.querySelector('.composer button').addEventListener('click',()=> {
    let song = document.querySelector('#input').value; //esse value pega oq foi digitado de fato
    //console.log("musica: ", song); // aqui e so para testar se ta aparecendo no console. atencao q !== significa diferente
    if(song !== ' ') {
        let songArray = song.split(''); // dessa forma crio espaco entre os itens digitados em song,e criando um array tmb
        //console.log(songArray);//aqui conseguimos visualizar o array criado
        playComposition(songArray);
    }
});

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key='${sound}']`);
    if (audioElement) {
        audioElement.currentTime = 0; // dessa forma ele reseta o audio, e n espera acabar, dessa forma n da o bug
        audioElement.play(); //repare q na tecla S, ele da um bug por causa do tempo do audio ser maior, para isso precisamos corrigir usando o currentTime
    }
    if(keyElement) {
        keyElement.classList.add('active'); //fazendo isso mudara para amarelo, porem preciso q suma dps q eu  ja cliquei uma vez, entao para corrigir isso, usarei o o setTimeout
        setTimeout(()=>{
            keyElement.classList.remove('active');
        }, 300);
    }
};
function playComposition(songArray) {
    let wait = 0;

    for(let songItem of songArray) {
        setTimeout(()=>{
            playSound(`key${songItem}`); //so so deixar assim, ele vai tocar tds letras q tu criou na composicao, para isso precisamos criar um intervalo dentro do loop
        }, wait)
        wait += 250;
    }
};
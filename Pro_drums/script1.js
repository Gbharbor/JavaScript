// Adiciona um evento ao document body para ouvir quando qualquer tecla é liberada
document.body.addEventListener('keyup', (event) => {
    // Converte o código da tecla para minúsculo e passa para a função playSound
    playSound(event.code.toLowerCase());
});

// Adiciona um evento ao botão de composição, que toca uma sequência de sons
document.querySelector('.composer button').addEventListener('click', () => {
    // Obtém o valor do input do usuário
    let song = document.querySelector('#input').value;
    
    // Verifica se o input não está vazio
    if (song.trim() !== ' ') {
        // Transforma a sequência de caracteres em um array
        let songArray = song.split('');
        
        // Chama a função para tocar a composição
        playComposition(songArray);
    }
});

// Função que toca o som e adiciona a animação de tecla pressionada
function playSound(sound) {
    // Seleciona o elemento de áudio com o ID baseado no código da tecla
    let audioElement = document.querySelector(`#s_${sound}`);
    
    // Seleciona o elemento visual da tecla pressionada
    let keyElement = document.querySelector(`div[data-key='${sound}']`);
    
    // Se o áudio correspondente for encontrado
    if (audioElement) {
        audioElement.currentTime = 0; // Reseta o áudio para o início
        audioElement.play(); // Toca o som
    }

    // Se o elemento da tecla correspondente for encontrado
    if (keyElement) {
        // Adiciona a classe 'active' para criar o efeito visual de pressionamento
        keyElement.classList.add('active');
        
        // Remove a classe 'active' após 300ms, para simular o retorno à cor original
        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 300);
    }
}

// Função que toca uma composição de sons (sequência de teclas)
function playComposition(songArray) {
    let wait = 0; // Tempo de espera entre cada som (começa em 0)
    
    // Para cada item na sequência de caracteres (teclas) inseridos
    for (let songItem of songArray) {
        // Define um temporizador para tocar cada som após um intervalo
        setTimeout(() => {
            playSound(`key${songItem}`); // Chama a função playSound para cada som
        }, wait);

        // Incrementa o tempo de espera para que os sons não toquem ao mesmo tempo
        wait += 250; // 250ms de intervalo entre cada som
    }
};
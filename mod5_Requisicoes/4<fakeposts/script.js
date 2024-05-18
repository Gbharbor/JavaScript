// entaoo post q sera enviado n vai ir por ser uma API fake, mas a ideia e a msm como se fosse um post de fato, se comporta como um post. 
//https://jsonplaceholder.typicode.com/posts'

// vms precisar de 2 etapas, primeiro precisamos de uma funcao para ler os posts, segunda etapa sera o processo de add um post novo.

// vms agr entao criar uma funcao para ler os posts.
// vms colocar um nome carregando dentro da div posts.
async function readPosts() {
    let postArea = document.querySelector('.posts');
    postArea.innerHTML = 'Carregando...'
    //agr faremos a nossa requisicao de fato
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();
    //vms so verificicar se venho algum
    if(json.length > 0) {
        postArea.innerHTML = ' ';
        for (let i in json) {
            let postHtml = `<div><h1>${json[i].title}</h1>${json[i].body}</hr></div>`
            postArea.innerHTML += postHtml; //quando usa inner HTML, ele remove td da memoria e readiciona novamente, isso nao e bom, mas nesse momento isso e o mais simples para entender, mas n e a forma mais otimizada, teriamos q add via append.
    }
    } else {
        postArea.innerHTML = 'Nenhum post para exibir.'
    }
}
//agr vms fazer funcionar de fato como inserir o post novo.
// ou seja quando clicar no botao, ele gera uma acao nos input titulo e textarea.
async function addNewPost(title, body) {
    //agr faremos a requisicao com a msm URL, e dps alteramos os dados, e dps de fazer limpamos o cmapo e recarregamos os post, para recarregar podemos so chamar readPosts.
    //como n preciso do fetch de fato, n preciso armazenar ele em uma variavel.
    await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                body,
                userId: 2
            })
        }
    );
    //agr vms limpar os campos title e body fields.
    document.querySelector('#titleField').value = '';
    document.querySelector('#bodyField').value = '';
        // e agr vms recarregar, so executando a funcao de novo
    readPosts();
}

document.querySelector('#insertButton').addEventListener("click", () => {
    let title = document.querySelector('#titleField').value;
    let body = document.querySelector('#bodyField').value;

    if (title && body) {
        addNewPost(title,body) // vms chamar a funcao newpost , e la em cima criamos ela.
    } else {
        alert ('Preencha tds campos');
    }
});
readPosts(); 
// E td o processo consegue ver nas requisicoes em Network, e no caso do post novo, nesse exemplo em especifico, conseguira ver em Network > payload
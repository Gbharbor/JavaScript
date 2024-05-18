//https://jsonplaceholder.typicode.com/posts
//Se reparar quando for em Network e clicar em header, o metodo de requisicao Request Method: GET, pois esse e o padrao.
//GET, POST, PUT, DELETE sao os principais metodos de Request Method.
//get -> "estou atras de pegar informacoes"
//POST -> "quero enviar ou inserir alguma coisa"
//PUT -> "quando queremos alterar algo q ja existe"
//DELETE -> "deletar algo"

function clicou() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        alert(`titulo do primeiro post: ${json[0].title}`)
    })
    .catch(() => {
        alert("Deu problema na requisicao");
    })
}
document.querySelector('#botao').addEventListener('click', clicou);

//Vamos fazer uma requisicao usando o POST, iremos usar a mesma url anterior, para ler os post e tmb pra inserir sera a msm, so mudara o method.
//vms criar um object e dentro dos itens do object vms alterar alguns itens, como o method, e o headers. Mas lembre, o JSON parece mt um objeto, mas nao e !
function inserir () {
    fetch('https://jsonplaceholder.typicode.com/posts',
        {
        method: 'POST',
        headers:
            { 
            'content-type': 'application/json' //o body q vou mandar pra alterar minha requisicao, e application json, ou seja vou criar um json e mandar as requisicoes desse formato, pro servidor poder interpretar oq irei mandar.
            },
        //agr em body, irei criar um funcao q vai transformar um objeto para traduzir em jSON
        body: JSON.stringify ({
                title: 'titulo de teste',
                body: 'corpo de teste',
                userId: 2 //Autor, o id e criado dps q o post e inserido
            })
        })
        .then((response) => {
            return response.json();
        })
        .then((json)=> {
            console.log(json);
        });
}
//esta criado, ao abrir o network e clicar em payload ira ver o modo q enviei a requisicao, q no caso esta em formato JSON, e o status sera 201, q significa q foi criado com sucesso a requisicao.
//oq ele faz de fato, devolve os dados q mandei e um ID 

document.querySelector('#inserir').addEventListener('click', inserir)
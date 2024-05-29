/*
Diferença entre Síncrono e Assíncrono
Síncrono:
A ordem de execução é sequencial, ou seja, uma coisa espera pela outra. As operações seguem de forma síncrona, executando uma linha de código após a outra.
    let nome = "gui";
    let sobrenome = "lacerta";
    let nomeCompleto = nome + sobrenome;

Assíncrona
Pode-se supor que elas executariam tudo ao mesmo tempo e não uma por uma. Essa é a ideia: é como se elas executassem tudo ao mesmo tempo, então poderia dar errado.

API
O que é uma API?
API é uma forma de comunicação entre duas partes (por exemplo, duas máquinas).

Exemplo de Uso
Se quisermos fazer um sistema de chat, precisamos fazer uma requisição do navegador para se comunicar com o servidor.

Padrões de Comunicação
JSON (JavaScript Object Notation):
Um dos tipos de padrão de comunicação entre máquinas. É muito parecido com objetos do JavaScript.

XML:
Outro padrão mais antigo.

Exemplo de JSON
Aqui está um exemplo de um JSON fictício, como se fosse um blog de posts. Ele contém um array com vários objetos, cada um com informações como userID, ID, title e body.

Embora pareça um blog, ele simplesmente retorna um JSON. Quando requisitamos esta URL, ela abre um JSON, que é útil para a comunicação entre máquinas:

https://jsonplaceholder.typicode.com/posts

Callback
O que é um Callback?
Callback significa "ligar de volta". O conceito é literalmente o que a tradução sugere: uma função que é passada como argumento para outra função e é executada após algum tipo de evento ou operação.



*/
document.querySelector('#botao').addEventListener('click',() =>
 alert("clicou no botao"));
 //ok criamos isso para exemplificar o callback. to criando uma funcao que vou passar pra alguem, e decida a hr que quer executar, e quando ver o momento de executar q no caso seria quando cliquei, e o callback seria essa funcao em resposta quando o botao e clicado "clicou no botao".
 //se quiser poderia criar assim:
 function clickCallback () {
    alert("clicou via function callback")
 }
 document.querySelector("#botao2").addEventListener("click",clickCallback);
 
 /*
 funcao tal quando clicar no botao:
 -requisicao a URL x
 -ta aqui o callback para quando vc tiver a resposta:
 -- callbacktestado
 */
//Fazendo uma requisicao na Prática
// https://jsonplaceholder.typicode.com/posts
function clicou() {
    //
    //alert('CLICOU BOTAO 3!')
    //quando clicar nesse botao, quero q requisite a URL e exiba essas respostas, vms primeiramente exibir no console, e dps exibimos na tela de fato.
    //vms usar a funcao fetch ela e do prorpio JS para fazer requisicoes, o primeiro paramentro e a propria URL q vc quer requisitar, e em seguida faremos o processo de callback usando o . then
    //agr vms add o data, e quando for exebir no console exibira um response, ira exibir um objeto com varias caracteristicas
    fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
    //repare  q o fetch ao passar o mouse em cima, ele retorna um promise, ou seja isso quer dizer q algum momento ele ira retornar algo, por isso a ideia de ser promeca a resposta sera no futuro, por isso temos o then, ou seja temos uma promessa e then faca 

        //console.log('executou o callback da requisicao'); //agr vms ignorar essa linha e substiruir por data.
        //console.log(data); 
        //agr vms usar o proprio response, e podemos escolher uma das caracteristicas para exibir, digamos o body, mas lembre q precisa trocar em then por response.
        //console.log(responseesponse.body);
        //utilizamos o modo por console, mas agr vms aprimorar e em vez de criar um console, vms fazer por return.
        //isso agr eu pegarei um objeto json e irei converter em um objeto javascript de fato, e poder manusear esse objeto.
        console.log(`status:  ${response.status}`); //dessa forma vejo o status e verifico se teve algum erro de acordo com os numeros q estudamos sobre status de requisicao HTTP
        return response.json();
    }).then((json)=> {
        document.querySelector('.test1').innerHTML = json.length + "posts"
        console.log(json[0]); //agr fazendo isso ira vir um array com varios itens, ou seja tera um objeto, repare q por se tratar de um array, podemos usar a logica dos arrays "[]".
        //digamos q queira so pegar o primeiro titulo
        console.log(json[0].title);
        //podemos aprimorar em um alert usando o template string, ou seja essa e uma ideia de uma requisicao q esta acontecendo internamente, ou seja se n tivesse o alert o usuario nunca veria essa requisicao.
        alert(`Botao title 1: ${json[0].title}`);
    })
    //Uma promise tem 3 funcoes q pode usar com ela, uma delas e a then, catch e finally.
    //o catch e uma funcao q executa quando uma coisa da errado, e se nd der errado ? e apenas ignorado. Supondo q a url ta errado do nosso fetch, so para exemplificar. e repare q no console, vai dizer q o erro esta no title, ou seja ele tentou executar o fetch, leu q estava nulo, ai foi tentar executar o JSON e viu q o titulo esta vazio, ja q n encontrou a URL.
    .catch((error) => {
        console.log('deu problema');
        console.log(error);
        alert('problema na requisicao')
    })
    //ele sempre vai executar, mesmo dando certo ou errado, sempre ira executar, um exemplo classico é quando enviarmos um formulario, podemos bloquear o campo de texto enquanto to fazendo a requisicao, o finally normalmente n e mt utilizado.
    .finally(()=>{
        alert('opa,acabou tudo')
    })
    //alert("opa, clicou"); // repare q msm meu alert aqui no final, ele ira aparecera primeiro, aqui entra o sentido de sincrono e assincrono, no caso td q tiver uma promise sera uma funcao assincrona, mas n esperara terminar para prosseguir, ela ira continuar no caso por isso aparece esse alert
}
document.querySelector('#botao3').addEventListener('click',clicou);
// Como ver a requisicao acontecendo na pratica, entramos no dev tools, e clicamos em network, tera o all q mostrara td e o FETCH/XHR q sera onde mostra as requisicoes, se clicar iniclamente n mostrara nd, pq n ta ocorrendo nenhuma requisicao, mas digamos q clicamos no botao q criamos agr a pouco, ai sim aparecera o post.
//E se clicar em post, ira mostrar tds os detalhes da requisicao , headers, preview, response, initiator, time  


//por tras de td isso q aconteceu aqui ocorreu um promisse = promessa
//digamos q criamos uma function basica
function somar(x,y) {
    return 29 //se passar o mouse em cima do somar, ira mostrar o tipo de dado q sera resultado no caso sera um number.
}
//o q sao os erros dos numeros q aparece. em codigos de status de resposta HTTP
// https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status
//200,201, 206
// 301 URl mudou
// 400 requisicao errada, 401 n tem autorizacao, 403 proibido acessar, 404 URl n existe, 405 o metodo n e permitido.
//500 o navegador n sabe oq aconteceu
//Agora como descobrir o erro q aconteceu.
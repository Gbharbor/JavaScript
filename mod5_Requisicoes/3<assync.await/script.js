//vms criar o codigo de forma que ele se torna sincrono, como se estivessemos forcando ele a se tornar sincrono.
// AGR IREMOS CRIAR UM RECURSO ASYNC AWAIT, q ira remover td esse codigo interno, primeiro add o async antes da funcao, so para saber, caso foce um arrow function seria assim o inicio 
//let clicou = async () => { }
async function clicou() {
    // entao vms armazenar essa requisicao em uma variavel
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    // em resumo o await, faz com q primeiro termine a execuccao da requisicao pra ir pro proximo passo.
    //.then((response) => {
    //    return response.json();
    //})
    //agr proximo passo e transofrmar em JSON, faremos da msm forma armazenando em uma variavel.
    let json = await response.json();
    //.then((json) => {
    alert(`first post: ${json[0].title}`);
    //})
    //.catch(()=> {
    //    alert("Request Error")
    //})
    alert("CLICOU"); // Agr q conseguimos tornar sincrono, esse CLICOU so vai aparecer no final da requisicao! por causa do await 
}
document.querySelector('#botao').addEventListener("click", clicou);

//vms fazer agr no exemplo de POST
async function inserir () {
   let response = await fetch('https://jsonplaceholder.typicode.com/posts',
        { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'titulo de teste',
                body: 'corpo de teste',
                userId: 2
            })
        });
     let json = await response.json();
     console.log(json);
}
document.querySelector('#inserir').addEventListener("click",inserir);
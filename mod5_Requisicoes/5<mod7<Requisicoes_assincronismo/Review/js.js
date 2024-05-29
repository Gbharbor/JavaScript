//transformar uma string em JSON
//JSON.parse serve para fazer essa transformacao de string para um objeto real jSON

let pessoa = JSON.parse('{"nome": "Gui", "idade" : 90}');
//agr se der um consolelog nos valores, eles iram ler normalmente, e desconsiderar que sao uma string, atencao que td tem q ta entre aspas
console.log(pessoa.nome);
//JSON.stringify : e o inverso, transformo de JSON para string
let pessoa1 = JSON.stringify({nome:'gui',idade:80});
console.log(pessoa1);
//outra forma de fazer:
let pessoa2 = ({nome:'joana',idade:98});
let pessoaString = JSON.stringify(pessoa2);
console.log(pessoaString);
//exemplo de busca de usuario, quando o google reconhece essas primeiras letras, e nos tras um resultado q pode ser uma lista por exemplo.
let busca = {input: 'gui'};
let buscaString = JSON.stringify(busca);
console.log(buscaString);
let resultado = {lista : ['gui','gui porto','guilherme']};
let res = JSON.stringify(resultado); // transformei o resultado em string
console.log(res);
let resJSON = JSON.parse(res);//agr com o resultado, transformo em JSON

//promise
function pegarTemperatura() {
    return new Promise(function(resolve, reject) {
        console.log("pegando temperatura...");

        setTimeout(function(){
            resolve('40 na sombra')
        },2000);
    });
};
//usando a promise
//quando td der certo uso a resolve q um callback, e se td der errado a reject
pegarTemperatura();//aqui estou apenas usando a funcao e so me reotnrou a promise
//agr para usar ela de fato, podemos armazenar a funcao em uma variavel
let temp = pegarTemperatura();
console.log(temp); //ira mostrar promise {<[pending>]}, isso mostrara dizendo q esta em pendente.
//entao usamos o .then para q quando tiver o resultado, entao executa esse console, q no caso e depois de 2s
temp.then(function(resultado){
    console.log("TEMPERATURA: " + resultado);
});
//e se o then tiver um erro ou problema, usamos o catch
temp.catch(function(error){
    console.log("eita deu erro");
});
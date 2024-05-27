//Podemos fazer esse metodo de desconstruir tanto objetos quanto arrays.
//desconstruir objetos.
let pessoa = {
    nome: 'gui',
    idade: 90,
    sobrenome: 'porto',
    social : {
        facebook: 'portox',
        instagram: {
            url: '@gbharbor',
            follow: 30
        }
    },
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`;
    }
};
// perfeito td funcionando normalmente
//pegar informacoes especificas e transformar em variavel: por exemplo, digamos q queira salvar informacoes dessa pessoa em uma variavel.
/*
let idade = pessoa.idade;
let nome = pessoa.nome;
let sobrenome = pessoa.sobrenome;
let instagram = pessoa.social.instagram;

*/  
//mas tmb pode pegar junto com outras informacoes, pegando objeto dentro de um objeto, no caso do instagram, e pode ir fazendo seguindo a logica, e pode alterar o nome tmb caso queira, digamos q queira mudar a variavel para instagram.
let {nome:pessoaNome, sobrenome, idade = 0, social:{instagram:{url:instagram, follow}}} = pessoa;
//dessa maneira nos vms desconstruir o objeto pessoa, e dentro do parenteses coloco as informacoes q quero pegar desse objeto, sem precisar escrever de um em um igual fiz antes.
console.log(pessoaNome, sobrenome, idade, instagram, follow);//vc pode mudar o nome da variavel usando o : e o nome q queira.
//se quiser pode definir um valor padrao, digamos q a pessoa n tenha idade la em cima em let pessoa, e so acrescentar = 0 por exemplo, mas esse valor so aparece se n vir nenhuma propriedade em idade de let pessoa.
//E como pegariamos objetos dentro de objetos? 
//tem duas formas
//essa e a forma mais simples.
let {facebook} = pessoa.social;
console.log(`Metodo(let {facebook} = pessoa.social;): ${facebook}`);
//Agora vamos fazer o uso em uma funcao.

function pegarNomeCompleto (obj) {
    let nome = obj.nome;
    let sobrenome = obj.sobrenome;
    //return obj.nome + ' '+ obj.sobrenome;
    return `${nome} ${sobrenome}`;
}
pegarNomeCompleto(pessoa);
console.log(pegarNomeCompleto(pessoa));
//porem podemos desconstruir dentro do proprio parametro
//lembrando q esse barreto so aparece se n tivesse um sobrenome definido, mas como ja tem o Porto nao aparecera barreto
function pegarNomeCompleto1 ({nome,sobrenome="barreto",social:{instagram:{url:instagram}}}) {
    return `${nome} ${sobrenome}(Siga em ${instagram})`;
}
console.log(pegarNomeCompleto1(pessoa));

const data = {
    nome: {
        pessoa1 : 'joao',
        pessoa2 : 'pedro',
    },
    sobrenome: {
        pessoa1: 'silva',
        pessoa2: 'alcantra'
    },
    nomeCompleto: function() {
        return this.nome.pessoa2 + ' ' + this.sobrenome.pessoa1;
    }
};
console.log(data.nomeCompleto());
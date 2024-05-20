//Em JavaScript, uma função funcional é uma função que pode ser passada como argumento para outras funções, retornada por outras funções ou atribuída a variáveis. Em outras palavras, uma função funcional é tratada como um valor de primeira classe, assim como strings, números ou objetos. Isso permite que as funções sejam usadas de forma flexível em JavaScript, facilitando a implementação de técnicas como programação funcional e callbacks. Funções funcionais são essenciais para lidar com eventos assíncronos, manipulação de arrays e objetos, e muitas outras tarefas comuns na programação JavaScript moderna.
//Entao aqui estou criando um objeto so para retornarmos, a factory criamos coisas, pessoas ou produtos. 
let person = {
    nome : "gui",
    sobrenome : "porto",
    idade: 90
}
//porem criar dessa forma e muito trabalhosa, na programacao funcional usando factory, faremos assim:
//Agora ela vai retornar um objeto, ou seja aqui criamos uma funcao, usando um factory e exibindo elas no console.
function createPerson(name,lastname,age) {
    return {
        name,
        lastname,
        age,
        getFullname () {
            return `${this.name} ${this.lastname}`//fazendo assim parece que vai funcionar, mas vai dizer indefinido no console, mas pq ? comecar de forma correta mas como e uma funcao anonima , uma arrow function, ela esta dissociada nem nome ela tem, so peguei ela e adicionei na propriedade getfullname, e sendo independente, n tem como usar o factory q esta por fora,
            //  getFullname: () => {
            //      return `${this.name} ${this.lastname}`
            //  }
            //Ou seja para funcionar vamos criar uma funcao sendo ela ja a propriedade, ou seja criamos a funcao diretamente, como esta atualmente no codigo, faz referencia ao proprio objeto, mt gente pensa q por ser funcional n pode usar this, mas sim tem, desde q entenda o conceito.
            //  getFullname () {
            //    return `${this.name} ${this.lastname}`
            //  }
        },
        start() {
            console.log("deu start na pessoa")
        }
    }
}
let person1 = createPerson("gui","porto","20")
let person2 = createPerson("laura","porto","30")
console.log(person1.name);
console.log(person2.getFullname());
person1.start();

//Funcional Constructor
// o construtor basicamente era executada quan do o objeto estava sendo cosntruido,, porem quando e um funcional, estamos trabalhando diretamente com o objeto.Dito isso n temos um construtor, oq pode fazer e substituir o construtor por uma funcao especifica dentro do objeto, q quero q seja executada antes de qualquer coisa. por exemplo 
//  start() {
//      console.log("deu start na pessoa")
//  }
// vamos jogar isso dentro do nosso exemplo, e em seguida ja q criamos no nosso objeto, tempos que fazer ele funcionar, utilizando a funcao de fato: entao o objeto n tem um cosntrutor, so classes que tem, mas pode "emular" esse conceito de outras formas.
//   person1.start();

//Funcional: Heranca
//Basicamente eu tenho um modelo geral de um objeto, e uso ele para criar um modelo mais especifico, um exemplo classico de um usuario. 
const defaultUser = {
    name: "",
    email: "",
    level: 1
}
let user1 = {
    ...defaultUser, //aqui estou copuando tudo de default, porem se eu criar aqui eu substituo os valores, herda td joga td aqui dentro, ou substituo ou crio novas probriedades.
    name: "guilhermao",
    email:"guiportopt@outlook.com"
}
console.log(user1) // aqui vai aparecer o nome e email q criei, porem level 1, por ter usado o padrao que criei em defaultUser

//agr vms criar um admin
let adm1 = {
    ...defaultUser,
    name: "admbrabo",
    email: "admbrabo@gmail.com",
    level: 2
}
console.log(adm1); //Pronto, pegou a herenca, porem preciso determinar o lvl, 
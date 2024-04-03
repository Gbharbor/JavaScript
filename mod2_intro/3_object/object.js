let character = {
    name: "bia",
    lastname: "damelio",
    fullname : function () {
        return `${this.name} ${this.lastname}`
    },//aqui definimos uma funcao anonima, e usamos o this. referindo ao proprio objeto charecter, permitindo acesso as suas propriedades.
    ages: [90,100],
    allages: function () {
        return this.ages.length;
    },
    eyes: [
        {size: "big", color: "blue"},
        {size: "small", color: "green"},
    ],//ja aqui criei um array e criei 2 objetos dentro do array,com duas caracteristicas.
    features: {
        strength: [10,20,30]
    }
};
console.log("Nome completo:", character.fullname());//atencao aqui pois estamos jogando uma funcao no console, entao deve usar o parenteses da funcao.
console.log("Número de idades:", character.allages());//como na funcao defini o length, vai determinar a quantidades de valores que tenho em age, que no caso seram 2.
console.log(`Nome: ${character.name}, Idades: ${character.ages}`);//aqui mostro o nome e as 2 idades, ja que nao defini qual gostaria de mostrar de fato.
console.log("Primeira idade:", character.ages[0]);//ja nesse caso demonstro o valor 0 em age que e 90.
console.log("Tamanho dos olhos:", character.eyes[1].size);//Ja aqui estou estou puxando a var Eyes do objeto, e definindo o valor 1 do array que tambem  e um objeto,e seleciono o a caracteristica 1 que e o size.

//Adicionando novos valores ao array "strength"
character.features.strength.push(50);//dessa forma add um novo valor em feature no array strength.
character.features.strength.push(60);//aqui add 60.
character.features.strength[4] +=5;//esse comando faco uma adicao de 5 no array que eu determinar, que no caso foi o 4 que e o 60.
console.log("Valor adicionado ao strength:", character.features.strength[3]);////como foi adicionado esse novo valor, aqui estou exibindo ele que o value 3.
console.log("Valor adicionado e modificado:", character.features.strength[4]);//aqui estou exibindo ele que no caso sera 65.
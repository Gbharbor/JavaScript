//Isso funciona tanto para arrays e para objects, e para complementar.
//e feito com arrays, mas mt utilizado em objetos
let numeros = [1,2,3,4];
let outros = [...numeros, 5,6,7,8]
//testando em object
let info = {
    nome: 'gui',
    sobrenome: 'porto',
    idade: 99
};
console.log(info);

let newInfo = {
    ...info,
    cidade: 'Porto Alegre',
    estado: 'RS',
    Pais: 'BR'
};
console.log(newInfo);
//Isso e muito comum em funcoes, quando nao queremos reescrever tds dados, dessa forma reaproveitamenos os dados q ja tinhamos.
function addInfo(info) {
    let newInformation = {
        ...info,
        status: 0,
        token: '23123131',
        date_sign:'.....'
    };
    return newInformation
}
console.log(addInfo({nome: 'Guix', sobrenome:'Portox'}));
// **Tipos primitivos principais no TypeScript**
let nome: string = "gui"; // Tipo string
let idade: number = 90; // Tipo number (a tipagem é opcional aqui, mas pode ser explícita)
let programador: boolean = true; // Tipo boolean

// **Tipagem em arrays**
// Criamos arrays tipados com valores específicos:
let nomes: string[] = ['ana', 'gui', 'bia']; // Apenas strings permitidas
let numbers: number[] = [10, 20, 30]; // Apenas números permitidos

numbers.push(20); 
// Se tentarmos adicionar algo diferente de `number` ao array, o TypeScript detectará o erro e corrigirá.

let numeros: Array<number> = [20, 30, 40];
// Outra forma de definir a tipagem para arrays usando `Array<Type>`.

// **Tipo Any**
let coisas: any = ['ana', 'gui', 'bia']; // Permite valores de qualquer tipo
coisas.push(213); 
// Útil quando você precisa de flexibilidade no conteúdo do array, mas deve ser usado com cuidado.

// **Tipos nos parâmetros de funções**
function firstLetterUpperCase(name: string): string {
    // Para garantir que `name` seja uma string, adicionamos a tipagem ao parâmetro.
    let firstLetter = name.charAt(0).toUpperCase();
    return firstLetter + name.substring(1);
}
firstLetterUpperCase('gui');

// **Tipagem no retorno de funções**
let nome3: string = firstLetterUpperCase('gui');
// Aqui não é necessário declarar explicitamente a tipagem de `nome3`, porque a função já retorna uma string.

function somar(n1: number, n2: number): number {
    // Declaramos os parâmetros como `number` e o retorno também como `number`.
    return n1 + n2;
}
let resultado = somar(2, 3);
// Sem a tipagem explícita, `n1` e `n2` seriam tratados como `any`, podendo causar erros.

// **Contextual Typing em funções anônimas**
let names4 = ['ana', 'gui', 'bia'];
names4.forEach(function(nom) {
    // O TypeScript infere automaticamente o tipo de `nom` como `string` com base no array.
    if (typeof nom === 'string') {
        // Verificamos o tipo explicitamente para evitar problemas.
        console.log(nom.toUpperCase()); // Se for string, converte para maiúsculas.
    } else {
        console.log(nom); // Caso contrário, exibe o valor diretamente.
    }
});
// Se tentarmos adicionar um número ao array `names4`, o TypeScript detectará o erro devido ao tipo inferido.
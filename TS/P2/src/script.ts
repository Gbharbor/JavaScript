// -------------------------------------------------------
// Tipos Primitivos no TypeScript
// -------------------------------------------------------

// Tipo `string`
let nome1: string = "gui"; // Declaração explícita de que `nome` é uma string

// Tipo `number`
let idade: number = 90; // `idade` deve conter apenas valores numéricos

// Tipo `boolean`
let programador: boolean = true; // `programador` é um valor booleano (true/false)

// -------------------------------------------------------
// Tipagem em Arrays
// -------------------------------------------------------

// Array contendo apenas strings
let nomes: string[] = ["ana", "gui", "bia"];
nomes.push("carlos"); // OK: Adicionando uma string
// nomes.push(123); // ERRO: `123` não é uma string

// Array contendo apenas números
let numbers: number[] = [10, 20, 30];
numbers.push(40); // OK: Adicionando um número
// numbers.push("quarenta"); // ERRO: Apenas números são permitidos

// Outra forma de tipar arrays: `Array<Type>`
let numeros: Array<number> = [20, 30, 40];
numeros.push(50); // OK: Adicionando um número

// -------------------------------------------------------
// Tipo `any` (Aceita qualquer tipo)
// -------------------------------------------------------

// Array com `any` permite qualquer tipo de valor
let coisas: any[] = ["ana", "gui", "bia"];
coisas.push(213); // OK: Adicionando um número
coisas.push(true); // OK: Adicionando um booleano

// Atenção: Usar `any` reduz a segurança do código e deve ser evitado quando possível.

// -------------------------------------------------------
// Tipagem nos Parâmetros de Funções
// -------------------------------------------------------

function firstLetterUpperCase(name: string): string {
    // O parâmetro `name` é tipado como string
    let firstLetter = name.charAt(0).toUpperCase(); // Primeira letra maiúscula
    return firstLetter + name.substring(1); // Retorna a string formatada
}

// Usando a função
console.log(firstLetterUpperCase("gui")); // Saída: Gui

// -------------------------------------------------------
// Tipagem no Retorno de Funções
// -------------------------------------------------------

function somar1(n1: number, n2: number): number {
    // Parâmetros `n1` e `n2` devem ser números
    // O retorno também é explicitamente do tipo `number`
    return n1 + n2;
}

// Usando a função
let resultado = somar1(2, 3); // OK: A função retorna um número
console.log("Resultado da soma:", resultado); // Saída: 5

// -------------------------------------------------------
// Contextual Typing (Tipagem Contextual)
// -------------------------------------------------------

// O TypeScript infere o tipo dos elementos em arrays automaticamente
let names4 = ["ana", "gui", "bia"]; // `names4` é inferido como `string[]`

names4.forEach(function (nom) {
    // O TypeScript entende que `nom` é uma string com base no array
    console.log(nom.toUpperCase()); // Converte cada nome para maiúsculas
});

// Caso adicione um número ao array `names4`, o TypeScript acusa erro:
// names4.push(123); // ERRO: O array aceita apenas strings
// Exemplo de Types em Objetos
function resumo(usuario: { nome: string; idade?: number }) {
    // O ? indica que a propriedade "idade" é opcional
    if (usuario.idade !== undefined) {
        return `Olá ${usuario.nome}, você tem ${usuario.idade} anos.`;
    } else {
        return `Olá ${usuario.nome}.`;
    }
}

// Implementação da função
let u = { nome: "Gui", idade: 90 };
console.log(resumo(u)); // Saída: Olá Gui, você tem 90 anos.
console.log(resumo({ nome: "Ana" })); // Saída: Olá Ana.

// Union Types (Múltiplos Tipos)
let idade1: string | number = 90;

function mostrarIdade(idade: string | number) {
    if (typeof idade === "string") {
        console.log(idade.toUpperCase());
    } else {
        console.log(idade);
    }
}

mostrarIdade(90);       // Saída: 90
mostrarIdade("noventa"); // Saída: NOVENTA

// Types Customizados
type Idade = string | number;

let idade2: Idade = 90;

function mostrarIdadeCustomizada(i: Idade) {
    console.log(i);
}

mostrarIdadeCustomizada(idade2);
mostrarIdadeCustomizada("noventa");

// Objetos Complexos com Type
type User = {
    nome: string;
    idade: number;
};

function resumoUsuario(usuario: User) {
    return `Olá ${usuario.nome}, idade: ${usuario.idade}`;
}

console.log(resumoUsuario({ nome: "Gui", idade: 90 }));

// Usando Interface (Alternativa ao Type)
interface UserInterface {
    nome: string;
    idade: number;
}

function resumoComInterface(usuario: UserInterface) {
    return `Olá ${usuario.nome}, idade: ${usuario.idade}`;
}

interface UserInterface {
    email?: string; // Propriedade opcional adicionada
}

console.log(resumoComInterface({ nome: "Gui", idade: 90, email: "gui@example.com" }));

// Type Assertions
let idadeField = document.getElementById("idade") as HTMLInputElement;
console.log(idadeField.value);

// Tipos Literais
function mostrarTexto(texto: string, alinhamento: "left" | "right" | "center") {
    return `<div style="text-align: ${alinhamento}">${texto}</div>`;
}

console.log(mostrarTexto("Gui", "left"));
console.log(mostrarTexto("Gui", "center"));

// Criando uma combinação de objetos e valores literais
type Opcoes = { width: number; height: number };

function configurar(props: Opcoes | "auto") {
    console.log(props);
}

configurar({ width: 100, height: 200 }); // OK
configurar("auto");                     // OK
// configurar("automatico");            // ERRO: Valor não permitido

// Boolean Literal Types
type VerdadeiroOuFalso = true | false;

function temNome(nome: string): VerdadeiroOuFalso {
    return nome !== "";
}

console.log(temNome("Gui")); // true
console.log(temNome(""));    // false
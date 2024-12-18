// -------------------------------------------------------
// Sobre o WatchMode no TypeScript
// -------------------------------------------------------

// **Problema sem o WatchMode:**
// Sempre que fazemos alterações no arquivo TypeScript (`script.ts`), precisamos rodar o comando de compilação manualmente:
// `tsc script.ts`
// Isso gera o arquivo JavaScript correspondente, mas ter que repetir esse processo toda vez que alterarmos algo pode ser demorado e tedioso, especialmente em projetos maiores.

// **Solução com o WatchMode:**
// O WatchMode monitora automaticamente as alterações no arquivo TypeScript e o recompila sempre que salvamos.
// Com o comando:
// `tsc script.ts -w`
// O TypeScript entra em modo de observação e fica "assistindo" o arquivo `script.ts`.
// Assim, toda vez que fizermos uma mudança e salvarmos o arquivo, ele será compilado automaticamente.

// **Como testar:**
// 1. Abra o terminal e navegue até a pasta onde está o arquivo `script.ts`.
// 2. Execute o comando: `tsc script.ts -w`.
// 3. Mantenha o terminal aberto. Agora, sempre que você salvar uma alteração no arquivo, ele será recompilado automaticamente, sem precisar executar o comando manualmente.

// -------------------------------------------------------
// Exemplo prático: Usando WatchMode
// -------------------------------------------------------

const nome: string = "gui"; // Variável com tipo explícito

function blabla(n1: number): string {
    // Função que recebe um número (`n1`) e retorna uma string
    return "O parâmetro era: " + n1;
}

// Chamando a função
console.log(blabla(12)); // Saída: O parâmetro era: 12

// -------------------------------------------------------
// Passo a passo para usar o WatchMode
// -------------------------------------------------------

// 1. Certifique-se de que o arquivo `script.ts` está salvo no seu projeto.
// 2. No terminal, execute o comando:
//    `tsc script.ts -w`
// 3. Faça alterações no arquivo `script.ts` (ex.: mudar o valor de `n1` na função `blabla`).
// 4. Observe no terminal que o TypeScript recompila automaticamente o arquivo para JavaScript.
// 5. O arquivo JavaScript gerado pode ser incluído no HTML ou executado diretamente com Node.js.
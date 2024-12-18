// -------------------------------------------------------
// Lidando com Erros de Tipos em Operações Matemáticas
// -------------------------------------------------------

// Elementos HTML referenciados e tipados com `as HTMLInputElement`
// Isso ajuda o TypeScript a entender que estamos lidando com elementos de entrada HTML
let numero1 = document.getElementById("numero1") as HTMLInputElement;
let numero2 = document.getElementById("numero2") as HTMLInputElement;
let botao = document.getElementById("calcular") as HTMLButtonElement;
let res = document.getElementById("resultado") as HTMLElement;

// Função que realiza a soma entre dois números
function calcular(n1: number, n2: number): number {
    // `n1` e `n2` são explicitamente definidos como números
    return n1 + n2;
}

// Adiciona um evento de clique ao botão para realizar o cálculo
botao.addEventListener("click", function () {
    // O `value` de inputs é sempre retornado como string
    // Adicionamos "+" antes dos valores para convertê-los de string para número
    const resultado = calcular(+numero1.value, +numero2.value);

    // Exibe o resultado no elemento HTML, convertendo o número para string
    res.innerHTML = resultado.toString();
});

// -------------------------------------------------------
// Detalhes Adicionais e Boas Práticas
// -------------------------------------------------------

// **1. Erros comuns no VSCode**
// - O VSCode pode marcar erros ao acessar `value` e `innerHTML` porque ele entende que esses retornos são strings.
// - A conversão explícita para `number` (usando "+") resolve esse problema ao forçar a tipagem correta.

// **2. Comando para gerar o arquivo JS na pasta correta**
// - Quando o código TypeScript está em uma estrutura de pastas, você pode usar o seguinte comando:
// `tsc src/script.ts --outDir public`
// - Isso garante que o arquivo gerado seja colocado na pasta correta.

// **3. Lidando com erros de compilação**
// - Por padrão, o TypeScript ainda gera o arquivo JavaScript mesmo que ocorram erros durante a compilação.
// - Para evitar isso, você pode usar o comando:
// `tsc script.ts --noEmitOnError`
// - Isso impede a geração do arquivo JS caso haja erros no TypeScript.

// -------------------------------------------------------
// Cenário de Erros e Prevenção com Tipos
// -------------------------------------------------------

// **Por que usar `typeof` ou o operador "+" é importante?**
// - Inputs HTML retornam sempre valores do tipo string. 
// - Se não tratarmos esses valores, podemos acidentalmente realizar operações de concatenação em vez de somas numéricas.
// - Exemplo:
//   ```typescript
//   let a = "5"; // string
//   let b = "10"; // string
//   console.log(a + b); // Saída: "510" (concatenação)
//   ```

// **Exemplo de uso de `typeof` para garantir tipos corretos**
// Outra abordagem para validar tipos antes de realizar operações:
function calcularSeguro(n1: any, n2: any): number {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
        throw new Error("Os valores devem ser números!");
    }
    return n1 + n2;
}

try {
    console.log(calcularSeguro(5, 10)); // OK: Saída 15
    console.log(calcularSeguro("5", 10)); // Gera um erro
} catch (e) {
    console.error(e.message);
}
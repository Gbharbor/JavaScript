//manipulacao de strings
let nome = 'Gui Barreto Porto';
//vms ver quantos caracteres tem nessa string?
let resultado = nome.length
console.log(resultado); //console.log(nome.length);
//agr quero saber se existe um texto especifo nessa string?
let resultado1 = nome.indexOf('Porto'); // vai retornar pra mim a posicao q ele comeca(10) nesse caso, caso n ache retorna -1, se colocasse qualquer outra palavra q n esteja na string, poderia ser ate uma letra. digamos q fosse a letra G, ai sera posicao 0, ate o espaco tu pode saber a posicao ' '
//Podemos aprimorar esse exemplo colocando dentro de um if

let resultado2
if (nome.indexOf('Silva') > -1) {
    resultado2 = 'Achou';
} else {
    resultado2 = 'n achou';
}
// agr vms extrair inf das strings, vms comecar pelo slice, entao vms colocar as posicoes
let resultado3 = nome.slice(-5, -15);// ou seja pegara a da posicao 0 ate 10 ou seja so Gui Porto, e se colocasse apenas um paremetro, ira comecar dali ate o fim. digamos 4 vai comecar em Barreto ate o fim Porto.
//outro ponto importante se vc colocar valores negativo exemplo -5, vai comecar a contagem a partir do fim nesse caso so aparece Porto, poderia usar um -15, -10 e a mesma logica.
console.log(resultado3);
// agr vms testar o substring e semelhante ao slice, porem n pode usar valores negativos.
let resultado4 = nome.substring(0, 10);
console.log(resultado4);

let resultado5 = nome.substr(3,10); 
console.log(resultado5);//esse metodo ta em desusu, mas ele serve para dar a posicao inicial 3 nesse caso, e o segundo argumento e dizer quantos caracteres quero q seja exibido no caso 10 a partir da posicao 3.

//Agr como substituir textos de uma string, e bem simples so usar o replace.
let resultado6 = nome.replace('porto','harbor'); //coloco o nome q quero mudar e em seguida o novo nome.
console.log("resultado: ", resultado6);
console.log("nome: ", nome); // repare q eu to alterando a variavel resultado e nao diretamente o a variavel nome, para alterar o nome de fato teria que ser : 
nome = nome.replace("Gui", "Will");

let resultado7 = nome.toUpperCase();//maiuscula
console.log(resultado7)
let resultado8 = nome.toLowerCase(); //minuscula
console.log(resultado8);
//funcao concat e bem inutil para contatenar, mas vms aprender igual
let resultado9 = nome.concat(' ', "Porto");
console.log(resultado9); // nfaz mt sentido pq e mais facil fazer assim : 
let resultado10 = nome + ' Porto';
console.log(resultado10);
//agr digamos q o usuario esteja digitando e comeca a colocar varios espacos na string, isso e super util !
let nome1 = "      gui     ";
let resultado11 = nome1.length; //  ou seja ira contar os espacos, ou seja vms usar a funcao trim para tirar tds os espacos.
let resultado12 = nome1.trim().length// agr tira os espacos e ja mostra qts caracteres tem.
//Funcao CharAT(); ela diz qual caracter q ta na posicao q desejar
let resultado13 = nome.charAt(3); //pode fazer assim tmb:
resultado13 = nome.substr(3, 1);
let resultado14 = nome[2] // dessa forma ira pegar o 3 caractere
console.log(resultado13);

// agr quero transformar uma string num array . 
let nome2 = "Guilherme Barreto Porto"
let resultado15 = nome.split(''); //ou seja irei cortar, nesse caso irei cortar os espacos em branco, nesse caso ira gerar um array com 3 items, guilherme barreto porto, poderia ser qualquer coisa desde virgula, ponto virgula etc.

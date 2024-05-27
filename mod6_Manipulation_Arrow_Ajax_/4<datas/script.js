// DATE - Manipulação de datas
let d = new Date();
console.log(d); // Exibe todas as informações completas da data
console.log(d.toDateString()); // Exibe a data de forma resumida
console.log(d.toUTCString()); // Exibe a data no fuso horário UTC (padrão europeu)
console.log(d.toString()); // Exibe a data como string completa

// Criando uma data específica com 7 parâmetros (ano, mês, dia, hora, minuto, segundo, milissegundo)
let data = new Date(2020, 0, 1, 12, 30, 12); // Janeiro é 0, então 0 é Janeiro
console.log(data.toString());

// Criando uma data a partir de uma string
let data1 = new Date('2020-01-01 15:42:17');
console.log(data1);

// Criando uma data com o mínimo de parâmetros (ano e mês)
let data2 = new Date('2022-03'); // Março de 2022
console.log(data2);

// Data a partir de 0 milissegundos desde 1 de janeiro de 1970
let data3 = new Date(0);
console.log(data3);

// Exibindo a data anterior em formato UTC
console.log(data3.toUTCString());

// Criando uma data a partir de milissegundos
let data4 = new Date(123142341);
console.log(data4.toUTCString());

// Criando uma data antes de 1970 com milissegundos negativos
let data5 = new Date(-1234234123412);
console.log(data5.toUTCString());

// Manipulando datas
let dat = new Date();
console.log(dat.getFullYear()); // Obtém o ano atual
console.log(dat.getMonth()); // Obtém o mês atual (Janeiro é 0)
console.log(dat.getDay()); // Obtém o dia da semana atual (Domingo é 0)
console.log(dat.getDate()); // Obtém o dia do mês atual
console.log(dat.getHours()); // Obtém a hora atual
console.log(dat.getMinutes()); // Obtém os minutos atuais
console.log(dat.getMilliseconds()); // Obtém os milissegundos atuais
console.log(dat.getSeconds()); // Obtém os segundos atuais

// Obtendo o tempo em milissegundos desde 1 de janeiro de 1970
console.log(dat.getTime());
console.log(Date.now()); // Similar ao getTime(), mas mais direto

// Manipulando datas - alterando valores
let d1 = new Date();
d1.setFullYear(2027); // Define o ano para 2027
d1.setMonth(11); // Define o mês para Dezembro (11)
d1.setDate(15); // Define o dia do mês para 15
d1.setDate(d1.getDate() + 5); // Adiciona 5 dias à data atual
d1.setHours(d1.getHours() + 22); // Adiciona 22 horas à data atual
d1.setMinutes(d1.getMinutes() - 100); // Subtrai 100 minutos da data atual

console.log(d1); // Exibe a data alterada
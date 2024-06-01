//quando clicar em enviar , ira pegar o arquivo que foi selecionado no caso o ID arquivo q criei no input 
//esse .files e novo, como se trata de um arquivo, podemos usar ele .
async function enviar() {
    let arquivo = document.getElementById('arquivo').files[0];
    //console.log(arquivo);
    let body = new FormData();
    body.append('title','bla bla bla');
    body.append('arquivo', arquivo); //agr q ja montei o body, passo la pra req, usando o proprio body

    //repare que agr ao clicar em enviar usando o files, abri no terminal ira aparecer o filelist, ele basicamente e um objeto q posso ter varios arquivos dentro desse objeto, usando o multtiple no html, inclusive muda para o plural.
    //mas caso n seja o caso, e semre queira q seja apenas um item, e so por files[0] para dizer q e somente 1, logicamente tem q remover o multiple do html
    //mudando para apenas um, e fazendo o processo de envio do arquivo, ao abrir o console , repara que aparecera um file, que seria informacoes do proprio arquivo.
    //agr vms p/ segunda parte onde iremos fazer o upload desse arquivo de fato
    //vms usar o fetch e se quiser pode por um async para ficar menos codigo 
    let req = await fetch('htttps://wwww.meusite.com.br/upload', {
        method: 'POST', //geralmente quando se trata de upload , usamos o POST
        body: body, //por se tratar de arquivo, n adianta so usar o JSON, temos q usar tmb uma classe chamada formdata
        //outro ponto por se tratar de envio de arquivo, preciso modificar meu content type
        headers: {
            'Content-Type': 'multipart/form-data' //e como se fosse uma simulacao de formulario.
        }
    }); //so exemplo de URL
};
//obviamente vai dar erro, mas ao abrir o console log, clicar em network e dps analisar o upload, repara em payload todas informacoes doq foi enviado

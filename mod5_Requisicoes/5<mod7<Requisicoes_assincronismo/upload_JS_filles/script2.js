async function enviar() {
    let arquivo = document.getElementById('arquivo').files[0];
    
    let body = new FormData();
    body.append('title', 'bla bla bla');
    body.append('arquivo', arquivo);

    try {
        let req = await fetch('https://www.meusite.com.br/upload', {
            method: 'POST',
            body: body,
            // Não defina o 'Content-Type' header quando estiver usando FormData,
            // o navegador irá definir automaticamente com o boundary correto
        });

        if (req.ok) {
            console.log('Arquivo enviado com sucesso');
        } else {
            console.log('Falha ao enviar arquivo', req.statusText);
        }
    } catch (error) {
        console.error('Erro ao enviar arquivo', error);
    }
}
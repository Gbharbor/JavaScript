function mostrar() {
    let imagem = document.getElementById('imagem').files[0];
    console.log(imagem); // Até aqui tudo normal, irá aparecer o file no console.

    // Criar uma URL a partir do arquivo selecionado
    let img = document.createElement('img');
    img.src = URL.createObjectURL(imagem);
    img.width = 200; // Definir a largura da imagem para 200 pixels (thumbnail)
    document.getElementById('area').appendChild(img);
}

function mostrar1() {
    let reader = new FileReader();
    let imagem1 = document.getElementById('imagem1').files[0];

    reader.onloadend = function() {
        let img1 = document.createElement('img');
        img1.src = reader.result;
        img1.width = 200; // Definir a largura da imagem para 200 pixels (thumbnail)
        document.getElementById('area1').appendChild(img1);
    }

    if (imagem1) {
        reader.readAsDataURL(imagem1); // Configura o callback e lê o arquivo como Data URL
    } else {
        console.error("Nenhum arquivo selecionado");
    }
};
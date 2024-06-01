function mostrar() {
    let imagem = document.getElementById('imagem').files[0];
    console.log(imagem); //ate aqui td normal, ia aparecer o file no console.
    //a partir desse file eu gero uma URL
   
    // document.getElementById('area').appendChild = '<img/>' --> vc pode criar assim manualmente.
    //Ou pode criar a tag mesmo:
    let img = document.createElement('img');
    img.src = URL.createObjectURL(imagem);
    document.getElementById('area').appendChild(img); //um objeto q vai se transforma em um elemento, ira mostrar gigante , como diminuir ela pro tam de uma thambnail.
    img.width = 200;//repare q se vc for no html e dentro da div area vera q tem a img criada com uma url com blob,numa tag img
};
//tem outro metodo , q e levemente assincrono o filereader
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
}
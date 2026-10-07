const formulario = document.getElementById("formulario");

const fotoInput= document.getElementById("foto");

const previewfoto = document.getElementById("previewFoto");

let fotoSelecionada = "";

fotoInput.addEventListener("change", function() {const arquivo = fotoInput.files[0]; 
    if (arquivo) { const leitor = new FileReader();
    leitor.onload = function(evento) { fotoSelecionada = evento.target.result;
    previewFoto.src = fotoSelecionada;
    previewFoto.style.display = "inline-block"; };
    leitor.readAsDataURL(arquivo);
}
});
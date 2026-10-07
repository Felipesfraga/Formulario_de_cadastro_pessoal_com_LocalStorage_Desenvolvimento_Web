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
}});
 
const nome = document. getElementById("nome").value;

const endereco = document.getElementById("endereco").value;

const telefone = document.getElementById("telefone").value;

const email = document.getElementById("email").value;

const nacionalidade = document.getElementById("nacionalidade").value;

const naturalidade = document.getElementById("naturalidade").value;

const pessoa = {

    id: Date.now(),
    nome: nome,
    endereco: endereco,
    telefone: telefone,
    email: email,
    nacionalidade: nacionalidade,
    naturalidade: naturalidade,
    foto: fotoSelecionada

};


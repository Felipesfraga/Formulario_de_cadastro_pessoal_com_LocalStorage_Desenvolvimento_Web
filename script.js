let cadastros = JSON.parse(localStorage.getItem("cadastros")) || [];

const formulario = document.getElementById("formulario");

const fotoInput= document.getElementById("foto");

const previewFoto = document.getElementById("previewFoto");

let fotoSelecionada = "";

fotoInput.addEventListener("change", function() {const arquivo = fotoInput.files[0]; 
    if (arquivo) { const leitor = new FileReader();
     leitor.onload = function(evento) {
        fotoSelecionada = evento.target.result;
        previewFoto.src = fotoSelecionada;
        previewFoto.style.display = "inline-block"; };
        
        leitor.readAsDataURL(arquivo); 
}});

formulario.addEventListener("submit", function(evento) {evento.preventDefault();
 
    const nome = document.getElementById("nome").value;
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

    cadastros.push(pessoa);

    localStorage.setItem("cadastros", JSON.stringify(cadastros));

    document.getElementById("mensagem").innerHTML = "Cadastro realizado com sucesso!";

    formulario.reset();
    previewFoto.style.display = "none";
    fotoSelecionada = "";

    mostrarCadastros();

});

function mostrarCadastros() {

    const lista = document.getElementById("listaCadastros");
    lista.innerHTML = "";

    cadastros.forEach(function(pessoa) {
        const div = document.createElement("div");
        div.className = "cadastro";
        
        div.innerHTML = `
            ${pessoa.foto ? `<img src="${pessoa.foto}" alt="Foto de ${pessoa.nome}">` : ''}
            <p><strong>Nome:</strong> ${pessoa.nome}</p>
            <p><strong>Email:</strong> ${pessoa.email}</p>
            <p><strong>Telefone:</strong> ${pessoa.telefone}</p>
            <p><strong>Endereço:</strong> ${pessoa.endereco}</p>
            <p><strong>Nacionalidade:</strong> ${pessoa.nacionalidade}</p>
            <p><strong>Naturalidade:</strong> ${pessoa.naturalidade}</p>
            <button onclick="excluirCadastros(${pessoa.id})">Excluir</button>
        `;

        lista.appendChild(div);
    });
}

// Chamar ao carregar a página
mostrarCadastros();

function excluirCadastros(id) {

    cadastros = cadastros.filter(function(pessoa) {

        return pessoa.id !== id;

    });

    localStorage.setItem("cadastros",JSON.stringify(cadastros));

    mostrarCadastros();

}

function limparFormulario() {
    formulario.reset();
    previewFoto.style.display = "none";
    fotoSelecionada = "";

    document.getElementById("mensagem").innerHTML = "";
    
}
function criptografar() {
    let texto = document.getElementById("inputTexto").value;
    let textoCriptografado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    
    exibirMensagem(textoCriptografado);
}

function descriptografar() {
    let texto = document.getElementById("inputTexto").value;
    let textoDescriptografado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    
    exibirMensagem(textoDescriptografado);
}

function exibirMensagem(mensagem) {
    document.getElementById("mensagem").textContent = mensagem;
    document.getElementById("outputTexto").style.display = "block";
}

function copiar() {
    let texto = document.getElementById("mensagem").textContent;
    navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado para a área de transferência!");
    });
}

// Função para marcar o texto específico na página com a cor escolhida
function marcarTexto(palavra, cor) {
    const regex = new RegExp(`(${palavra})`, "gi");

    document.body.innerHTML = document.body.innerHTML.replace(regex, `<span style="background-color: ${cor}; font-weight: bold;">$1</span>`);
}

// Escuta mensagens enviadas pelo popup.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.acao === "marcar") {
        marcarTexto(request.texto, request.cor);
    }
});

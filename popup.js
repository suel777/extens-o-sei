document.getElementById("marcarBtn").addEventListener("click", () => {
    let palavra = document.getElementById("palavra").value;
    let cor = document.getElementById("cor").value;

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { acao: "marcar", texto: palavra, cor: cor });
    });
});

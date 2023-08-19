// script.js
document.addEventListener("DOMContentLoaded", function () {
    const copyButton = document.getElementById("copyButton");
    const textToCopy = document.getElementById("textToCopy");

    copyButton.addEventListener("click", function () {
        // Cria um elemento de área de texto temporário
        const tempTextarea = document.createElement("textarea");
        tempTextarea.value = textToCopy.textContent;

        // Adiciona o elemento temporário à página
        document.body.appendChild(tempTextarea);

        // Seleciona o texto dentro do elemento de área de texto temporário
        tempTextarea.select();
        tempTextarea.setSelectionRange(0, 99999); // Para dispositivos móveis
        
        // teste function
        function copiarTextoParaAreaTransferencia(texto) {
            // Cria um elemento de área de texto temporário
            const tempTextarea = document.createElement('textarea');
            tempTextarea.value = texto;
        
            // Adiciona o elemento temporário à página
            document.body.appendChild(tempTextarea);
        
            // Seleciona o texto dentro do elemento de área de texto temporário
            tempTextarea.select();
            tempTextarea.setSelectionRange(0, 99999); // Para dispositivos móveis
        
            // Copia o texto para a área de transferência
            document.execCommand('copy');
        
            // Remove o elemento de área de texto temporário
            document.body.removeChild(tempTextarea);
        }




        // Remove o elemento de área de texto temporário
        document.body.removeChild(tempTextarea);

        // Altera o texto do botão para indicar que foi copiado
        copyButton.innerText = "Copiado!";
        setTimeout(function () {
            copyButton.innerText = "Clique para Copiar";
        }, 2000); // Volta ao texto original após 2 segundos
    });
});

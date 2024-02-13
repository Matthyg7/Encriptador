function cifrarTexto() {
    let inputText = document.getElementById("textoOriginal").value;

    if (!/^[a-z\s]+$/.test(inputText)) {
        alert("Solo se aceptan letras minúsculas.");
        return;
    }

    let shift = 3;
    let encryptedText = "";

    for (let i = 0; i < inputText.length; i++) {
        let charCode = inputText.charCodeAt(i);

        if (charCode >= 97 && charCode <= 122) { // Minúsculas
            encryptedText += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
        } else if (charCode === 32) { // Espacio en blanco
            encryptedText += " ";
        }
    }

    let areaPresentacion = document.getElementById("areaPresentacion");
    areaPresentacion.innerText = encryptedText;
    areaPresentacion.className = "textoCifrado";
}

function descifrarTexto() {
    let inputText = document.getElementById("textoOriginal").value;

    if (!/^[a-z\s]+$/.test(inputText)) {
        alert("Solo se aceptan letras minúsculas.");
        return;
    }

    let shift = 3;
    let decryptedText = "";

    for (let i = 0; i < inputText.length; i++) {
        let charCode = inputText.charCodeAt(i);

        if (charCode >= 97 && charCode <= 122) { // Minúsculas
            decryptedText += String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);
        } else if (charCode === 32) { // Espacio en blanco
            decryptedText += " ";
        }
    }

    let areaPresentacion = document.getElementById("areaPresentacion");
    areaPresentacion.innerText = decryptedText;
    areaPresentacion.className = "textoDescifrado";
}

function actualizarBotonCopiar() {
    var areaPresentacion = document.getElementById("areaPresentacion");
    var btnCopiar = document.getElementById("btnCopiar");

    if (areaPresentacion.textContent.trim() !== "") {
        btnCopiar.classList.add("mostrar-btn"); // Agregar la clase para mostrar el botón
    } else {
        btnCopiar.classList.remove("mostrar-btn"); // Quitar la clase para ocultar el botón
    }
}

function copiarTexto() {
    let areaPresentacion = document.getElementById("areaPresentacion");
    let textoCopiar = areaPresentacion.innerText.trim();

    if (textoCopiar === "") {
        alert("No hay texto para copiar.");
        return;
    }

    navigator.clipboard.writeText(textoCopiar)
        .then(function () {
            alert("Texto copiado al portapapeles: " + textoCopiar);
            // Limpiar el textarea
            document.getElementById("textoOriginal").value = "";
        })
        .catch(function (err) {
            console.error("Error al copiar el texto al portapapeles: ", err);
        });
}

function autoResize(textarea) {
    textarea.style.height = 'auto'; // Restablecer la altura a automática
    textarea.style.height = textarea.scrollHeight + 'px'; // Establecer la altura al desplazamiento del contenido
}


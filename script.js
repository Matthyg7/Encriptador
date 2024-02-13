// Función para actualizar el contador de caracteres restantes
function actualizarContador() {
    let textoOriginal = document.getElementById("textoOriginal").value;
    let caracteresRestantes = 500 - textoOriginal.length;
    let contadorCaracteres = document.getElementById("contadorCaracteres");
    contadorCaracteres.textContent = caracteresRestantes + " caracteres restantes";
}

// Escuchar el evento de entrada en el área de texto
let textarea = document.getElementById("textoOriginal");
textarea.addEventListener("input", actualizarContador);

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

    actualizarBotonCopiar();
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

    actualizarBotonCopiar();
}

function mostrarBotonCopiar() {
    let btnCopiar = document.getElementById("btnCopiar");
    btnCopiar.style.display = "flex";
}

function ocultarBotonCopiar() {
    let btnCopiar = document.getElementById("btnCopiar");
    btnCopiar.style.display = "none";
}

// Lógica para mostrar u ocultar el botón según la presencia de texto en el área de presentación
function actualizarBotonCopiar() {
    let areaPresentacion = document.getElementById("areaPresentacion");
    if (areaPresentacion.innerText.trim() !== "") {
        mostrarBotonCopiar();
    } else {
        ocultarBotonCopiar();
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



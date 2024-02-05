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

function copiarTexto() {
    let areaPresentacion = document.getElementById("areaPresentacion");
    let textoCopiar = areaPresentacion.innerText.trim();

    if (textoCopiar === "") {
        alert("No hay texto para copiar.");
        return;
    }

    navigator.clipboard.writeText(textoCopiar)
        .then(function() {
            alert("Texto copiado al portapapeles: " + textoCopiar);
            // Limpiar el textarea
            document.getElementById("textoOriginal").value = "";
        })
        .catch(function(err) {
            console.error("Error al copiar el texto al portapapeles: ", err);
        });
}

// Función para insertar la imagen en el área de presentación
function insertarImagen() {
    let areaPresentacion = document.getElementById("areaPresentacion");
    let imagen = document.createElement("img");
    imagen.src = "ruta_de_tu_imagen.jpg"; // Reemplaza con la ruta de tu imagen descargada
    imagen.alt = "Descripción de la imagen"; // Agrega una descripción para accesibilidad
    imagen.id = "imagenPresentacion";
    areaPresentacion.innerHTML = ""; // Limpia el contenido actual del área de presentación
    areaPresentacion.appendChild(imagen); // Inserta la imagen en el área de presentación
}


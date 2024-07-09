document.addEventListener('DOMContentLoaded', () => {
    const encriptarBtn = document.getElementById('encriptarBtn');
    const desencriptarBtn = document.getElementById('desencriptarBtn');
    const copiarBtn = document.getElementById('copiarBtn');
    const resultadoParagraph = document.getElementById('resultado');
    const textoInput = document.getElementById('texto');

    function encriptarTexto(texto) {
        let textoEncriptado = '';
        for (let i = 0; i < texto.length; i++) {
            let letra = texto[i];
            switch (letra) {
                case 'e':
                    textoEncriptado += 'enter';
                    break;
                case 'i':
                    textoEncriptado += 'imes';
                    break;
                case 'a':
                    textoEncriptado += 'ai';
                    break;
                case 'o':
                    textoEncriptado += 'ober';
                    break;
                case 'u':
                    textoEncriptado += 'ufat';
                    break;
                default:
                    textoEncriptado += letra;
            }
        }
        return textoEncriptado;
    }

    function desencriptarTexto(textoEncriptado) {
        let textoDesencriptado = '';
        let i = 0;
        while (i < textoEncriptado.length) {
            if (textoEncriptado.substr(i, 5) === 'enter') {
                textoDesencriptado += 'e';
                i += 5;
            } else if (textoEncriptado.substr(i, 4) === 'imes') {
                textoDesencriptado += 'i';
                i += 4;
            } else if (textoEncriptado.substr(i, 2) === 'ai') {
                textoDesencriptado += 'a';
                i += 2;
            } else if (textoEncriptado.substr(i, 4) === 'ober') {
                textoDesencriptado += 'o';
                i += 4;
            } else if (textoEncriptado.substr(i, 4) === 'ufat') {
                textoDesencriptado += 'u';
                i += 4;
            } else {
                textoDesencriptado += textoEncriptado[i];
                i++;
            }
        }
        return textoDesencriptado;
    }

    function validarTexto(texto) {
        const regex = /^[a-zñáéíóúü\s]+$/; 
        return regex.test(texto);
    }

    function copiarTexto(texto) {
        navigator.clipboard.writeText(texto).then(() => {
            alert('Texto copiado al portapapeles');
        }).catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
    }


    encriptarBtn.addEventListener('click', () => {
        const texto = textoInput.value.toLowerCase(); 
        if (validarTexto(texto)) {
            const textoEncriptado = encriptarTexto(texto);
            resultadoParagraph.textContent = textoEncriptado;
        } else {
            resultadoParagraph.textContent = 'Texto inválido para encriptar';
        }
    });

    desencriptarBtn.addEventListener('click', () => {
        const textoEncriptado = textoInput.value;
        const textoDesencriptado = desencriptarTexto(textoEncriptado);
        resultadoParagraph.textContent = textoDesencriptado;
    });


    copiarBtn.addEventListener('click', () => {
        const textoCopiar = resultadoParagraph.textContent;
        copiarTexto(textoCopiar);
    });
});

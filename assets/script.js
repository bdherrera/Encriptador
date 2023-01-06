const seccionPaso1 = document.getElementById('seccion-paso1');
const inTexto = document.getElementById('cajaTexto');
const bEncripta = document.getElementById('btn-encriptar');
const bDesencripta = document.getElementById('btn-desencriptar');
const textoSalidaBB = document.getElementById('textoSalidaB');
const textSalida = document.getElementById('txSalida');
const seccionbCopiar = document.getElementById('seccion-bcopiar');
const bCopiar = document.getElementById('copiar');
let txSalida = document.getElementById('textoSalida');
const cadenaTxt = '^[a-z0-9 ñ,.!¡¿?_\n]+$';

function encriptado() {
    let cadenaBox = inTexto.value;
    if (cadenaBox != ''){
        if (cadenaBox.match(cadenaTxt) != null){
            let cadenaSplit = cadenaBox.split(' ');
            let cadenaSeparada = [];

            for (let splitSimple of cadenaSplit) {
                splitSimple = splitSimple.replaceAll('e', 'enter');
                splitSimple = splitSimple.replaceAll('i', 'imes');
                splitSimple = splitSimple.replaceAll('a', 'ai');
                splitSimple = splitSimple.replaceAll('o', 'ober');
                splitSimple = splitSimple.replaceAll('u', 'ufat');

                cadenaSeparada.push(splitSimple);
            }

            const cadenaFinal = cadenaSeparada.join(' ');

            if(textoSalidaBB.style.visibility = "visible"){
                textoSalidaBB.style.visibility = "hidden"
            }
            if(bCopiar.style.visibility = "hidden"){
                bCopiar.style.visibility = "visible"
            }

            txSalida.innerHTML = "<textarea id='txSalida' cols='5' rows='1' type='text' placeholder='Tu mensaje AQUÍ' class='texto-codificado'></textarea>";
            document.getElementById("txSalida").value = cadenaFinal;
            inTexto.value = "";
        }
        else{
            swal(
                {
                    title: "¡ERROR!",
                    text: "Mensaje inválido..\n Usa letras minúzculas y sin acentos.",
                    icon: "error",
                    button: "OK",
                }
            );
        }
    }
    else{
        if(bCopiar.style.visibility == "hidden"){
            swal(
                {
                    title: "¡ERROR!",
                    text: "La caja de texto está vacia.\nEscribe tu mensaje.",
                    icon: "error",
                    button: "OK",
                }
            );
        }
    }
}

function desencriptar() {
    let cadenaBox = inTexto.value;
    if (cadenaBox != ''){
        if (cadenaBox.match(cadenaTxt) != null){
            let cadenaSplit = cadenaBox.split(' ');
            let cadenaSeparada = [];

            for (let splitSimple of cadenaSplit) {
                splitSimple = splitSimple.replaceAll('enter', 'e');
                splitSimple = splitSimple.replaceAll('imes', 'i');
                splitSimple = splitSimple.replaceAll('ai', 'a');
                splitSimple = splitSimple.replaceAll('ober', 'o');
                splitSimple = splitSimple.replaceAll('ufat', 'u');

                cadenaSeparada.push(splitSimple);
            }

            const cadenaFinal = cadenaSeparada.join(' ');

            if(textoSalidaBB.style.visibility = "visible"){
                textoSalidaBB.style.visibility = "hidden";
            }
            if(bCopiar.style.visibility = "hidden"){
                bCopiar.style.visibility = "visible";
            }

            txSalida.innerHTML = "<textarea id='txSalida' cols='5' rows='1' type='text' placeholder='Tu mensaje AQUÍ' class='texto-codificado'></textarea>";
            document.getElementById("txSalida").value = cadenaFinal;
            inTexto.value = "";
        }
        else{
            swal(
                {
                    title: "¡ERROR!",
                    text: "Mensaje inválido..\n Usa letras minuzculas y sin acentos.",
                    icon: "error",
                    button: "OK",
                }
            );
        }
    }
    else{
        if(bCopiar.style.visibility == "hidden"){
            swal(
                {
                    title: "¡ERROR!",
                    text: "La caja de texto está vacia.\nEscribe tu mensaje.",
                    icon: "error",
                    button: "OK",
                }
            );
        }
    }
}

function copiar() {
    document.getElementById("txSalida").select;
    navigator.clipboard.writeText(document.getElementById("txSalida").value);
    swal(
        {
            title: "¡Mensaje Copiado!",
            text: "El mensaje encriptado se ha copiado al portapapeles.",
            icon: "success",
            button: "OK",
        }
    );
    if(bEnviarMensaje.style.visibility = "hidden"){
        bEnviarMensaje.style.visibility = "visible";
        bEnviarMensaje.style.height = "90px";
        bEnviar.style.visibility = "visible";
        bEnviar.style.margin = "20px 20px";
        location.hash = "#" + "boton-enviar-mensanje";
    }
    else{
        //no aplica
    }
}

function regresarcodif(){
    seccionWa.style.visibility = "hidden";
    seccionWa.style.height = "0";
    location.hash = "#" + "cabeza";
}

function regrecargar(){
    location. reload(true);
}


import { conexionAPI } from "./conexionAPI.js";
const formulario = document.querySelector("[data-formulario]");

async function crearproducto (evento) {

    evento.preventDefault();

    const titulo= document.querySelector("#nombre").value;
    const precio= document.querySelector("#precio").value;
    const imagen= document.querySelector("#imagen").value;
    
    await conexionAPI.enviarproducto(titulo,precio,imagen);

   
    
}

formulario.addEventListener("submit", evento=> crearproducto(evento));


import { conexionAPI } from "./conexionAPI.js";
const lista = document.querySelector("[data-lista]");

function crearCard(nombre, precio, url, id) {

    const producto = document.createElement("li");
    producto.className = "producto_item"
    producto.innerHTML = ` 
                    <div class="card">
                        <figure class="photo-box">
                            <img src="${url}">
                            </figure>
                        <div class="card-container--value">
                            <p class="textoproductos">${nombre}</p>
                            <p class="textoproductos_precio">${precio}</p>
                            <button id="btn-eliminar" data-id="${id}">eliminar</button>
                        </div>
                    </div>
                    `
    const button = producto.querySelector("#btn-eliminar");

    button.addEventListener("click",async ()=>{ 

        const idproducto = button.dataset.id;
        await conexionAPI.eliminarproducto(idproducto)

    })
                    
    return producto;
}

async function listarproductos() {

    const listAPI = await conexionAPI.listarproductos();
    if(listAPI.length===0){

        lista.innerHTML="<p>No se ha encontrado producto :(</p>"

    } else {

        listAPI.forEach(producto => lista.appendChild(crearCard(producto.nombre, producto.precio, producto.imagen, producto.id)))

    }

}

listarproductos();
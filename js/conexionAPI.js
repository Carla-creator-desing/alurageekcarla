async function enviarproducto(titulo,precio,imagen) {

    const conexion = await fetch("http://localhost:3002/productos", {

        method:"POST",
        headers:{"Content-type":"application/json"},
        body: JSON.stringify({
            nombre: titulo,
            precio: precio,
            imagen: imagen
        
    })
})

    const conexionConvertida = conexion.json();
    return conexionConvertida;
    }

async function listarproductos() {

    const conexion = await fetch("http://localhost:3002/productos");
    const conexionConvertida = conexion.json();
    return conexionConvertida;
    
}

async function eliminarproducto(id) {

    const conexion = await fetch(`http://localhost:3002/productos/${id}`,{

        method: "DELETE",
        body: JSON.stringify(id)

    })

    const conexionConvertida = await conexion.json();
    return conexionConvertida;
    }



   export const conexionAPI = {

        enviarproducto, 
        listarproductos,
        eliminarproducto


    }
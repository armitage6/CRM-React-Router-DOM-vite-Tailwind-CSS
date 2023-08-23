
//Aca hacemos lso request HTTP hacia nuestra rest api 


export async function obtenerLibros() {
    //const url = 'http://localhost:3000/libros'     //Variable de entorno, es una variable que ne el entorno de desarrollo tiene un valor y en el entorno de produccion tiene un valor diferente
    //La variable de entorno se crea en un artchivo .env, ahi hacemos las peticiones de la siguiente manera

    const respuesta = await fetch(import.meta.env.VITE_API_URL)
    const resultado = await respuesta.json()

    return resultado
}


export async function obtenerLibro(id) {
    //const url = 'http://localhost:3000/libros'     //Variable de entorno, es una variable que ne el entorno de desarrollo tiene un valor y en el entorno de produccion tiene un valor diferente
    //La variable de entorno se crea en un artchivo .env, ahi hacemos las peticiones de la siguiente manera

    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
    const resultado = await respuesta.json()

    return resultado
}



export async function agregarCliente(datos) {
    //utilizamos trycatch intenta realizar la accion y en cualquier momento que ocurra un error l ocaptura en el catch
    try {
        const respuesta = await fetch(import.meta.env.VITE_API_URL, {
            method: 'POST',
            body: JSON.stringify(datos),  //Son los datos que enviaremos al servidor
            headers: {
                'Content-Type': 'application/json' //content type especificamos el contenido que estamos enviando
            }
        })
        await respuesta.json()
    } catch (error) {

    }

}

export async function actualizarCliente(id, datos) {
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(datos),  //Son los datos que enviaremos al servidor
            headers: {
                'Content-Type': 'application/json' //content type especificamos el contenido que estamos enviando
            }
        })
        await respuesta.json()
    } catch (error) {

    }
}


export async function eliminarCliente(id) {
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'DELETE'
        }
        )
        await respuesta.json()
    } catch (error) {

    }
}
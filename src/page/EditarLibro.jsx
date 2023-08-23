import { Form, useNavigate, useLoaderData, useActionData, redirect } from "react-router-dom"
import { obtenerLibro, actualizarCliente } from "../data/LibrosApi"
import Formulario from "../components/Formulario"
import Error from "../components/Error"

export async function loader({ params }) {
    const libro = await obtenerLibro(params.libroId)

    //Es para validar si hay un libro es el id que se especifica
    if (Object.values(libro).length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'El libro no fue encontrado'
        })
    }

    return libro
}

export async function action({ request, params }) {
    //En el requesten el prototype encontraremos un formData, es una forma a la cual podemos acceder a la informacion de un formulario. En ajax y fetch APi se tienen que colocar los datos en un formDate y luego enviar la informacion
    //Tenemos que hacer la funcion asincrona porque el request puede tardar en procesar y traer los datos de formData
    const formData = await request.formData()

    const datos = Object.fromEntries(formData)
    // console.log(datos)

    //Seleccionamos el email de formData para que tenga el formato adecuado
    const email = formData.get('email')


    //Validacion
    const errores = []
    if (Object.values(datos).includes('')) {
        errores.push('Todos los campos son obligatorios')
    }

    //Expresion regular
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    //Validamos si cumple el formato de mi expresion regular
    if (!regex.test(email)) {
        errores.push('Email no es válido')
    }

    //formas de leer el contenido de un formData console.log(formData.get('nombre')) console.log(...formData) const datos = Object.fromEntries(formData) console.log(datos)


    //REtornar datos si hay errores
    if (Object.keys(errores).length) {
        return errores
    }


    //Actualizar el cliente 
    await actualizarCliente(params.libroId, datos) // Ponemos un await para que no se ejecute hasta que finaliza la funcion de agregar cliente
    return redirect('/')
}


const EditarLibro = () => {
    const navigate = useNavigate()
    const libro = useLoaderData()
    const errores = useActionData()


    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Editar Libro</h1>
            <p className="mt-3">A continuación podras modificar los datos de un libro</p>
            <div className="flex justify-end">
                <button
                    className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
                    onClick={() => navigate('/')}
                >
                    volver
                </button>
            </div>



            <div className="bg-white shadow rounded-md  md:w-3/4 mx-auto px-5 py-10 mt-20">

                {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}

                <Form
                    method="post" // aca definimos el metodo, ya que los formulario se suelen enviar con el metodo post
                    //tambien existe un action, que es un archivo con una URL en el cual se envian los datos del formulario

                    noValidate // para que desabilite la validacion de html5
                >

                    <Formulario
                        libro={libro}
                    />

                    <input
                        type="submit"
                        className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
                        value='Editar Libro'
                    />
                </Form>


            </div>
        </>
    )
}

export default EditarLibro

import { useNavigate, Form, redirect } from "react-router-dom"
import { eliminarCliente } from "../data/LibrosApi";

export async function action({ params }) {

    await eliminarCliente(params.libroId)

    return redirect('/')
}


const Libros = ({ libroProps }) => {

    const navigate = useNavigate();


    const { libro, nombre, email, telefono, editorial, id } = libroProps
    return (
        <tr className='border-b'>
            <td className="p-6 space-y-2">
                <p className='text-2xl text-gray-800'>{libro}</p>
                <p>{nombre}</p>
                <p>{editorial}</p>
            </td>
            <td className="p-6">
                <p className='text-gray-600'><span className='text-gray-800 uppercase font-bold'>Email: </span>{email}</p>
                <p className='text-gray-600'><span className='text-gray-800 uppercase font-bold'>Telefono: </span>{telefono}</p>
            </td>
            <td className='p-6 flex gap-3'>
                <button
                    type='button'
                    className='text-blue-600 hover:text-blue-700 uppercase font-bold text-xs'
                    onClick={() => navigate(`/libros/${id}/editar`)}
                >
                    Editar
                </button>
                <Form
                    method="post"
                    action={`/libros/${id}/eliminar`}
                    onSubmit={(e) => {
                        if (!confirm('¿Deseas eliminar este registro?')) {
                            e.preventDefault()
                        }
                    }}
                >
                    <button
                        type='submit'
                        className='text-red-600 hover:text-red-700 uppercase font-bold text-xs'
                    >
                        Eliminar
                    </button>
                </Form>
            </td>
        </tr>
    )
}

export default Libros

import { useLoaderData } from "react-router-dom"
import Libros from "../components/Libros";
import { obtenerLibros } from "../data/LibrosApi";

// loader es similar a un ussEfect, es una funcion que se va a ejecutar cuando el componente carge, ideal para cargar state o consultar una api y optener el resultado que queramos mostrar en un componente, siempre debe retornar algo
//Debemos exportarlo en main y ahi crear un loader y poner nustro loader para traerlo a index
//Para poder retornar lo que tenemos en el loder que estamos asociando a este componente usamos un hook de react router dom useLoaderData
//Este loader es como hacer un peticion GET
export function loader() {

    const librosDeApi = obtenerLibros()

    return librosDeApi;

    //Error boundaries, son componentes de react que optienen los errores en cualquier parte del componente
}


const Index = () => {

    const libros = useLoaderData();

    console.log(libros);


    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Libros</h1>
            <p className="mt-3">Administra tus Libros</p>



            {libros.length ? (
                <table className="w-full bg-white shadow mt-5 table-auto">
                    <thead className="bg-sky-800  text-white">
                        <tr>

                            <th className="p-2">Libro</th>
                            <th className="p-2">Contacto</th>
                            <th className="p-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {libros.map((libroProps, index) => (
                            <Libros
                                libroProps={libroProps}
                                key={libroProps.id}
                            />
                        ))}
                    </tbody>

                </table>
            ) : (
                <p className="text-center mt-10">No Hay Libros Aún </p>
            )

            }
        </>
    )
}

export default Index

import { Outlet, Link, NavLink, useLocation } from "react-router-dom"

const Layout = () => {
    const location = useLocation() // Hook que usamos de React Router DOM, Tenemos un pathname que es la ubicacion del url, search cuando la url tiene parametros, key la clave que ira cambinado, hash cuando la url tiene un id

    //Usaremos uselocation para resaltar el Link en el que nos encontremos 

    //console.log(location)


    return (
        <div className="md:flex md:min-h-screen">
            <aside className="md:w-1/4 bg-sky-800  px-5 py-10">
                <h2 className="text-4xl font-black text-center text-white">CRM Libros</h2>
                <nav className="mt-10">
                    <Link
                        className={`${location.pathname === '/' ? 'text-blue-300' : 'text-white'} text-2xl block hover:text-blue-300 text-white`} to="/">Libros</Link>

                    <Link
                        className={`${location.pathname === '/libros/nuevos' ? 'text-blue-300' : 'text-white'} text-2xl block hover:text-blue-300 text-white`} to="/libros/nuevos">Nuevo Libro</Link>


                </nav>
            </aside>
            <div className="md:w-3/4 p-10 md:min-h-screen overflow-scroll">
                <Outlet />
            </div>
        </div >
    )
}

export default Layout

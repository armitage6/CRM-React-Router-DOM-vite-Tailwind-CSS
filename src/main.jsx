import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NuevoLibro, { action as nuevolibroAction } from './page/NuevoLibro'
import Index, { loader as libroLoader } from './page/Index'
import ErrorPage from './components/ErrorPage'
import EditarLibro, { loader as editarLibroLoader, action as editarLibroAction } from './page/EditarLibro'
import { action as eliminarLibroAction } from './components/Libros'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // es el elemento principal que permanecera independiente que cambiemos la url
    children: [
      {
        index: true, // Dice que este objeto se tiene que renderizar en en la vista '/'
        element: <Index />,
        loader: libroLoader, // Especifico que loder quiero cargar en el componente especifico 
        errorElement: <ErrorPage />
      },
      {
        path: '/libros/nuevos', // Nos indica que url debemos visitar para uqe muestre el contenido
        element: <NuevoLibro />, // elemento que importamos el cual tiene informacion de la pagina
        action: nuevolibroAction,
        errorElement: <ErrorPage />
      },
      {
        path: '/libros/:libroId/editar', // Usamos useParams para recuperar el ID 
        element: <EditarLibro />,
        loader: editarLibroLoader,
        action: editarLibroAction,
        errorElement: <ErrorPage />
      },
      {
        path: '/libros/:libroId/eliminar',
        action: eliminarLibroAction,
      }
    ]
  },

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

// En actiones y loaders react router 6 
// Uiliza loaders para obtener datos de una API o de un bojeto (similar a un state)


//Utiliza Actions para procesar la entrada de datos en un Form






// Cuando utilizar useLoaderData y useActionData

// utilizamos useLoaderData cuando quieras obtener el resultado de un loader
//useActionData cuando quieras obtener el resultado de un action



// Que es una rest api 
// REST = Representational State Transfer
//Debe respondes a los Request http: get, post, put, patch, delete
// Tiene una forma ordenada y estructurada de poner a disposicion los recursos
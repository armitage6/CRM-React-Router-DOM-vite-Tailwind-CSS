# React + Vite

## Tecnologias y framework que se usaron:
- JavaScript
- React
- React Router DOM
- Css
- Html
- Tailwind

### ¿Cómo correr el proyecto?
Para este proyecto sera necesario instalar las libreria de Tailwind 
- npm install -D tailwindcss postcss autoprefixer


Se debe instalar la libreria de React Router DOM
- npm install react-router-dom

Se debe instalar json server para poder e iniciarlo en la terminal para exista la conexion con la api
Se debe ingresar este comando en la terminal para instalarlo de manera global
- npm install -g json-server
con este segundo comando en la terminal la iniciamos asi se podra hacer el fetch a la api
- json-server --watch db.json


### ¿Cómo funciona?
Bueno es un entorno de un administrador que puede ingresar, editar e eliminar libros. los cuales se podran mostrar en la ruta /libros/nuevos. 
Para este proyecto lo esencial era practicar el routing en su version 6, en la cual hacemos la rutas en main.jsx.
usamos diferentes hooks y funciones que vienen implementadas en react router DOM, useNavigate,useLoaderData, useActionData, useNavigate, Form, redirect, useRouteError, useLocation, Outlet, Link. 
Entre conocimientos nuevos que obtuve fue  useLoaderData, useActionData, los cuales se usan para obtener los resultados de loader y action respectivamente. 
También use .env para crear una variable de entorno VITE_API_URL = http://localhost:3000/libros para hacer peticiones a la api el http fue dado por json server, cree un db.json en el cual se guarda la informacion de los libros. 
Además, puse en practica useParams para poder entrar a un libro en especifico a través de su id
 

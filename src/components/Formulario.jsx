const Formulario = ({ libro }) => {
    return (
        <>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="nombre"
                >Nombre:</label>
                <input
                    id="nombre"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Nombre Del Autor"
                    name="nombre"
                    defaultValue={libro?.nombre}
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="libro"
                >Libro:</label>
                <input
                    id="libro"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Nombre Del Libro"
                    name="libro"
                    defaultValue={libro?.libro}
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="editorial"
                >Editorial:</label>
                <input
                    id="editorial"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Editorial Del Libro"
                    name="editorial"
                    defaultValue={libro?.editorial}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="email"
                >E-mail:</label>
                <input
                    id="email"
                    type="email"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Email De La Editorial"
                    name="email"
                    defaultValue={libro?.email}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="telefono"
                >Teléfono:</label>
                <input
                    id="telefono"
                    type="tel"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Teléfono De La Editorial"
                    name="telefono"
                    defaultValue={libro?.telefono}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="notas"
                >Notas:</label>
                <textarea
                    as="textarea"
                    id="notas"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
                    placeholder="Notas Del Libro"
                    name="notas"
                    defaultValue={libro?.notas}
                />
            </div>
        </>
    )
}

export default Formulario

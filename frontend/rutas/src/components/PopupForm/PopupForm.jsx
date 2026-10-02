import { useState } from "react";

function PopupForm({ close, type, handleSave }) {
    console.log(type);

     const [nombre, setNombre] = useState("");
    const [imagenPerf, setImagenPerfil] = useState("");
    const [description, setDescription]= useState("")

  

    function handleSubmit(e) {
        e.preventDefault();

        handleSave({ nombre, imagenPerf, description });

        close()
    }

    return (
        <div className="popup">
            <div className="popup__container">
                <button className="popup__close" onClick={close}>
                    ✕
                </button>

                {type === "perfil" && (
                    <>
                        <h2 className="popup__title">Editar perfil</h2>

                        <form
                            className="popup__form"
                            onSubmit={handleSubmit}
                        >
                            <label className="popup__label">
                                Nombre
                                <input
                                    className="popup__input"
                                    type="text"
                                    placeholder="Cris Sandoval"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                            </label>

                            <label className="popup__label">
                                Imagen de perfil
                                <input
                                    className="popup__input"
                                    type="text"
                                    placeholder="URL de la imagen"
                                    value={imagenPerf}
                                    onChange={(e) =>
                                        setImagenPerfil(e.target.value)
                                    }
                                />
                            </label>

                            <button
                                className="popup__guardar-perfil"
                                type="submit"
                            >
                                Guardar
                            </button>
                        </form>
                    </>
                )}

                {type === "description" && (
                    <>
                        <h2 className="popup__title">
                            Editar descripción
                        </h2>

                        <form className="form__description" onSubmit={handleSubmit}>
                              <label className="popup__label">
                            Descripción
                            <textarea
                                className="popup__textarea"
                                placeholder="Escribe una descripción..."
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </label>

                        <button className="btn__description" type="submit">Guardar</button>
                        </form>

                      
                    </>
                )}

                {type === "banner" && (
                    <>
                        <h2 className="popup__title">
                            Editar banner
                        </h2>

                        <label className="popup__label">
                            Imagen de banner
                            <input
                                className="popup__input-banner"
                                type="text"
                                placeholder="URL del banner"
                            />
                        </label>
                    </>
                )}
            </div>
        </div>
    );
}

export default PopupForm;
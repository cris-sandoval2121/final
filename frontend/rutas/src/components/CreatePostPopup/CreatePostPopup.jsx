import { useState } from "react";

function CreatePostPopup({ close, postTextConect}) {
 const [createPostInput, setCreatePostInput]= useState('');
 const [createPostImagenInput, setCreatePostImagenInput]= useState('');

 function handleSubmit(e){
    e.preventDefault();

    postTextConect(createPostInput, createPostImagenInput); 

    close();


 }



   

   
    return (
        <div className="popup">
            <div className="popup__overlay" onClick={close}></div>

            <div className="popup__container">

                <div className="popup__header">
                    <h2 className="popup__title">
                        Crear publicación
                    </h2>

                    <button
                        className="popup__close"
                        type="button"
                        onClick={close}
                    >
                        ×
                    </button>
                </div>

                <form className="popup__form" onSubmit={handleSubmit}>

                    <textarea
                        className="popup__textarea"
                        placeholder="¿Qué estás pensando?"
                       //guadador de valor
                       value={createPostInput}
                       onChange={(e)=> setCreatePostInput(e.target.value)}
                    />

                    <input
                        className="popup__image-url"
                        type="url"
                        placeholder="Pega la URL de tu imagen..."
                        value={createPostImagenInput}
                        onChange={(e)=> setCreatePostImagenInput(e.target.value)}
                    />

                    <div className="popup__bottom">

                        <button
                            className="popup__publish"
                            type="submit"
                        >
                            Publicar
                        </button>

                    </div>

                </form>
            </div>
        </div>
    );
}

export default CreatePostPopup;
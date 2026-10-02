import Post from '../Post/Post'
import Header from '../Header/Header';
import PopupForm from '../PopupForm/PopupForm';
import { useState } from 'react';


function Main() {

    const [activePopup, setActivePopup] = useState(null);

     const [nombre, setNombre] = useState("Cris Sandoval");
     const [imagenPerf, setImagenPer] = useState("https://i.pinimg.com/736x/13/b8/c1/13b8c10b52b4b986422bbdc66f9fe9da.jpg");
     const [description, setDescription] = useState('me gusta dormir hasta tarde')


    function handleSave({ nombre, imagenPerf, description }) {
    setNombre(nombre);
    setImagenPer(imagenPerf)
    setDescription(description)
}

    function handlePopup(popup) {
        setActivePopup(popup);
    }

    function close() {
        setActivePopup(null);
    }





    return (
        <>
            <Header
                handlePopup={handlePopup}
               nombre={nombre}   
                imagenPerf={imagenPerf}
                description={description}
/>
            
            <Post />

            {activePopup && (
                <PopupForm
                    close={close}
                    type={activePopup}
                    handleSave={handleSave}
                />
            )}
        </>
    );
}

export default Main;
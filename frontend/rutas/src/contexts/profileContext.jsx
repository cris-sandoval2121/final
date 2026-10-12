import { createContext, useContext, useState } from "react";

const ProfileContext = createContext();

export function ProfileProvider({ children }) {


    const [nombre, setNombre] = useState("Usuario");
    const [imagenPerfil, setImagenPerfil] = useState("https://i.pinimg.com/736x/e2/ce/a8/e2cea8c0cfa3bb4fb9ed1ed710bb920d.jpg");

    const [bannerImagen, setBannerImagen] = useState('');
    const [sobreMi, setSobreMi] = useState('');

    return (
        <ProfileContext.Provider
            value={{
                nombre,
                setNombre,
                imagenPerfil,
                setImagenPerfil,

                bannerImagen,
                setBannerImagen,
                sobreMi,
                setSobreMi
            }}
        >
            {children}
        </ProfileContext.Provider>
    );
}

export function useProfile() {
    return useContext(ProfileContext);
                    }
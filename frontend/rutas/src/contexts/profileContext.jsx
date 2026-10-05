import { createContext, useContext, useState } from "react";

const ProfileContext = createContext();

export function ProfileProvider({ children }) {


    const [nombre, setNombre] = useState("");
    const [imagenPerfil, setImagenPerfil] = useState("");

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
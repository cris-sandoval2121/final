import { createContext, useContext, useState } from "react";

const ProfileContext = createContext();

export function ProfileProvider({ children }) {


    const [nombre, setNombre] = useState("Usuario");
    const [imagenPerfil, setImagenPerfil] = useState("https://i.pinimg.com/736x/19/c5/3c/19c53c3030d61e2730fe81eae112049d.jpg");

    const [bannerImagen, setBannerImagen] = useState('https://i.pinimg.com/originals/c7/1f/1c/c71f1cd83ea73ab458eabe8fed20687f.gif');
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
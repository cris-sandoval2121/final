function Profile({handlePopup, nombre, imagenPerf, description}) {
    return ( 
               <div className="perfil">
                    <img className="perfil__imagen" src={imagenPerf} alt="imagen de perfil"></img>


                    <div className="perfil__gustos">
                        <button className="perfil__gustos-btn">Fotos</button>
                        <button className="perfil__gustos-btn">Anime</button>
                        <button className="perfil__gustos-btn">Viajes</button>
                        <button className="perfil__gustos-btn">Musica</button>
                        <button className="perfil__gustos-btn">Historis</button>


                    </div>

                    <div className="perfil__tableros">
                        <img className="perfil__tableros-imagenes" src="https://i.pinimg.com/736x/86/92/ed/8692ed041377064d2811324f9a30b7a2.jpg"></img>
                        <img className="perfil__tableros-imagenes" src="https://i.pinimg.com/736x/5a/ca/de/5acaded7ce8e50fdd93984c816b7b9c8.jpg"></img>

                        <img className="perfil__tableros-imagenes" src="https://i.pinimg.com/736x/dc/17/e0/dc17e0ccfb861ec002e17e8874e5198b.jpg"></img>
                        <img className="perfil__tableros-imagenes" src="https://i.pinimg.com/736x/ce/fe/71/cefe71261c6981e533a2d7b02bd064c3.jpg"></img>

                    </div>


                    <div className="perfil__card">
                        <h1 className="perfil__nombre">{nombre}</h1>
                        <p className="perfil__descrip">{description}</p>
                    </div>

                    <div className="perfil__btn">
                        <button className="perfil__editar" onClick={()=> handlePopup("perfil")}>Editar Perfil</button>
                        <button className="perfil__editar" onClick={()=> handlePopup("description")}>Editar description</button>
                    </div>




7

                </div>
     );
}

export default Profile;
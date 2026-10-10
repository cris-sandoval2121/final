import Nav from '../../components/Header/Nav/Nav'
import { useState, useEffect } from "react";
import { getPublicaciones } from '../../utils/Api';
function Guardados() {
    const [guardados, setGuardados] = useState([]);

    useEffect(()=>{
        const cargarGuardados = async()=>{
            try {
                const data = await getPublicaciones();
                setGuardados(data);

            } catch (error) {
                console.error(error);
                
            }
        }

        cargarGuardados();
    }, [])

    const guardadosFilter = guardados.filter((post) => post.guardado);



    return (

        <div className="guardados">
            <Nav />

            <main className="guardados">

                <div className='guardados__heading'>

                    <div className='guardados__text-box'>
                        <h1 className='guardados__titulo'>Publicaciones guardadas</h1>
                        <p className='guardados__texto'>Tus publicaciones favoritas</p>
                    </div>

                    <div className='guardados__texto-box-dos'>
                        <p className='guardados__texto-box-dos'>12 publicaciones guardadas</p>

                        <div className='guardados__btns'>
                            <button className='guardados__btn-grid'>Grid</button>
                            <button className='guardados__btn-flex'>Flex</button>
                        </div>
                    </div>


                </div>

                {guardadosFilter.map((posteo) => {

                    const textoCorto = posteo.texto.length > 100 ? posteo.texto.slice(0, 190) + "..." : posteo.texto;



                    return(
                          <article className='guardados__post' key={posteo.id}>
                        <img className='guardados__post-imagen' src={posteo.imagen} alt='imagen'/>

                        <div className='guardados__post-caja'>
                            <p className='guardados__post-texto'>{textoCorto}</p>
                            <button className='guardado__post-like'>{posteo.like}Like</button>
                        <button className='guardado__btn-ver'>Ver post</button>
                        </div>

                    </article>
                    )
                  
                })};
            </main>
        </div>
    );
}

export default Guardados;
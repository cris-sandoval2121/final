
const base_URL = 'https://6a4edc6ae785c9ef536d2e5a.mockapi.io/pepito/api/v1';

export const getPublicaciones = async()=>{
    const response = await fetch(`${base_URL}/publicaciones`);

    if(!response.ok){
        throw new Error(`Error: ${response.status}`);
    }

    return response.json();
} 

export const createPublicacion = async(nuevoPost)=>{
    const res = await fetch(`${base_URL}/publicaciones` ,  {
        method: "POST", 
        headers: {
            "content-Type": "application/json",
        },
        body: JSON.stringify(nuevoPost),
    }); 

    if(!res.ok){
        throw new Error(`Error: ${res.status}`);
    }

    return res.json();
};

export const delatePublicacion = async(id)=>{
    const res = await fetch(`${base_URL}/publicaciones/${id}`, {
        method: "DELETE",
        });

        if(!res.ok){
            throw new Error(`Error: ${res.status}`);
        }

        return res.json();


}



// export const updatePost =  async(post)=>{

//     const res = await fetch(`${base_URL}/${post.id}`, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json",
//         },
//             body: JSON.stringify(post),
//     }
//     );

//     if(!res.ok){
//         throw Error(`Error: ${res.status}`);
//     }

//     return res.json()

// }



///////////////////////// comienzo de los metodos de guardado///////:3 T_T
export const getGuardados = async()=>{
    const res = await fetch(`${base_URL}/guardados`);

    if(!res.ok){
        throw new Error(res.status);
    }

    return res.json();

   

} ;


export const posrGuardadosId = async(idPost)=>{
    const res = await fetch(`${base_URL}/guardados`,{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(idPost)
    })

     if(!res.ok){
        throw new Error(`Error: ${res.status}`);
    }

    return res.json();

}

export const deleteGuardado = async (id) => {
    const res = await fetch(`${base_URL}/guardados/${id}`, {
        method: "DELETE",
    });

    if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
    }

    return res.json();
};
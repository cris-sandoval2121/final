const base_URL = "https://6a4edc6ae785c9ef536d2e5a.mockapi.io/pepito/api/v1";

export const getPublicaciones = async () => {
  const response = await fetch(`${base_URL}/publicaciones`);

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  return response.json();
};

export const createPublicacion = async (nuevoPost) => {
  const res = await fetch(`${base_URL}/publicaciones`, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(nuevoPost),
  });

  if (!res.ok) {
    throw new Error(`Error: ${res.status}`);
  }

  return res.json();
};

export const delatePublicacion = async (id) => {
  const res = await fetch(`${base_URL}/publicaciones/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error(`Error: ${res.status}`);
  }

  return res.json();
};

export const updatePost =  async(post, datos)=>{

    const res = await fetch(`${base_URL}/publicaciones/${post}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
            body: JSON.stringify(datos),
    }
    );

    if(!res.ok){
        throw Error(`Error: ${res.status}`);
    }

    return res.json()

}

///////////////////////// comienzo de los metodos de guardado///////:3 T_T
export const getGuardados = async () => {
  const res = await fetch(`${base_URL}/guardados`);

  if (!res.ok) {
    throw new Error(`Error al obtener guardados: ${res.status}`);
  }

  return res.json();
};

export const posrGuardadosId = async (idPost) => {
  const res = await fetch(`${base_URL}/guardados`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(idPost),
  });

  if (!res.ok) {
    throw new Error(`Error: ${res.status}`);
  }

  return res.json();
};

export const deleteGuardado = async (id) => {
  const res = await fetch(`${base_URL}/guardados/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error(`Error: ${res.status}`);
  }

  return res.json();
};

//////////////////////////
const BASE_URL_PERFIL = "https://6ac850c375a4ce3fe7228d3c.mockapi.io";

// GET: obtener los perfiles
export const getPerfil = async () => {
  const response = await fetch(`${BASE_URL_PERFIL}/perfil`);

  if (!response.ok) {
    throw new Error(`Error al obtener perfiles: ${response.status}`);
  }

  return response.json();
};

// POST: crear un perfil nuevo
export const postPerfil = async (datosPerfil) => {
  const response = await fetch(`${BASE_URL_PERFIL}/perfil`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datosPerfil),
  });

  if (!response.ok) {
    throw new Error(`Error al crear perfil: ${response.status}`);
  }

  return response.json();
};

// PUT: actualizar un perfil existente por su ID
export const actualizarPerfil = async (id, perfilDatos) => {
  const response = await fetch(`${BASE_URL_PERFIL}/perfil/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(perfilDatos),
  });

  if (!response.ok) {
    throw new Error(`Error al actualizar perfil: ${response.status}`);
  }

  return response.json();
};

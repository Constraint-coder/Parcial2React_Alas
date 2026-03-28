const url = import.meta.env.VITE_URL_BACK

const categorias = async()=>{
    try {
        const response = await fetch(url+'/categorias')
      const data = await response.json() 
      return data.data
    } catch (error) {
        console.log(error.message)
    }
}


// 🔹 POST
const crearCategorias = async (data) => {
  try {
    const response = await fetch(`${url}/categorias`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    return await response.json();
  } catch (error) {
    console.log(error.message);
  }
};

// 🔹 PUT
const editarCategorias = async (data, id) => {
  try {
    const response = await fetch(`${url}/categorias/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    return await response.json();
  } catch (error) {
    console.log(error.message);
  }
};

// 🔹 DELETE
const eliminarCategorias = async (id) => {
  try {
    const response = await fetch(`${url}/categorias/${id}`, {
      method: 'DELETE'
    });

    return await response.json();
  } catch (error) {
    console.log(error.message);
  }
};

export {
  categorias,
  crearCategorias,
  editarCategorias,
  eliminarCategorias
};
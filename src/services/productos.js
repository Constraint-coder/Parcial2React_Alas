const url = 'http://localhost:8000'

const productos = async()=>{
    try {
        const res = await fetch(url+'/api/productos');
        const data = await res.json();
                console.log(data)
        return data;

    } catch (error) {
        console.log(error.message)
    }
}

// 🔹 POST
const crearProductos = async (data) => {
  try {
    const response = await fetch(url+'/api/productos', {
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
const editarProductos = async (data, id) => {
  try {
    const fullUrl = url+'/api/productos/'+id;
    console.log('URL:', fullUrl);       
    console.log('Data:', data);       

    const response = await fetch(fullUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    console.log('Status:', response.status);

    if (!response.ok) {
      const text = await response.text(); 
      console.log('Respuesta del servidor:', text);
      throw new Error(`Error ${response.status}`);
    }

    
  } catch (error) {
    console.log(error.message);
  }
};
// 
const eliminarProductos = async (id) => {
  try {
    const response = await fetch(url+'/api/productos/'+id, { 
      method: 'DELETE' 
    });
    return await response.json();
  } catch (error) {
    console.log(error.message);
  }
};

export {
  productos,
  crearProductos,
  editarProductos,
  eliminarProductos
};
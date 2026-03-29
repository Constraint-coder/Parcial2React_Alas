const url = 'http://localhost:8000'

const proveedores = async()=>{
    try {
        const res = await fetch(url+'/api/proveedores');
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error.message)
    }
}

// 🔹 POST
const crearProveedores = async (data) => {
  try {
    const response = await fetch(url+'/api/proveedores', {
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
const editarProveedores = async (data, id) => {
  try {
    const fullUrl = url+'/api/proveedores/'+id;
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
const eliminarProveedores = async (id) => {
  try {
    const response = await fetch(url+'/api/proveedores/'+id, { 
      method: 'DELETE' 
    });
    return await response.json();
  } catch (error) {
    console.log(error.message);
  }
};

export {
  proveedores,
  crearProveedores,
  editarProveedores,
  eliminarProveedores
};
const url = process.env.VITE_URL;

const productos = async()=>{
    try {
        const response = await fetch(url+'/productos')
      const data = await response.json() 
      return data.data

      return data.data
    } catch (error) {
        console.log(error.message)
    }
};



const crearProductos = async(data)=>{
    try {
        const response = await fetch(url+'/productos',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const res = await response.json() 
        return res.data
    } catch (error) {
        console.log(error.message)
    }
};

const editarProductos = async (data, id) => {
    try {
        const response = await fetch(`${url}/productos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const res = await response.json();
        return res.data;

    } catch (error) {
        console.log(error.message);
    }
};

const eliminarProductos = async (data, id) => {
    try {
        const response = await fetch(`${url}/productos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const res = await response.json();
        return res.data;

    } catch (error) {
        console.log(error.message);
    }
};


export {
  productos,
  crearProductos,
  editarProductos,
  eliminarProductos
  
}
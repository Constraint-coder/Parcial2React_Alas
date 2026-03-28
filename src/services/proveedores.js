const url = process.env.VITE_URL;

const proveedores = async()=>{
    try {
        const response = await fetch(url+'/proveedores')
      const data = await response.json() 
      return data.data

      return data.data
    } catch (error) {
        console.log(error.message)
    }
};



const crearProveedores = async(data)=>{
    try {
        const response = await fetch(url+'/proveedores',{
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

const editarProveedores = async (data, id) => {
    try {
        const response = await fetch(`${url}/proveedores/${id}`, {
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

const eliminarProveedores = async (data, id) => {
    try {
        const response = await fetch(`${url}/proveedores/${id}`, {
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
  proveedores,
  crearProveedores,
  editarProveedores,
  eliminarProveedores
  
}
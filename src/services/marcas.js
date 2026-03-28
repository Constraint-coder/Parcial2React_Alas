const url = process.env.VITE_URL;

const marcas = async()=>{
    try {
        const response = await fetch(url+'/marcas')
      const data = await response.json() 
      return data.data

      return data.data
    } catch (error) {
        console.log(error.message)
    }
};



const crearMarcas = async(data)=>{
    try {
        const response = await fetch(url+'/marcas',{
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

const editarMarcas = async (data, id) => {
    try {
        const response = await fetch(`${url}/marcas/${id}`, {
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

const eliminarMarcas = async (data, id) => {
    try {
        const response = await fetch(`${url}/marcas/${id}`, {
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
  marcas,
  crearMarcas,
  editarMarcas,
  eliminarMarcas
  
}
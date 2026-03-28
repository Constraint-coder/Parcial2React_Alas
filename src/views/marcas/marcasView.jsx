import React, { useEffect, useState } from 'react';
import { MarcasComponent } from '../../components/marcas/MarcasComponent';
import '../../styles/main.css';
import { marcas } from '../../services/marcas';


export function Marcas() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const cargarMarcas = async () => {
      const result = await marcas();
      setData(result);
    };

    cargarMarcas();
  }, []);

  return (
    <>
      <h1 className='text-center text-4xl font-bold'>Categorias</h1>

      <div className='grid grid-cols-4 gap-2'>
        {
          data.map(item => (
            <MarcasComponent item={item} key={item.id} />
          ))
        }
      </div>
    </>
  );
}
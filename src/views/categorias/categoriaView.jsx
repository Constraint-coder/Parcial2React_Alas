import React, { useEffect, useState } from 'react';
import { CategoriaComponent } from '../../components/categorias/categoriaComponent';
import '../../styles/main.css';
import { categorias } from '../../services/categorias';


export function Categoria() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const cargarCategorias = async () => {
      const result = await categorias();
      setData(result);
    };

    cargarCategorias();
  }, []);

  return (
    <>
      <h1 className='text-center text-4xl font-bold'>Categorias</h1>

      <div className='grid grid-cols-4 gap-2'>
{
  Array.isArray(data) && data.map(item => (
    <CategoriaComponent item={item} key={item.id} />
  ))
}
      </div>
    </>
  );
}
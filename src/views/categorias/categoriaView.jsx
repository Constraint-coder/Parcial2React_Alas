import React, { useEffect, useState } from 'react';
import { CategoriaComponent } from '../../components/categorias/CategoriaComponent';
import AgregarCategoria from '../../components/categorias/AgregarCategoria';
import { categorias, eliminarCategorias, editarCategorias } from '../../services/categorias';
import '../../styles/main.css'

export function Categoria() {
  const [data, setData] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false); 

  const cargarCategorias = async () => {
    const result = await categorias();
    setData(result);
  };

  useEffect(() => {
    cargarCategorias();
  }, []);

  const handleEditar = async (id, nuevosDatos) => {
    await editarCategorias(nuevosDatos, id);
    setData(data.map(item => item.id === id ? { ...item, ...nuevosDatos } : item));
  };

  const handleEliminar = async (id) => {
    await eliminarCategorias(id);
    setData(data.filter(item => item.id !== id));
  };

  return (
    <>
      <h1 className='text-center text-4xl font-bold'>Categorias</h1>

      <button onClick={() => setMostrarFormulario(true)} className='agregar'>Agregar</button> {/* ✅ muestra formulario */}

      {mostrarFormulario && (
        <AgregarCategoria
          onGuardar={cargarCategorias}                
          onCerrar={() => setMostrarFormulario(false)}  
        />
      )}

      <div className='grid grid-cols-4 gap-2'>
        {Array.isArray(data) && data.map(item => (
          <CategoriaComponent
            item={item}
            key={item.id}
            onEditar={handleEditar}
            onEliminar={handleEliminar}
          />
        ))}
      </div>
    </>
  );
}
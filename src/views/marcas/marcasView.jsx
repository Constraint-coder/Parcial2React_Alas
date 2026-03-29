import React, { useEffect, useState } from 'react';
import { MarcasComponent } from '../../components/marcas/MarcasComponent';
import AgregarMarcas from '../../components/marcas/AgregarMarcas';
import { marcas, eliminarMarcas, editarMarcas } from '../../services/marcas';
import '../../styles/main.css'

export function Marcas() {
  const [data, setData] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const cargarMarcas = async () => {
    const result = await marcas();
    setData(result);
  };

  useEffect(() => {
    cargarMarcas();
  }, []);

  const handleEditar = async (id, nuevosDatos) => {
    await editarMarcas(nuevosDatos, id);
    setData(data.map(item => item.id === id ? { ...item, ...nuevosDatos } : item));
  };

  const handleEliminar = async (id) => {
    await eliminarMarcas(id);
    setData(data.filter(item => item.id !== id));
  };

  return (
    <>
      <h1 className='text-center text-4xl font-bold'>Marcas</h1>

      <button onClick={() => setMostrarFormulario(true)} className='agregar'>Agregar</button> {/* ✅ muestra formulario */}

      {mostrarFormulario && (
        <AgregarMarcas
          onGuardar={cargarMarcas}                
          onCerrar={() => setMostrarFormulario(false)}  
        />
      )}

      <div className='grid grid-cols-4 gap-2'>
        {Array.isArray(data) && data.map(item => (
          <MarcasComponent
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
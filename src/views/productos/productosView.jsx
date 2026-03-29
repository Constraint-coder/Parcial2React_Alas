import React, { useEffect, useState } from 'react';
import { ProductosComponent } from '../../components/productos/productosComponent';
import AgregarProductos from '../../components/productos/AgregarProductos';
import { productos, eliminarProductos, editarProductos } from '../../services/productos';
import '../../styles/main.css';

export function Productos() {
  const [data, setData] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const cargarProductos = async () => {
    const result = await productos();
    setData(result);
  };
console.log(data)
  useEffect(() => {
    cargarProductos();
  }, []);

  const handleEditar = async (id, nuevosDatos) => {
    await editarProductos(nuevosDatos, id);
    setData(data.map(item => item.id === id ? { ...item, ...nuevosDatos } : item));
  };

  const handleEliminar = async (id) => {
    await eliminarProductos(id);
    setData(data.filter(item => item.id !== id));
  };

  return (
    <>
      <h1 className='text-center text-4xl font-bold'>Productos</h1>

      <button onClick={() => setMostrarFormulario(true)} className='agregar'>Agregar</button>

      {mostrarFormulario && (
        <AgregarProductos
          onGuardar={cargarProductos}
          onCerrar={() => setMostrarFormulario(false)}
        />
      )}

      <div className='grid grid-cols-4 gap-2'>
        {Array.isArray(data) && data.map(item => (
          <ProductosComponent
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
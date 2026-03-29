import React, { useState } from 'react';
import { crearMarcas } from '../../services/marcas';

export default function AgregarMarcas({ onGuardar, onCerrar }) {
  const [nombre, setNombre] = useState('');
  const [estado, setEstado] = useState(true);

  const handleGuardar = async () => {
    if (!nombre.trim()) return;

    const data = { nombre, estado };
    await crearMarcas(data);
    
    onGuardar();
    onCerrar();  
  };

  return (
    <div className='Form shadow-xs'>
      <div className='title'>Nueva Marca</div>

      <div className='form-group'>
        <label>Nombre</label>
        <input
          type='text'
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder='Nombre de la marca'
        />
      </div>

      <div className='form-group'>
        <label>Estado</label>
        <select value={estado} onChange={(e) => setEstado(e.target.value === 'true')}>
          <option value='true'>Activo</option>
          <option value='false'>Inactivo</option>
        </select>
      </div>

      <div className='bontonera'>
        <button className='guardar' onClick={handleGuardar}>Guardar</button>
        <button className='cancelar' onClick={onCerrar}>Cancelar</button>
      </div>
    </div>
  );
}
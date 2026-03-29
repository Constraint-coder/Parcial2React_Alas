import React, { useState } from 'react';
import { crearProveedores } from '../../services/proveedores';

export default function AgregarProveedores({ onGuardar, onCerrar }) {
  const [nombre,   setNombre]   = useState('');
  const [telefono, setTelefono] = useState('');
  const [estado,   setEstado]   = useState(true);

  const handleGuardar = async () => {
    if (!nombre.trim()) return;

    const data = { nombre, telefono, estado };
    await crearProveedores(data);
    
    onGuardar();
    onCerrar();  
  };

  return (
    <div className='Form shadow-xs'>
      <div className='title'>Nuevo Proveedor</div>

      <div className='form-group'>
        <label>Nombre</label>
        <input
          type='text'
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder='Nombre del proveedor'
        />
      </div>

      <div className='form-group'>
        <label>Teléfono</label>
        <input
          type='text'
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          placeholder='Teléfono (opcional)'
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
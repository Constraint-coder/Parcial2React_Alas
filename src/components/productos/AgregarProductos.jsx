import React, { useState, useEffect } from 'react';
import { crearProductos } from '../../services/productos';
import { categorias } from '../../services/categorias';
import { marcas } from '../../services/marcas';
import { proveedores } from '../../services/proveedores';

export default function AgregarProductos({ onGuardar, onCerrar }) {
  const [nombre, setNombre]           = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio]           = useState('');
  const [categoriaId, setCategoriaId] = useState('');
  const [marcaId, setMarcaId]         = useState('');
  const [proveedorId, setProveedorId] = useState('');

  const [listaCategorias,  setListaCategorias]  = useState([]);
  const [listaMarcas,      setListaMarcas]      = useState([]);
  const [listaProveedores, setListaProveedores] = useState([]);

  useEffect(() => {
    const cargar = async () => {
      const [cats, mars, provs] = await Promise.all([
        categorias(),
        marcas(),
        proveedores(),
      ]);
      setListaCategorias(cats   ?? []);
      setListaMarcas(mars       ?? []);
      setListaProveedores(provs ?? []);
    };
    cargar();
  }, []);

  const handleGuardar = async () => {
    if (!nombre.trim() || !precio || !categoriaId || !marcaId || !proveedorId) return;

    const data = {
      nombre,
      descripcion,
      precio,
      categoria_id:  categoriaId,
      marca_id:      marcaId,
      proveedor_id:  proveedorId,
    };

    await crearProductos(data);
    onGuardar();
    onCerrar();
  };

  return (
    <div className='Form shadow-xs'>
      <div className='title'>Nuevo Producto</div>

      <div className='form-group'>
        <label>Nombre *</label>
        <input
          type='text'
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder='Nombre del producto'
        />
      </div>

      <div className='form-group'>
        <label>Descripción</label>
        <input
          type='text'
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder='Descripción (opcional)'
        />
      </div>

      <div className='form-group'>
        <label>Precio *</label>
        <input
          type='number'
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          placeholder='0.00'
        />
      </div>

      <div className='form-group'>
        <label>Categoría *</label>
        <select value={categoriaId} onChange={(e) => setCategoriaId(e.target.value)}>
          <option value=''>Selecciona una categoría</option>
          {listaCategorias.map(cat => (
            <option key={cat.id} value={cat.id}>{cat.nombre}</option>
          ))}
        </select>
      </div>

      <div className='form-group'>
        <label>Marca *</label>
        <select value={marcaId} onChange={(e) => setMarcaId(e.target.value)}>
          <option value=''>Selecciona una marca</option>
          {listaMarcas.map(mar => (
            <option key={mar.id} value={mar.id}>{mar.nombre}</option>
          ))}
        </select>
      </div>

      <div className='form-group'>
        <label>Proveedor *</label>
        <select value={proveedorId} onChange={(e) => setProveedorId(e.target.value)}>
          <option value=''>Selecciona un proveedor</option>
          {listaProveedores.map(prov => (
            <option key={prov.id} value={prov.id}>{prov.nombre}</option>
          ))}
        </select>
      </div>

      <div className='bontonera'>
        <button className='guardar' onClick={handleGuardar}>Guardar</button>
        <button className='cancelar' onClick={onCerrar}>Cancelar</button>
      </div>
    </div>
  );
}
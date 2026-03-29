import React, { useRef } from 'react';
import '../../styles/main.css';

export function ProductosComponent({ item, onEditar, onEliminar }) {
  const cardRef    = useRef(null);
  const itemActual = useRef(item); // ✅ copia mutable

  function mostrarFormulario() {
    const card = cardRef.current;
    const data = itemActual.current; // ✅ datos más recientes

    card.innerHTML = `
      <div class="title">Editar Producto</div>
      <div class="form-group">
        <label>Nombre</label>
        <input type="text" id="input-nombre-${data.id}" value="${data.nombre}" />
      </div>
      <div class="form-group">
        <label>Descripción</label>
        <input type="text" id="input-descripcion-${data.id}" value="${data.descripcion ?? ''}" />
      </div>
      <div class="form-group">
        <label>Precio</label>
        <input type="number" id="input-precio-${data.id}" value="${data.precio}" />
      </div>
      <div class="bontonera">
        <button class="guardar" id="btn-guardar-${data.id}">Guardar</button>
        <button class="cancelar" id="btn-cancelar-${data.id}">Cancelar</button>
      </div>
    `;

    document.getElementById(`btn-guardar-${data.id}`).addEventListener('click', () => {
      const nombre      = document.getElementById(`input-nombre-${data.id}`).value;
      const descripcion = document.getElementById(`input-descripcion-${data.id}`).value;
      const precio      = document.getElementById(`input-precio-${data.id}`).value;

      const nuevoDato = { nombre, descripcion, precio };
      itemActual.current = { ...itemActual.current, ...nuevoDato }; // ✅ actualiza copia local
      onEditar(data.id, nuevoDato);
      restaurarVista();
    });

    document.getElementById(`btn-cancelar-${data.id}`).addEventListener('click', () => {
      restaurarVista();
    });
  }

  function restaurarVista() {
    const card = cardRef.current;
    const data = itemActual.current; // ✅ datos actualizados

    card.innerHTML = `
      <div class="title">${data.nombre}</div>
      <div class="item">Descripcion: ${data.descripcion ?? ''}</div>
      <div class="item">Precio: ${data.precio}</div>
      <div class="item">Categoria: ${data.categoria?.nombre ?? ''}</div>
      <div class="item">Marca: ${data.marca?.nombre ?? ''}</div>
      <div class="item">Proveedor: ${data.proveedor?.nombre ?? ''}</div>
      <div class="bontonera">
        <button class="editar"   id="btn-editar-${data.id}">Editar</button>
        <button class="eliminar" id="btn-eliminar-${data.id}">Eliminar</button>
      </div>
    `;

    document.getElementById(`btn-editar-${data.id}`)
      .addEventListener('click', mostrarFormulario);
    document.getElementById(`btn-eliminar-${data.id}`)
      .addEventListener('click', () => onEliminar(data.id));
  }

  return (
    <div className='card shadow-xs' id={item.id} ref={cardRef}>
      <div className='title'>{item.nombre}</div>
      <div className='item'>Descripcion: {item.descripcion}</div>
      <div className='item'>Precio: {item.precio}</div>
      <div className='item'>Categoria: {item.categoria?.nombre}</div>
      <div className='item'>Marca: {item.marca?.nombre}</div>
      <div className='item'>Proveedor: {item.proveedor?.nombre}</div>
      <div className='bontonera'>
        <button className='editar'   onClick={mostrarFormulario}>Editar</button>
        <button className='eliminar' onClick={() => onEliminar(item.id)}>Eliminar</button>
      </div>
    </div>
  );
}
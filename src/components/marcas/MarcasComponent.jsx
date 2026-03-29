import React, { useRef } from 'react';

export function MarcasComponent({ item, onEditar, onEliminar }) {
  const cardRef    = useRef(null);
  const itemActual = useRef(item); // ✅ copia mutable

  function mostrarFormulario() {
    const card = cardRef.current;
    const data = itemActual.current; // ✅ datos más recientes

    card.innerHTML = `
      <div class="title">Editar Marca</div>
      <div class="form-group">
        <label>Nombre</label>
        <input type="text" id="input-nombre-${data.id}" value="${data.nombre.trim()}" />
      </div>
      <div class="form-group">
        <label>Estado</label>
        <select id="input-estado-${data.id}">
          <option value="true"  ${data.estado ? 'selected' : ''}>Activo</option>
          <option value="false" ${!data.estado ? 'selected' : ''}>Inactivo</option>
        </select>
      </div>
      <div class="bontonera">
        <button class="guardar" id="btn-guardar-${data.id}">Guardar</button>
        <button class="cancelar" id="btn-cancelar-${data.id}">Cancelar</button>
      </div>
    `;

    document.getElementById(`btn-guardar-${data.id}`).addEventListener('click', () => {
      const nombre = document.getElementById(`input-nombre-${data.id}`).value;
      const estado = document.getElementById(`input-estado-${data.id}`).value === 'true';

      const nuevoDato = { nombre, estado };
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
      <div class="title">${data.nombre.trim()}</div>
      <div class="item">${data.estado ? 'Activo' : 'Inactivo'}</div>
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
      <div className='title'>{item.nombre.trim()}</div>
      <div className='item'>{item.estado ? 'Activo' : 'Inactivo'}</div>
      <div className='bontonera'>
        <button className='editar'   onClick={mostrarFormulario}>Editar</button>
        <button className='eliminar' onClick={() => onEliminar(item.id)}>Eliminar</button>
      </div>
    </div>
  );
}
import React from 'react';
import '../../styles/main.css';

export function CategoriaComponent({ item }) {
  return (
    <div className='card shadow-xs' id={item.id}>
      <div className='title'>{item.nombre.trim()}</div>
      
      <div className='item'>{item.estado}</div>

      <div className='bontonera'>
        <button className='editar'>Editar</button>
        <button className='eliminar'>Eliminar</button>
      </div>
    </div>
  );
}
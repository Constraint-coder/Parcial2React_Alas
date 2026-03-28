import React from 'react'
import '../../styles/main.css'
export function productosComponent({item}) {
   
    
  return (
    <div className='card shadow-xs' id='`{item.id}`'>
        <div className='title'>{item.nombre}</div>
        <div className='item'>{item.descripcion}</div>
        <div className='item'>precio: {item.precio}</div>
        <div className='item'>{item.categoria.nombre}</div>
        <div className='item'>{item.marca.nombre}</div>
        <div className='item'>{item.proveedor.nombre}</div>
        <div className='bontonera'>
            <bottom className ='editar'> Editar </bottom>
            <bottom className ='eliminar'>Eliminar </bottom>
        </div>
    </div>
  )
}
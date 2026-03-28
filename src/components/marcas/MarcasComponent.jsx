import React from 'react'
import '../../styles/main.css'
export function MarcasComponent({item}) {
   
    
  return (
    <div className='card shadow-xs' id='`{item.id}`'>
        <div className='title'>{item.nombre}</div>
        <div className='item'>{item.estado}</div>
        <div className='bontonera'>
            <bottom className ='editar'> Editar </bottom>
            <bottom className ='eliminar'>Eliminar </bottom>
        </div>
    </div>
  )
}
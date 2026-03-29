import React, { useState } from 'react';
import { Categoria } from '../src/views/categorias/categoriaView';
import { Marcas } from './views/marcas/marcasView';
import { Productos } from './views/productos/productosView';
import { Proveedores } from './views/proveedores';
import './styles/main.css';

const vistas = {
  Categorias: <Categoria />,
  Marcas:     <Marcas />,
  Productos:  <Productos />,
  Proveedores:<Proveedores />,
};

function App() {
  const [vistaActual, setVistaActual] = useState('Categorias');

  return (
    <div className="container">
      <nav className="nav">
        {Object.keys(vistas).map(vista => (
          <button
            key={vista}
            className={`nav-btn ${vistaActual === vista ? 'activo' : ''}`}
            onClick={() => setVistaActual(vista)}
          >
            {vista}
          </button>
        ))}
      </nav>

      <div className="vista">
        {vistas[vistaActual]}
      </div>
    </div>
  );
}

export default App;
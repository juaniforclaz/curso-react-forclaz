import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './Components/NavBar';
import { Hero } from './Components/Hero';
import { Card } from './Components/Card/Card';
import { Counter } from './Components/Counter/Counter'
import { Counter2 } from './Components/Counter2/Counter2'
import { useState } from 'react';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import { ItemCard } from './Components/ItemCard/ItemCard'

function App() {

  const [mostrar, setMostrar] = useState(true)

  const mostrarCounter = () => {
    setMostrar(!mostrar)
  }

  return (
    <div className="container">
      <NavBar />
      <Hero />
      <div className='row mb-5'>
        <div className='col'>
          <Card title='Carteras' subtitle='Categoria 1' button='Ver mas' />
        </div>
        <div className='col'>
          <Card title='Riñoneras' subtitle='Categoria 2' button='Ver mas' />
        </div>
        <div className='col'>
          <Card title='Bolsos' subtitle='Categoria 3' button='Ver mas' />
        </div>
      </div>
      <div className='row'>
        <div className='col rounded'>
          <h3 className='mb-3'>Catalogo</h3>
          <ItemListContainer/>
        </div>
      </div>
      <div className='row mb-5'>
        <div className='col'>
          <Counter />
        </div>
        <div className='col'>
          <Counter2 />
        </div>
      </div>
      <div className='row mb-5'>
        <button className='btn btn-danger' onClick={mostrarCounter}>Mostrar/Ocultar</button>
      </div>
    </div >
  )
}

export default App;

import React from 'react'
import TableroProducto from '../components/TableroProducto'

const Home = () => {
  return (
    <section className='mx-auto w-full max-w-7xl px-4 py-8'>
      <div>
        <h1 className='text-3xl'>Nuestros Productos</h1>
        <p className='text-xl'>Descubrí algunos de nuestros productos más populares.</p>
        <TableroProducto />      
        </div>      
    </section>
  )
}

export default Home

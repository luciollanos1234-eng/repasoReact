import { useEffect, useState } from 'react'
import { Cardproducto } from './CardProducto'
import axios from 'axios'
import { type Product } from '../interfaces/products.interfaces'

const TableroProducto = () => {
  const [products, setProducts] = useState<Product[] | null>(null)

useEffect(() => {
  const obtenerProductos = async () => {
    try {
      const respuesta = await axios.get('https://dummyjson.com/products')
      setProducts(respuesta.data.products)
    } catch (error) {
      console.error(error)
    }
  }
  obtenerProductos()
}, [])

console.log(products)

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
      {products && products.map((product) => (
        <Cardproducto product={product} key={product.id} />
      ))}
    </div>
  )
}

export default TableroProducto

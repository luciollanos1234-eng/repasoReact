import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import axios from 'axios'
import type { Product } from '../interfaces/products.interfaces'

const ProductoDetalle = () => {

  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        const respuesta = await axios.get(
          `https://dummyjson.com/products/${id}`
        )
        setProduct(respuesta.data)
      } catch (error) {
        console.error('Error al obtener el producto:', error)
      } finally {
        setLoading(false)
      }
    }
    obtenerProducto()
  }, [id])
  if (loading) {
    return <p className="p-10 text-center">Cargando producto...</p>
  }
  if (!product) {
    return <p className="p-10 text-center">Producto no encontrado.</p>
  }

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-8">
      <Link
        to="/"
        className="mb-8 inline-block text-blue-700 hover:text-blue-900"
      >
        ← Volver a productos
      </Link>
      <section className="grid grid-cols-1 gap-10 rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">
        <div className="flex min-h-[400px] items-center justify-center rounded-xl bg-gray-50 p-6">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-full max-h-[500px] w-full object-contain"
          />
        </div>
        <div className="flex flex-col items-start">
          <span className="mb-3 text-blue-800 capitalize">
            {product.category}
          </span>
          <h1 className="mb-5 text-3xl font-bold text-gray-900 md:text-4xl">
            {product.title}
          </h1>
          <p className="mb-6 text-lg leading-relaxed text-gray-600">
            {product.description}
          </p>
          <div className="mb-6 flex items-center gap-4">
            <span className="text-4xl font-bold text-gray-900">
              ${product.price}
            </span>
            <span className="rounded bg-blue-100 px-3 py-1 text-blue-800">
              ★ {product.rating}
            </span>
          </div>
          <button
            className="rounded-lg bg-blue-700 px-7 py-4 font-semibold text-white hover:bg-blue-800"
            onClick={() => alert(`${product.title} añadido al carrito`)}
          >
            Añadir al carrito
          </button>
          <div className="mt-8 space-y-2 text-gray-600">
            <p>
              <strong>Marca:</strong> {product.brand || 'No especificada'}
            </p>
            <p>
              <strong>Stock:</strong> {product.stock} unidades
            </p>
            <p>
              <strong>Descuento:</strong> {product.discountPercentage}%
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProductoDetalle

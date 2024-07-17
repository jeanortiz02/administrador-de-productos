import { ActionFunctionArgs, Link, useLoaderData } from "react-router-dom"
import { getProducts, updatedProductAvailability } from "../services/ProductService";
import { Product } from "../types";
import ProductDetail from "../components/ProductDetail";


export async function loader() {
  const products = await getProducts()

  return products
}

export async function action ({request} : ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData())
  await updatedProductAvailability(+data.id);
  return null
}

export default function Products() {

  const products = useLoaderData() as Product[];
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-4xl font-black text-slate-500">Productos</h2>
        <Link
          to="productos/nuevo"
          className="rounded bg-indigo-600 text-white p-3 text-sm font-bold shadow-sm hover:bg-indigo-500"
        >Agregar producto</Link>
      </div>

      <div className="p-2">
        <table className="w-full mt-5 table-auto">
          <thead className="bg-slate-800 text-white">
              <tr>
                  <th className="p-2">Producto</th>
                  <th className="p-2">Precio</th>
                  <th className="p-2">Disponibilidad</th>
                  <th className="p-2">Acciones</th>
              </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <ProductDetail
                  key={product.id}
                  product={product}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

import ProductsTable from "../components/ProductsTable"

const Products = () => {
  const products = [{ id: 1, name: "Milk", buying_price: 50, selling_price: 60 }]
  return (
    <div>
      <h2>Products Page</h2>
      <ProductsTable products={products} />
    </div>
  )
}

export default Products

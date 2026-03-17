const ProductsTable = ({ products }) => {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Buying</th>
          <th>Selling</th>
        </tr>
      </thead>

      <tbody>
        {products.map(p => (
          <tr key={p.id}>
            <td>{p.id}</td>
            <td>{p.name}</td>
            <td>{p.buying_price}</td>
            <td>{p.selling_price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ProductsTable

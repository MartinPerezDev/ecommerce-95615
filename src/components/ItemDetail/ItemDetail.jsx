
const ItemDetail = ({ product }) => {
  return (
    <div>
      <div>
        <img src={product.image} alt="" />
      </div>

      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
      </div>
    </div>
  )
}

export default ItemDetail

const ProductPage = (props) => {
    return (
        <div>
            <h1>Product Page</h1>
            {
                props.products.map(product => {
                    return (
                        <div key={product.id}>
                            <h2>{product.name}</h2>
                            <button>Remove</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductPage
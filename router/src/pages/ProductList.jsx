import { Link } from "react-router-dom"
import { products } from "../data/products";

const ProductList = () => {

    return(
        <>
            <section className="product-list">
                <h1>상품목록</h1>
                <div>
                    {products.map((product) => (
                        <div key={product.id}>
                            <h3>
                              <Link to={`/products/${product.id}`}>{product.name}</Link>
                            </h3>
                            <p>가격: {product.price}원</p>
                            <p>설명: {product.description}</p>
                        </div>
                    ))}
                </div>  
            </section>
        </>
    )
}

export default ProductList
import { Link } from 'react-router-dom';
function Products(props) {
    const { product } = props;
    function addtocart(e, product) {
        console.log(product);
    }
    return (
        <>
            <section>
                <div className="card ms-3" style={{ width: "18rem" }}>
                    <img src="/" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{product.productName}</h5>
                        <p className="card-text">{product.productDesc}</p>
                        <Link to="/" className="btn btn-primary">{product.productPrice}</Link>
                        <button className="btn btn-success ms-2" onClick={(e) => { addtocart(e, product) }}>Add to Cart</button>
                    </div>
                </div>
            </section>
        </>

    );
}

export default Products;
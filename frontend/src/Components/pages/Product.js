import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { LoginContext } from '../../LoginContex'

function Products(props) {
    const { product } = props;
    const { cart, setcart } = useContext(LoginContext)

    function addtocart(e, product) {
        // console.log(product);
        let _cart = { ...cart }
        if (!_cart.items) {
            _cart.items = {}
        }

        if (!_cart.items[product._id]) {
            _cart.items[product._id] = 1
        } else {
            _cart.items[product._id] += 1
        }

        if (!_cart.totalitems) {
            _cart.totalitems = 1
        } else {
            _cart.totalitems += 1
        }

        setcart(_cart)
        // console.log(cart);
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
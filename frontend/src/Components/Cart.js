import { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { LoginContext } from '../LoginContex'

function Cart() {
    let totalamount = 0;
    const { cart, setcart, userLoginName } = useContext(LoginContext);
    const [productCtr, setproductCtr] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        if (!cart.items) {
            return
        }
        fetch('/addcartproducts', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ids: Object.keys(cart.items) })
        }).then((res) => {
            return res.json()
        }).then((data) => {
            // console.log(data);
            setproductCtr(data)
        })
    }, []);

    // This function calculates the quantity of the products added by the user
    function handlequnty(id) {
        return cart.items[id]
    };

    // This function calculates the total price per product
    function handleprice(id, pp) {
        totalamount += handlequnty(id) * pp;
        return handlequnty(id) * pp;
    };

    // This is the incremental function to increase the quantity of the product
    function handleincrement(e, id) {
        let currentqunty = handlequnty(id)
        let _cart = { ...cart }
        _cart.items[id] = currentqunty + 1
        _cart.totalitems += 1
        setcart(_cart)
    };

    // This is the decremental function to decrease the quantity of the product
    function handledecrement(e, id) {
        let currentqunty = handlequnty(id)
        if (currentqunty === 1) {
            return
        }
        let _cart = { ...cart }
        _cart.items[id] = currentqunty - 1
        _cart.totalitems -= 1
        setcart(_cart)
    };

    // We will send the username inside the params so we can use it in the backend instead of sending it in the body data
    function handleCheckout() {
        fetch(`/checkout/${userLoginName}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cart)
        })
        setcart('')
        alert("Order has been places successfully!")
        navigate('/products')
    };



    return (
        <>
            {productCtr.length ?
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <table className='table table-hover table-responsive'>
                                <thead>
                                    <tr>
                                        <th>S.No</th>
                                        <th>Product Name</th>
                                        <th>Product Quantity</th>
                                        <th>Product Price</th>
                                        <th>Total Amount</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productCtr.map((result, key) => (
                                        <tr key={key}>
                                            <td>{key + 1}</td>
                                            <td>{result.productName}</td>
                                            <td><button className='btn btn-primary' onClick={(e) => { handledecrement(e, result._id) }}>-</button>  {handlequnty(result._id)}  <button className='btn btn-primary' onClick={(e) => { handleincrement(e, result._id) }}>+</button></td>
                                            <td>{result.productPrice}</td>
                                            <td>{handleprice(result._id, result.productPrice)}</td>
                                            <td></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className='row mt-3'>
                            <div className='col-md-12'>
                                <div>Total amout to be paid<h4>Rs {totalamount}</h4></div>
                            </div>
                            <div className='col-md-12'>
                                <button className='btn btn-success' onClick={handleCheckout}>Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <>
                    <div className='container mt-5'>
                        <div className='row text-center'>
                            <div className='col-md-12'>
                                <h3>Sorry the cart is empty! Please Add Some Products</h3>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    );
}

export default Cart;
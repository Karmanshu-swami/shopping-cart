import { useEffect, useState } from 'react';
import Products from './pages/Product';

function ViewAllProducts() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('/getallproducts')
            .then((res) => { return res.json() })
            .then((data) => {
                // console.log(data);
                setProducts(data)
            })
    }, [])

    return (
        <>
            <div className='container'>
                <div className='row text-center mt-3'>
                    <div className='col-md-12'>
                        <h2>View all Products</h2></div>
                </div>
                <div className='row'>
                    <div className='col-md-12 p-5' id='product_card'>
                        {products.map((results) => (
                            <Products product={results} key={results._id} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ViewAllProducts;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminFooter from './AdminFooter';
import AdminHeader from './AdminHeader'
import AdminLeft from './AdminLeft';
function AdminAddProducts() {
    const [productName, setproductName] = useState('')
    const [productDesc, setproductDesc] = useState('')
    const [productPrice, setproductPrice] = useState('')
    const [message, setmessage] = useState('')
    const navigate = useNavigate()
    function handleSubmit(e) {
        e.preventDefault()
        console.log(productName, productDesc, productPrice);
        const bodydata = { productName, productDesc, productPrice }
        fetch('/admin/addproducts/', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bodydata)
        }).then((res) => {
            return res.json()
        }).then((data) => {
            console.log(data);
            if (data._id) {
                navigate('/admin/products');
            } else {
                setmessage("Something went wrong!")
            }
        })

    }
    return (
        <>
            <div className='container-fluid'>
                <AdminHeader />
                <div className='row mt-3'>
                    <AdminLeft />
                    <div className='col-md-9'>
                        <form method='post' onSubmit={(e) => { handleSubmit(e) }}>
                            {message}
                            <div className='mb-3'>
                                <label className='form-label' >Product Name</label>
                                <input className='form-control' type='text' placeholder='product name'
                                    value={productName}
                                    onChange={(e) => { setproductName(e.target.value) }}
                                />
                            </div>
                            <div className='mb-3'>
                                <label className='form-label' >Product Description</label>
                                <input className='form-control' type='text' placeholder='product description'
                                    value={productDesc}
                                    onChange={(e) => { setproductDesc(e.target.value) }}
                                />
                            </div>
                            <div className='mb-3'>
                                <label className='form-label' >Product Price</label>
                                <input className='form-control' type='number' placeholder='product price'
                                    value={productPrice}
                                    onChange={(e) => { setproductPrice(e.target.value) }}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary form-control">Add Product</button>
                        </form>
                    </div>
                </div>
                <AdminFooter />
            </div>
        </>
    );
}

export default AdminAddProducts;
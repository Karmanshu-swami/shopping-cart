import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminFooter from './AdminFooter';
import AdminHeader from './AdminHeader'
import AdminLeft from './AdminLeft';
function AdminProductDetails() {
    const { id } = useParams()
    const [productName, setproductName] = useState('')
    const [productDesc, setproductDesc] = useState('')
    const [productPrice, setproductPrice] = useState('')
    const [productStatus, setproductStatus] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`/admin/getsingleproduct/${id}`)
            .then((res) => { return res.json() })
            .then((data) => {
                // console.log(data);
                setproductName(data.productName)
                setproductDesc(data.productDesc)
                setproductPrice(data.productPrice)
                setproductStatus(data.productStatus)
            })
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        const bodydata = { productName, productDesc, productPrice, productStatus }
        fetch(`/admin/updateproduct/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bodydata)
        }).then((res) => { return res.json() })
            .then((data) => {
                // console.log(data);
                if (data.message == "Successfully updated the product") {
                    navigate('/admin/products')
                } else {
                    navigate('/admin/dashboard')
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
                            <div className='mb-3'>
                                <label className='form-label'>Product Name</label>
                                <input type='text'
                                    value={productName}
                                    className='form-control'
                                    onChange={(e) => { setproductName(e.target.value) }}
                                />
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Product Description</label>
                                <input type='text'
                                    value={productDesc}
                                    className='form-control'
                                    onChange={(e) => { setproductDesc(e.target.value) }}
                                />
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Product Price</label>
                                <input type='number'
                                    value={productPrice}
                                    className='form-control'
                                    onChange={(e) => { setproductPrice(e.target.value) }}
                                />
                            </div>
                            <label className='form-label'>Product Status</label>
                            <select value={productStatus} onChange={(e) => { setproductStatus(e.target.value) }} className='mb-3 form-select'>
                                <option value='Published'>Published</option>
                                <option value='Unpublished'>Unpublished</option>
                            </select>
                            <button type='submit' className='btn btn-primary form-control'>Update values</button>
                        </form>
                    </div>
                </div>
                <AdminFooter />
            </div>
        </>
    );
}

export default AdminProductDetails;
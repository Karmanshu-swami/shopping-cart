import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminFooter from './AdminFooter';
import AdminHeader from './AdminHeader'
import AdminLeft from './AdminLeft';
import ProductTable from './Pages/ProductTable';
function AdminProducts() {
    const [products, setproducts] = useState([])
    useEffect(() => {
        fetch('/admin/getallproducts')
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                // console.log(data);
                setproducts(data)
            })
    }, [])
    return (
        <>
            <div className='container-fluid'>
                <AdminHeader />
                <div className='row mt-3'>
                    <AdminLeft />
                    <div className='col-md-9'>
                        <Link to='/admin/addproducts'><button className='btn btn-primary form-control mb-3'>Add Products</button></Link>
                        {/* <h5 className='text-bold text-primary'>View All Products</h5> */}
                        <table className='table table-hover table-responsive'>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Product Name</th>
                                    <th>Product Description</th>
                                    <th>Product Price</th>
                                    <th>Product Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            {/* here keys are the serial no keys (index no you can say) and key is the unique value (which is the id for each of the document) */}
                            <tbody>
                                {products.map((result, keys) => (
                                    <ProductTable key={result._id} product={result} keys={keys} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <AdminFooter />
            </div>
        </>
    );
}

export default AdminProducts;
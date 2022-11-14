import { Link } from 'react-router-dom';
import AdminFooter from './AdminFooter';
import AdminHeader from './AdminHeader'
import AdminLeft from './AdminLeft';
function AdminProducts() {
    return (
        <>
            <div className='container-fluid'>
                <AdminHeader />
                <div className='row mt-3'>
                    <AdminLeft />
                    <div className='col-md-8'>
                        <Link to='/admin/addproducts'><button className='btn btn-primary form-control'>Add Products</button></Link>
                        <h5 className='text-bold text-primary'>View All Products</h5>
                    </div>
                </div>
                <AdminFooter />
            </div>
        </>
    );
}

export default AdminProducts;
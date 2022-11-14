import AdminFooter from './AdminFooter';
import AdminHeader from './AdminHeader'
import AdminLeft from './AdminLeft';
function AdminAddProducts() {
    return (
        <>
            <div className='container-fluid'>
                <AdminHeader />
                <div className='row mt-3'>
                    <AdminLeft />
                    <div className='col-md-8'>
                        <h3>Add products form</h3>
                    </div>
                </div>
                <AdminFooter />
            </div>
        </>
    );
}

export default AdminAddProducts;
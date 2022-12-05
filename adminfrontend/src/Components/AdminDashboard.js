import AdminFooter from './AdminFooter';
import AdminHeader from './AdminHeader'
import AdminLeft from './AdminLeft';
function AdminDashboard() {
    return (
        <>
            <div className='container-fluid'>
                <AdminHeader />
                <div className='row mt-3'>
                    <AdminLeft />
                    <div className='col-md-9'>
                        <h3>Admin Dashboard Mid Section</h3>
                    </div>
                </div>
                <AdminFooter />
            </div>
        </>
    );
}

export default AdminDashboard;
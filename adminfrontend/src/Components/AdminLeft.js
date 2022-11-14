import { Link } from 'react-router-dom'
function AdminLeft() {
    return (
        <>
            <div className='col-md-4'>
                <Link to='/admin/products'><button className='btn btn-success form-control'>Product Management</button></Link>
            </div>
        </>
    );
}

export default AdminLeft;
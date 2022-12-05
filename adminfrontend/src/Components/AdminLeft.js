import { Link } from 'react-router-dom'
function AdminLeft() {
    return (
        <>
            <div className='col-md-3'>
                <Link to='/admin/products'><button className='btn btn-success form-control'>Product Management</button></Link>
                <Link to='/admin/users'><button className='btn btn-success form-control mt-2'>Customer Management</button></Link>
            </div>
        </>
    );
}

export default AdminLeft;
import { AdminContext } from '../AdminContext'
import { useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
function AdminHeader() {
    const navigate = useNavigate()
    const { adminLoginName, setadminLoginName, adminLoginStatus, setadminLoginStatus } = useContext(AdminContext)

    function handleLogout() {
        setadminLoginName(localStorage.removeItem('adminLoginName'))
        setadminLoginStatus(localStorage.removeItem('adminLoginStatus'))
        navigate('/admin')
    }
    return (
        <>
            <div className='row bg-light pt-2 pb-2 mb-3 d-flex align-items-center'>
                <div className='col-md-3'>
                    <h4>Hello {adminLoginName}</h4>
                </div>
                <div className='col-md-7 text-center text-primary'>
                    <Link to='/admin/dashboard'><h2>Admin dashboard!!</h2></Link>
                </div>
                <div className='col-md-2'>
                    <button className='btn btn-primary' onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </>
    );
}

export default AdminHeader;
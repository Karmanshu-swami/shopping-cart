import { AdminContext } from '../AdminContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
function AdminDashboard() {
    const navigate = useNavigate()
    const { adminLoginName, setadminLoginName } = useContext(AdminContext)

    function handleLogout() {
        setadminLoginName(localStorage.removeItem('adminLoginName'))
        navigate('/admin')
    }
    return (
        <>
            <div className='container-fluid'>
                <div className='row bg-light mt-1 d-flex align-items-center'>
                    <div className='col-md-3'>
                        <h4>Hello {adminLoginName}</h4>
                    </div>
                    <div className='col-md-7 text-center text-primary'>
                        <h2>Admin dashboard!!</h2>
                    </div>
                    <div className='col-md-2'>
                        <button className='btn btn-primary' onClick={handleLogout}>Logout</button>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-md-4'>
                        <button className='btn btn-success form-control'>Product Management</button>
                    </div>
                    <div className='col-md-8'>
                        <h3>mid</h3>
                    </div>
                </div>
                <div className='row bg-light mt-5'>
                    <div className='col-md-12 text-center text-primary'>
                        <span>@Copyright - Karmanshu Swami</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminDashboard;
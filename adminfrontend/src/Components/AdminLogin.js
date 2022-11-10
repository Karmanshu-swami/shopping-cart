import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AdminLogin() {
    const [adminName, setAdminName] = useState('')
    const [adminPassword, setAdminPassword] = useState('')
    const [message, setMessage] = useState('')
    const navigate = useNavigate()
    function handleSubmit(e) {
        e.preventDefault(e)
        // console.log(adminName, adminPassword);
        const bodydata = { adminName, adminPassword };
        fetch('/admin/login', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bodydata)
        })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                // console.log(data);
                if (data.adminName) {
                    localStorage.setItem('adminLoginName', data.adminName)
                    localStorage.setItem('adminLoginStatus', 1)
                    navigate('/admin/dashboard')
                } else {
                    setMessage('Wrong Credentials!')
                }
            })
    }
    return (
        <>
            <section id="login">
                <div className="container bg-light mt-3">
                    <div className="row ">
                        <div className="col-md-4 ps-5">
                            <div className="text-center text-primary"><h2>Admin Login Here!</h2></div>
                            <span className='text-danger'>{message}</span>
                            <form method='post' onSubmit={(e) => { handleSubmit(e) }}>
                                <div className="mb-3">
                                    <label className="form-label">Username</label>
                                    <input type="text"
                                        value={adminName}
                                        onChange={(e) => { setAdminName(e.target.value) }}
                                        className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your data with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password"
                                        value={adminPassword}
                                        onChange={(e) => { setAdminPassword(e.target.value) }}
                                        className="form-control" id="exampleInputPassword1" />
                                </div>
                                <button type="submit" className="btn btn-primary form-control">Submit</button>
                            </form>
                        </div>
                        <div className="col-md-8"><img className="img-fluid" src='/images/login.webp' style={{ width: '600px', height: '450px', marginLeft: '50px' }} alt='logo' /></div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AdminLogin;
import { Link, useNavigate } from 'react-router-dom'
import { LoginContext } from '../LoginContex'
import { useContext } from 'react'
function Header() {
    const { userLoginName, setUserLoginName,
        userLoginStatus, setuserLoginStatus,
        cart, setcart
    } = useContext(LoginContext)
    const navigate = useNavigate()
    function handleLogout() {
        localStorage.removeItem('cart')
        navigate('/')
        setuserLoginStatus(localStorage.removeItem('userLoginStatus'))
        setUserLoginName(localStorage.removeItem('userLoginName'))
    }
    return (
        <section id='header'>
            <div className="container-fluid bg-light">
                <div className="row">
                    <div className="col-md-12">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <Link className="navbar-brand" to="/">React</Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
                                        {userLoginStatus ?
                                            <>
                                                <li className="nav-item">
                                                    <Link className="nav-link" aria-current="page" to="/">Welcome {userLoginName}</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/products">Products</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/myorders">My orders</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <button onClick={handleLogout} className='btn btn-primary nav-link'>Logout</button>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/cart"><button className='btn btn-success'>cart : {cart.totalitems ? cart.totalitems : 0}</button></Link>
                                                </li>
                                            </>
                                            :
                                            <>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/reg">Register</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/products">Products</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/cart"><button className='btn btn-success'>cart : {cart.totalitems ? cart.totalitems : 0}</button></Link>
                                                </li>
                                            </>
                                        }
                                    </ul>
                                    <form className="d-flex">
                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn btn-outline-success" type="submit">Search</button>
                                    </form>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;
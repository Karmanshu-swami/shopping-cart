import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import AdminDashboard from './Components/AdminDashboard';
import AdminLogin from './Components/AdminLogin';
import { AdminContext } from './AdminContext'
import AdminProducts from './Components/AdminProducts';
import AdminAddProducts from './Components/AdminAddProducts';
import AdminProductDetails from './Components/AdminProductDetails';


function App() {
  const [adminLoginName, setadminLoginName] = useState(localStorage.getItem('adminLoginName'))
  const [adminLoginStatus, setadminLoginStatus] = useState(localStorage.getItem('adminLoginStatus'))
  return (
    <>
      <Router>
        <AdminContext.Provider value={{ adminLoginName, setadminLoginName, adminLoginStatus, setadminLoginStatus }}>
          <Routes>
            <Route element={<AdminLogin />} path="/"></Route>
            <Route element={<AdminLogin />} path="/admin"></Route>
            <Route element={<AdminDashboard />} path="/admin/dashboard"></Route>
            <Route element={<AdminProducts />} path="/admin/products"></Route>
            <Route element={<AdminAddProducts />} path="/admin/addproducts"></Route>
            <Route element={<AdminProductDetails />} path="/admin/productdetails/:id"></Route>
          </Routes>
        </AdminContext.Provider>
      </Router>

    </>
  );
}

export default App;

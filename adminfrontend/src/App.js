import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import AdminDashboard from './Components/AdminDashboard';
import AdminLogin from './Components/AdminLogin';
import { AdminContext } from './AdminContext'


function App() {
  const [adminLoginName, setadminLoginName] = useState(localStorage.getItem('adminLoginName'))
  // const [adminLoginStatus, setadminLoginStatus] = useState(localStorage.getItem)
  return (
    <>
      <Router>
        <AdminContext.Provider value={{ adminLoginName, setadminLoginName }}>
          <Routes>
            <Route element={<AdminLogin />} path="/"></Route>
            <Route element={<AdminLogin />} path="/admin/"></Route>
            <Route element={<AdminDashboard />} path="/admin/dashboard"></Route>
          </Routes>
        </AdminContext.Provider>
      </Router>

    </>
  );
}

export default App;

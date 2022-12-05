import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header";
import Homepage from './Components/Homepage';
import Login from './Components/Login';
import Registration from './Components/Registration';
import ViewAllProducts from './Components/ViewAllProducts';
import { LoginContext } from './LoginContex'

function App() {
  const [userLoginName, setuserLoginName] = useState(localStorage.getItem('userLoginName'))
  const [userLoginStatus, setuserLoginStatus] = useState(localStorage.getItem('userLoginStatus'))

  return (
    <Router>
      <LoginContext.Provider value={{ userLoginName, setuserLoginName, userLoginStatus, setuserLoginStatus }}>
        <Header />
        <Routes>
          <Route element={<Homepage />} path="/"></Route>
          <Route element={<Login />} path="/login"></Route>
          <Route element={<Registration />} path="/reg"></Route>
          <Route element={<ViewAllProducts />} path="/products"></Route>
        </Routes>

      </LoginContext.Provider>
    </Router>
  );
}

export default App;
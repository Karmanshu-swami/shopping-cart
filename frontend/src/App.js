import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './Components/Cart.js';
import Header from "./Components/Header";
import Homepage from './Components/Homepage';
import Login from './Components/Login';
import MyOrders from './Components/MyOrders.js';
import Registration from './Components/Registration';
import ViewAllProducts from './Components/ViewAllProducts';
import { LoginContext } from './LoginContex'

function App() {
  const [userLoginName, setuserLoginName] = useState(localStorage.getItem('userLoginName'))
  const [userLoginStatus, setuserLoginStatus] = useState(localStorage.getItem('userLoginStatus'))
  const [cart, setcart] = useState('')

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <Router>
      <LoginContext.Provider value={{
        userLoginName, setuserLoginName,
        userLoginStatus, setuserLoginStatus,
        cart, setcart
      }}>
        <Header />
        <Routes>
          <Route element={<Homepage />} path="/"></Route>
          <Route element={<Login />} path="/login"></Route>
          <Route element={<Registration />} path="/reg"></Route>
          <Route element={<ViewAllProducts />} path="/products"></Route>
          <Route element={<MyOrders />} path="/myorders"></Route>
          <Route element={<Cart />} path="/cart"></Route>
        </Routes>

      </LoginContext.Provider>
    </Router>
  );
}

export default App;
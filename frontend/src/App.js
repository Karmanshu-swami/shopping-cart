import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Components/Header";
import Homepage from './Components/Homepage';
import Login from './Components/Login';
import Registration from './Components/Registration';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route element={<Homepage />} path="/"></Route>
        <Route element={<Login />} path="/login"></Route>
        <Route element={<Registration />} path="/reg"></Route>
      </Routes>


    </Router>
  );
}

export default App;
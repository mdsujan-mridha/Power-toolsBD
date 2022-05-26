import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Shared/Home/Home';
import Navbar from './Pages/Shared/NavBar/Navbar';
import Footer from './Pages/Shared/Footer/Footer';
import Products from './Pages/Components/Products/Products';
import Login from './Pages/Authentication/Login';
import Register from './Pages/Authentication/Register';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='products' element={<Products></Products>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

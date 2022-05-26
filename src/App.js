import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Shared/Home/Home';
import Navbar from './Pages/Shared/NavBar/Navbar';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <div>
         <Navbar></Navbar>
         <Routes>
           <Route path='/' element={<Home></Home>}></Route>
           <Route path='/home' element={<Home></Home>}></Route>
         </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

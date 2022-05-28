import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Shared/Home/Home';
import Navbar from './Pages/Shared/NavBar/Navbar';
import Footer from './Pages/Shared/Footer/Footer';
import Products from './Pages/Components/Products/Products';
import Login from './Pages/Authentication/Login';
import Register from './Pages/Authentication/Register';
import Purchase from './Pages/Components/Purchase/Purchase';
import Dashboard from './Pages/Components/Profile/Dashboard';
import MyOrder from './Pages/Components/Profile/MyOrder';
import Review from './Pages/Components/Profile/Review';
import Users from './Pages/Components/Profile/Users';
import { ToastContainer } from 'react-toastify';
import RequereAdmin from './Pages/Require/RequereAdmin';
import AddTools from './Pages/Components/AddTools/AddTools';
import AllReview from './Pages/Components/Profile/AllReview';
import Payment from './Pages/Components/Profile/Payment';

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='product/:productId' element={<Purchase></Purchase>}></Route>
        <Route path='products' element={<Products></Products>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='register' element={<Register></Register>}></Route>
        <Route path='allreview' element={<AllReview></AllReview>}></Route>
        <Route path="review" element={<Review></Review>}></Route>
        <Route path='dashboard' element={<Dashboard />}>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='users' element={<Users></Users>}> </Route>
          <Route path='addnewtools' element={<AddTools></AddTools>}></Route>
          <Route path='allreview' element={<AllReview></AllReview>}></Route>
          <Route path="review" element={<Review></Review>}></Route>
        </Route>

      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Shared/Home/Home';
import Navbar from './Pages/Shared/NavBar/Navbar';
import Footer from './Pages/Shared/Footer/Footer';
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
import RequereAuth from './Pages/Require/RequireAuth';
import Products from './Pages/Components/Products/Products';
import BusinessSummary from './Pages/Components/BusinessSummary/BusinessSummary';
import MyProfile from './Pages/Components/Profile/MyProfile';
import ManageProduct from './Pages/Components/Profile/ManageProduct';
import NotFound from './Pages/NotFound/NotFound';


function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='summary' element={<BusinessSummary></BusinessSummary>}></Route>
        <Route path='products' element={<RequereAuth>
          <Products></Products>
        </RequereAuth>}></Route>
        <Route path='product/:productId' element={<Purchase></Purchase>}></Route>
         
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
          <Route path='profile' element={<MyProfile></MyProfile>}></Route>
          <Route path='manageproduct' element={<ManageProduct></ManageProduct>}></Route>
        </Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;

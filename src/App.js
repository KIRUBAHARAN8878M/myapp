import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import TopBar from './Components/TopBar';
import HomePage from './pages/HomePage';
import CartScreen from './pages/CartScreen';
import Register from './pages/Register';
import Login from './pages/Login';
import Order from './pages/Order';
import AdminPage from './pages/AdminPage';
import AdminLogin from './pages/AdminLogin';




function App() {
  const currentUser = localStorage.getItem('currentUser')
  console.log(currentUser)
  return (
  
   <BrowserRouter>
     <TopBar/>
    <Routes>
    <Route path="/register" element={<Register /> } />
    <Route path="/login" element={<Login />} /> 
    <Route path="/" element={<HomePage /> } />
    <Route path="/cart" element={currentUser ? <CartScreen /> : <HomePage />} />
    <Route path="/orders" element={<Order />} />
    <Route path="/admin" element={<AdminPage />} />
    <Route path="/adminlogin" element={<AdminLogin />} />
    

    </Routes>
   </BrowserRouter>
   
  );
}

export default App;
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import CategoryProductsListing from './components/CategoryProductsListing';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Product from './components/Product';
import Register from './components/Register';
import User from './components/User';
import Users from './components/Users';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<><Header /><Home /><Footer /></>}></Route>
        {/* <Route index element={<><Header /><ProductListing /><Footer /></>} /> */}
        <Route path="/login" element={<><Header /><Login /><Footer /></>} />
        <Route path="/register" element={<><Header /><Register /><Footer /></>} />
        <Route path="/users" element={<><Header /><Users /><Footer /></>} />
        <Route path="/user/:id" element={<><Header /><User /><Footer /></>} />
        <Route path="/product/:id" element={<><Header /><Product /><Footer /></>} />
        <Route path="/category/:category" element={<><Header /><CategoryProductsListing /><Footer /></>} />
        <Route path="/checkout/cart" element={<><Header /><Cart /><Footer /></>} />
      </Routes>

    </Router>
  );
}

export default App;
